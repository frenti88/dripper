import { useState, useMemo, useCallback, useDeferredValue, lazy, Suspense } from 'react';
import type { DropPhase, CartItem } from './types';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { DRYP_DRIPS, type DrypDrip, type PinterestBoard } from './data/pinterestPinsData';

// Pinterest Style Components (Critical path, loaded eagerly)
import { PinterestHeader } from './components/PinterestHeader';
import { CategoryPillBar } from './components/CategoryPillBar';
import { DropPinterestBanner } from './components/DropPinterestBanner';
import { MasonryFeed } from './components/MasonryFeed';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { playPressStamp, playCeramicChime } from './utils/audioSynth';

// Heavy secondary views & dialogs (Code-split asynchronously)
const BoardsView = lazy(() => import('./components/BoardsView').then(m => ({ default: m.BoardsView })));
const PinDetailModal = lazy(() => import('./components/PinDetailModal').then(m => ({ default: m.PinDetailModal })));
const CartDrawer = lazy(() => import('./components/CartDrawer').then(m => ({ default: m.CartDrawer })));
const NotifyModal = lazy(() => import('./components/NotifyModal').then(m => ({ default: m.NotifyModal })));
const InfoDrawer = lazy(() => import('./components/InfoDrawer').then(m => ({ default: m.InfoDrawer })));
import type { InfoDrawerType } from './components/InfoDrawer';

function MainApp() {
  const [currentPhase] = useState<DropPhase>('LIVE');
  const [currentView, setCurrentView] = useState<'explore' | 'boards'>('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeFilterStockOnly, setActiveFilterStockOnly] = useState(false);
  const [isSavedOnly, setIsSavedOnly] = useState(false);
  const [infoDrawerType, setInfoDrawerType] = useState<InfoDrawerType>(null);
  
  // Non-blocking deferred search query for high INP responsiveness
  const deferredSearchQuery = useDeferredValue(searchQuery);

  // Saved Drips State (Shelf Curation)
  const [savedDripIds, setSavedDripIds] = useState<Set<string>>(() => new Set(['drip-fossil-t', 'drip-wabi-kintsugi']));
  
  // Selected Drip Modal
  const [selectedDrip, setSelectedDrip] = useState<DrypDrip | null>(null);

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const { products, t } = useLanguage();

  // Toggle Save Drip
  const handleToggleSaveDrip = useCallback((dripId: string) => {
    setSavedDripIds(prev => {
      const next = new Set(prev);
      if (next.has(dripId)) {
        next.delete(dripId);
      } else {
        next.add(dripId);
        playCeramicChime();
      }
      return next;
    });
  }, []);

  // Add to Bag handler
  const handleAddToCart = useCallback((productId: string, selectedColor?: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === productId && item.selectedColor === selectedColor);
      if (existing) {
        return prev.map(item =>
          item.product.id === productId && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedColor: selectedColor || product.paletteColors[0]?.name || 'Standard'
        }
      ];
    });

    setAddedProductId(productId);
    playPressStamp();
    setTimeout(() => setAddedProductId(null), 2000);
  }, [products]);

  // Cart quantity updates
  const handleUpdateQuantity = useCallback((productId: string, delta: number) => {
    setCartItems(prev => {
      return prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  }, []);

  // Remove from bag
  const handleRemoveItem = useCallback((productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  }, []);

  // Filtered Drips computation using non-blocking deferredSearchQuery
  const filteredDrips = useMemo(() => {
    return DRYP_DRIPS.filter(drip => {
      // Saved only filter
      if (isSavedOnly && !savedDripIds.has(drip.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && drip.category !== selectedCategory) {
        return false;
      }

      // In stock filter
      if (activeFilterStockOnly) {
        if (!drip.stockStatus || (drip.stockStatus !== 'available' && drip.stockStatus !== 'low_stock')) {
          return false;
        }
      }

      // Search Query filter
      if (deferredSearchQuery.trim()) {
        const q = deferredSearchQuery.toLowerCase().trim();
        const matchesTitle = drip.title.toLowerCase().includes(q);
        const matchesSubtitle = drip.subtitle.toLowerCase().includes(q);
        const matchesTags = drip.tags.some(t => t.toLowerCase().includes(q));
        const matchesAuthor = drip.author.name.toLowerCase().includes(q);
        const matchesEmotion = drip.level01Emotion?.toLowerCase().includes(q);
        return matchesTitle || matchesSubtitle || matchesTags || matchesAuthor || matchesEmotion;
      }

      return true;
    });
  }, [selectedCategory, activeFilterStockOnly, deferredSearchQuery, isSavedOnly, savedDripIds]);

  // Board click handler
  const handleSelectBoard = useCallback((board: PinterestBoard) => {
    setSelectedCategory(board.category);
    setCurrentView('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#121613] font-sans antialiased selection:bg-[#c05a3e]/20 selection:text-[#121613] flex flex-col">
      
      {/* Accessibility Skip Link */}
      <a 
        href="#main-feed" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-5 py-3 bg-[#121613] text-[#c05a3e] text-xs font-mono font-bold uppercase tracking-wider rounded-xl border-2 border-[#c05a3e] shadow-2xl"
      >
        {t('skipToContent')}
      </a>

      {/* Pinterest Sticky Global Header */}
      <PinterestHeader
        onOpenCart={() => setIsCartOpen(true)}
        onOpenNotify={() => setIsNotifyOpen(true)}
        cartCount={totalCartCount}
        savedCount={savedDripIds.size}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentView={currentView}
        onViewChange={setCurrentView}
        isSavedOnly={isSavedOnly}
        onToggleSavedOnly={() => {
          setIsSavedOnly(prev => !prev);
          if (currentView !== 'explore') setCurrentView('explore');
        }}
      />

      {/* Category Pills & Quick Filter Bar */}
      <CategoryPillBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        activeFilterStockOnly={activeFilterStockOnly}
        onToggleStockFilter={() => setActiveFilterStockOnly(prev => !prev)}
      />

      <main id="main-feed" className="flex-1">
        {/* Drop Status Live Banner (Pinterest style) */}
        <DropPinterestBanner
          currentPhase={currentPhase}
          onOpenNotify={() => setIsNotifyOpen(true)}
          onExploreDrop={() => {
            setSelectedCategory('Prehistoric');
            setCurrentView('explore');
          }}
        />

        {/* View Switch: Explore Masonry Feed vs Curated Boards */}
        {currentView === 'explore' ? (
          <MasonryFeed
            drips={filteredDrips}
            savedDripIds={savedDripIds}
            onToggleSave={handleToggleSaveDrip}
            onSelectDrip={setSelectedDrip}
            onQuickAddToCart={(prodId) => handleAddToCart(prodId)}
            addedProductId={addedProductId}
            isSavedOnly={isSavedOnly}
            onResetFilters={() => {
              setSelectedCategory('All');
              setActiveFilterStockOnly(false);
              setIsSavedOnly(false);
              setSearchQuery('');
            }}
          />
        ) : (
          <Suspense fallback={
            <div className="w-full py-24 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#121613] border-t-transparent animate-spin" />
            </div>
          }>
            <BoardsView onSelectBoard={handleSelectBoard} />
          </Suspense>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenNotify={() => setIsNotifyOpen(true)}
        onOpenFAQ={() => setInfoDrawerType('faq')}
        onOpenExtraction={() => setInfoDrawerType('extraction')}
        onOpenStory={() => setInfoDrawerType('story')}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onNavigateView={(view) => setCurrentView(view)}
      />

      {/* Heavy Modals & Dialogs (Loaded on Demand) */}
      <Suspense fallback={null}>
        {selectedDrip && (
          <PinDetailModal
            drip={selectedDrip}
            onClose={() => setSelectedDrip(null)}
            isSaved={savedDripIds.has(selectedDrip.id)}
            onToggleSave={handleToggleSaveDrip}
            onAddToCart={handleAddToCart}
            onSelectDrip={setSelectedDrip}
            isAdded={selectedDrip.productId === addedProductId}
          />
        )}

        {isCartOpen && (
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        )}

        {isNotifyOpen && (
          <NotifyModal
            isOpen={isNotifyOpen}
            onClose={() => setIsNotifyOpen(false)}
          />
        )}

        {infoDrawerType && (
          <InfoDrawer
            isOpen={Boolean(infoDrawerType)}
            type={infoDrawerType}
            onClose={() => setInfoDrawerType(null)}
          />
        )}
      </Suspense>

    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;

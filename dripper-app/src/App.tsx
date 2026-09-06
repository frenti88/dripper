import { useState, useEffect, useMemo, useCallback, useDeferredValue, lazy, Suspense } from 'react';
import type { CartItem } from './types';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { DRYP_DRIPS, type DrypDrip, type PinterestBoard } from './data/pinterestPinsData';
import { navigateWithTransition } from './utils/viewTransitions';

// Pinterest Style Components (Critical path, loaded eagerly)
import { PinterestHeader } from './components/PinterestHeader';
import { CategoryPillBar } from './components/CategoryPillBar';
import { MasonryFeed } from './components/MasonryFeed';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { playPressStamp, playCeramicChime } from './utils/audioSynth';

// Heavy secondary views & dialogs (Code-split asynchronously)
const BoardsView = lazy(() => import('./components/BoardsView').then(m => ({ default: m.BoardsView })));
const CartDrawer = lazy(() => import('./components/CartDrawer').then(m => ({ default: m.CartDrawer })));
const NotifyModal = lazy(() => import('./components/NotifyModal').then(m => ({ default: m.NotifyModal })));
const InfoDrawer = lazy(() => import('./components/InfoDrawer').then(m => ({ default: m.InfoDrawer })));
const DripDetailPage = lazy(() => import('./components/DripDetailPage').then(m => ({ default: m.DripDetailPage })));
import type { InfoDrawerType } from './components/InfoDrawer';

// Idle prefetch of product detail chunk for instant transition
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  window.requestIdleCallback(() => {
    import('./components/DripDetailPage');
  });
}

function parseRouteFromLocation(): { route: 'explore' | 'boards' | 'drip'; dripId: string | null } {
  if (typeof window === 'undefined') return { route: 'explore', dripId: null };
  const path = window.location.pathname;
  const match = path.match(/^\/drip\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return { route: 'drip', dripId: match[1] };
  }
  const hash = window.location.hash;
  const hashMatch = hash.match(/^#\/?drip\/([a-zA-Z0-9_-]+)/);
  if (hashMatch) {
    return { route: 'drip', dripId: hashMatch[1] };
  }
  if (path === '/boards' || hash === '#/boards') {
    return { route: 'boards', dripId: null };
  }
  return { route: 'explore', dripId: null };
}

function MainApp() {
  const [currentView, setCurrentView] = useState<'explore' | 'boards'>('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isSavedOnly, setIsSavedOnly] = useState(false);
  const [infoDrawerType, setInfoDrawerType] = useState<InfoDrawerType>(null);
  
  // Non-blocking deferred search query for high INP responsiveness
  const deferredSearchQuery = useDeferredValue(searchQuery);

  // Dedicated Route State (/drip/:id, /boards, /)
  const [routeInfo, setRouteInfo] = useState(() => parseRouteFromLocation());
  const [transitionDripId, setTransitionDripId] = useState<string | null>(() => parseRouteFromLocation().dripId);

  // Saved Drips State (Shelf Curation)
  const [savedDripIds, setSavedDripIds] = useState<Set<string>>(() => new Set(['drip-music-vinyl', 'drip-arch-bauhaus']));
  
  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  // Sincronización del historial del navegador (Back/Forward y URLs directas)
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseRouteFromLocation();
      if (parsed.dripId) {
        setTransitionDripId(parsed.dripId);
      }
      navigateWithTransition(() => {
        setRouteInfo(parsed);
      });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Drip activo derivado de la URL
  const activeDrip = useMemo(() => {
    if (routeInfo.route !== 'drip' || !routeInfo.dripId) return null;
    return DRYP_DRIPS.find(d => d.id === routeInfo.dripId || d.productId === routeInfo.dripId) || null;
  }, [routeInfo]);

  const isDripView = routeInfo.route === 'drip' && activeDrip !== null;

  // Redirección en historial si la URL del drip no existe en el catálogo activo
  useEffect(() => {
    if (routeInfo.route === 'drip' && !activeDrip) {
      window.history.replaceState(null, '', '/');
    }
  }, [routeInfo.route, activeDrip]);

  // Handlers de navegación cinemática
  const handleSelectDrip = useCallback((drip: DrypDrip) => {
    setTransitionDripId(drip.id);
    navigateWithTransition(() => {
      setRouteInfo({ route: 'drip', dripId: drip.id });
      window.history.pushState({ dripId: drip.id }, '', `/drip/${drip.id}`);
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, []);

  const handleBackToCatalog = useCallback(() => {
    navigateWithTransition(() => {
      setRouteInfo({ route: 'explore', dripId: null });
      if (window.history.state?.dripId) {
        window.history.back();
      } else {
        window.history.pushState(null, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, []);

  const handleSelectCategory = useCallback((cat: string) => {
    navigateWithTransition(() => {
      setSelectedCategory(cat);
      if (routeInfo.route === 'drip') {
        setRouteInfo({ route: 'explore', dripId: null });
        window.history.pushState(null, '', '/');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
  }, [routeInfo.route]);

  const handleViewChange = useCallback((view: 'explore' | 'boards') => {
    navigateWithTransition(() => {
      setCurrentView(view);
      setRouteInfo({ route: view, dripId: null });
      window.history.pushState(null, '', view === 'boards' ? '/boards' : '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, []);

  const handleSelectBoard = useCallback((board: PinterestBoard) => {
    navigateWithTransition(() => {
      setSelectedCategory(board.category);
      setCurrentView('explore');
      setRouteInfo({ route: 'explore', dripId: null });
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, []);

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
  }, [selectedCategory, deferredSearchQuery, isSavedOnly, savedDripIds]);

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
        currentView={routeInfo.route === 'boards' ? 'boards' : currentView}
        onViewChange={handleViewChange}
        isSavedOnly={isSavedOnly}
        onToggleSavedOnly={() => {
          setIsSavedOnly(prev => !prev);
          if (routeInfo.route === 'drip') {
            setRouteInfo({ route: 'explore', dripId: null });
            window.history.pushState(null, '', '/');
          }
          if (currentView !== 'explore') setCurrentView('explore');
        }}
      />

      {/* Category Pills Bar (Oculto en página de drip individual para máxima inmersión editorial) */}
      {routeInfo.route !== 'drip' && (
        <CategoryPillBar
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
      )}

      <main id="main-feed" className="flex-1">
        {/* Renderizado de vista condicional: Página de Detalle de Drip vs Feed vs Tableros */}
        {isDripView && activeDrip ? (
          <Suspense fallback={
            <div className="w-full min-h-[60vh] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#151413] border-t-transparent animate-spin" />
            </div>
          }>
            <DripDetailPage
              drip={activeDrip}
              onBack={handleBackToCatalog}
              onSelectDrip={handleSelectDrip}
              isSaved={savedDripIds.has(activeDrip.id)}
              onToggleSave={handleToggleSaveDrip}
              onAddToCart={handleAddToCart}
              isAdded={activeDrip.productId === addedProductId}
              savedDripIds={savedDripIds}
              addedProductId={addedProductId}
            />
          </Suspense>
        ) : currentView === 'explore' ? (
          <MasonryFeed
            drips={filteredDrips}
            savedDripIds={savedDripIds}
            onToggleSave={handleToggleSaveDrip}
            onSelectDrip={handleSelectDrip}
            onQuickAddToCart={(prodId) => handleAddToCart(prodId)}
            addedProductId={addedProductId}
            transitionDripId={transitionDripId}
            isSavedOnly={isSavedOnly}
            onResetFilters={() => {
              setSelectedCategory('All');
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
        onSelectCategory={(cat) => handleSelectCategory(cat)}
        onNavigateView={(view) => handleViewChange(view)}
      />

      {/* Modals & Drawers */}
      <Suspense fallback={null}>
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

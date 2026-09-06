import { flushSync } from 'react-dom';

/**
 * ⚡ OVERDRIVE: Native View Transitions API runner with flushSync and fallback.
 * Enables 60fps shared element morphing between the catalog feed and the product detail page.
 */
export function navigateWithTransition(updateFn: () => void): void {
  if (
    typeof document !== 'undefined' &&
    'startViewTransition' in document &&
    typeof (document as any).startViewTransition === 'function' &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    (document as any).startViewTransition(() => {
      flushSync(() => {
        updateFn();
      });
    });
  } else {
    updateFn();
  }
}

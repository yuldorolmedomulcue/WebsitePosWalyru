import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import ErrorBoundary from '@components/common/error-boundary';
import SchemaMarkup from '@components/common/schema-markup';
import AOS from 'aos';

export function AppProvider() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  useEffect(() => {
    const unsubscribe = router.subscribe(() => {
      requestAnimationFrame(() => {
        AOS.refreshHard();
      });
    });

    return unsubscribe;
  }, []);

  return (
    <ErrorBoundary>
      <SchemaMarkup />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
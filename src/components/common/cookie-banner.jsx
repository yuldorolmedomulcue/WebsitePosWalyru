import { useState } from 'react';

const COOKIE_CONSENT_KEY = 'cookieConsent';

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return !window.localStorage.getItem(COOKIE_CONSENT_KEY);
  });

  const saveConsent = (value) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    }

    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-[60] px-4 sm:bottom-6">
      <div className="mx-auto w-full max-w-4xl rounded-[1.8rem] bg-white px-6 py-6 text-black shadow-2xl sm:px-8 sm:py-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-blueGray-950">Cookies</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-800">
              En Walyru POS usamos tus cookies para entender cómo usas nuestra página web, proporcionar contenido de terceros y apoyar nuestras iniciativas de marketing. Puedes configurar tus preferencias o aceptar todas las cookies para mejorar tu experiencia. Para más información, consulta nuestra&nbsp;
              <a href="/" className="font-semibold underline underline-offset-2">
                Política de cookies.
              </a>
            </p>
          </div>
          <button
            type="button"
            onClick={() => saveConsent('dismissed')}
            aria-label="Cerrar ventana de cookies"
            className="shrink-0 rounded-full p-2 text-black transition hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => saveConsent('configured')}
            className="px-4 py-2 text-xl font-semibold text-blueGray-950 underline underline-offset-2 transition hover:opacity-80"
          >
            Rechazar Todo
          </button>

          <button
            type="button"
            onClick={() => saveConsent('accepted')}
            className="rounded-full bg-green-500 px-10 py-4 text-xl font-semibold text-white transition hover:opacity-90"
          >
            Aceptar y continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
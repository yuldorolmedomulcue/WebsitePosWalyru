import { useEffect } from 'react';

function MetaHead({ 
  title = 'Software POS para Negocio | Walyru', 
  description = 'Software POS profesional con IA integrada para negocios. Sistema de punto de venta, facturación electrónica, gestión de inventario.',
  url = 'https://walyru.com',
  image = '/images/acceso1.png',
  type = 'website',
  keywords = 'software pos, pos sistema, punto de venta, facturación pos'
}) {
  useEffect(() => {
    // Actualizar title
    document.title = title;
    
    // Actualizar meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      let element = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );
      
      if (!element) {
        element = document.createElement('meta');
        isProperty ? element.setAttribute('property', name) : element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Actualizar canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Scroll al top
    window.scrollTo(0, 0);
  }, [title, description, url, image, type, keywords]);

  return null;
}

export default MetaHead;

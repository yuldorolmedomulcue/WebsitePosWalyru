function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://walyru.com/#organization",
        "name": "Walyru POS",
        "url": "https://walyru.com",
        "logo": "/images/acceso1.png",
        "description": "Software POS profesional con IA integrada para negocios. Sistema de punto de venta, facturación y gestión de inventario.",
        "sameAs": [
          "https://www.facebook.com/walyru",
          "https://www.instagram.com/walyru",
          "https://www.linkedin.com/company/walyru"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "availableLanguage": ["es", "en"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://walyru.com/#website",
        "url": "https://walyru.com",
        "name": "Walyru POS - Software de Punto de Venta y Facturación",
        "description": "Software POS con IA integrada para gestionar ventas, inventario y facturación electrónica",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://walyru.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://walyru.com/#software",
        "name": "Walyru POS",
        "alternateName": "Software POS, Sistema Punto de Venta Walyru",
        "description": "Software POS profesional con inteligencia artificial para comercios y negocios. Gestiona ventas en tiempo real, facturación, inventario y análisis de datos.",
        "url": "https://walyru.com",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": ["Web", "Windows", "MacOS", "Android", "iOS"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Prueba gratis sin tarjeta de crédito"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "featureList": [
          "Sistema POS en tiempo real",
          "Facturación electrónica",
          "Gestión de inventario",
          "Inteligencia Artificial integrada",
          "Control de medios de pago",
          "Reportes y análisis",
          "Soporte 24/7"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://walyru.com/#localbusiness",
        "name": "Walyru POS",
        "url": "https://walyru.com",
        "telephone": "+1-800-WALYRU",
        "description": "Solución profesional de software POS para negocios de cualquier tamaño",
        "areaServed": ["CO", "AR", "MX", "ES", "PE"],
        "priceRange": "$$"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://walyru.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Características",
            "item": "https://walyru.com/about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Precios",
            "item": "https://walyru.com/pricing"
          }
        ]
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}

export default SchemaMarkup;

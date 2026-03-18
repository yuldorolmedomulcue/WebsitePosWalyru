import React from 'react';
import Header from './header';
import Footer from './footer';
import CookieBanner from '@components/common/cookie-banner';
import MetaHead from '@components/common/meta-head';
import FloatingContactButton from '@components/common/floating-contact-button';
/**
 * Main page layout component with header and footer
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} [props.title] - Page title for SEO
 * @param {string} [props.description] - Meta description for SEO
 * @param {string} [props.keywords] - Meta keywords for SEO
 * @param {string} [props.url] - Canonical URL
 * @param {string} [props.image] - OG image URL
 * @param {string} [props.className=''] - Additional CSS classes
 */
function PageLayout({ 
  children, 
  title = 'Walyru POS - Software de Punto de Venta y Facturación',
  description = 'Software POS profesional con IA integrada para negocios. Sistema de punto de venta, facturación electrónica, gestión de inventario.',
  keywords = 'software pos, pos sistema, punto de venta, facturación pos, sistema punto de venta',
  url = 'https://walyru.com',
  image = 'https://walyru.com/images/acceso1.png',
  className = '' 
}) {
  return (
    <div className={`antialiased bg-body text-body font-body ${className}`}>
      <MetaHead 
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        image={image}
      />
      <FloatingContactButton />
      <div className="relative">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </div>
  );
}

export default PageLayout;

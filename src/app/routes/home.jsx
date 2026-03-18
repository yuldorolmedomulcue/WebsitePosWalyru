import PageLayout from '@components/layout/page-layout';
import HeroSection from '@features/home/components/hero-section';
import ClientsCarouselSection from '@features/home/components/clients-carousel-section';
import WhyUsSection from '@features/home/components/why-us-section';
import SecureAccessSection from '@features/home/components/secure-access-section';
import TestimonialsSection from '@features/home/components/testimonials-section';
import BillingInfrastructureSection from '@features/home/components/billing-infrastructure-section';

function HomePage() {
  return (
    <PageLayout 
      title="Software POS para Negocio | Sistema de Punto de Venta y Facturación | Walyru"
      description="Software POS profesional con IA integrada para negocios. Sistema de punto de venta, gestión de inventario, facturación electrónica y análisis en tiempo real. ¡Crea tu cuenta gratis!"
      keywords="software pos, sistema pos, punto de venta, pos facturación, software punto de venta, sistema facturación, pos para negocios, software pos facturación electrónica"
      url="https://walyru.com/"
    >
      <HeroSection />
      <ClientsCarouselSection />
      <WhyUsSection />
      <SecureAccessSection />
      <BillingInfrastructureSection />
      <TestimonialsSection />
    </PageLayout>
  );
}

export default HomePage;

import PageLayout from '@components/layout/page-layout';
import PricingSection from '@features/pricing/components/pricing-section';
import FAQSection from '@features/pricing/components/faq-section';

function PricingPage() {
  return (
    <PageLayout 
      title="Planes de Precios POS | Software de Punto de Venta Flexible | Walyru"
      description="Descubre nuestros planes de precios flexibles para software POS. Encuentra la solución perfecta para tu negocio con facturación electrónica y gestión de inventario."
      keywords="precios software pos, planes pos, software punto de venta precio, pos facturación, plan software pos"
      url="https://walyru.com/pricing"
    >
      <PricingSection />
      <FAQSection />
    </PageLayout>
  );
}

export default PricingPage;
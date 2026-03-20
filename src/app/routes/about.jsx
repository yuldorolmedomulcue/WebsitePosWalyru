import PageLayout from '@components/layout/page-layout';
import AboutHeroSection from '@features/about/components/about-hero-section';
import TeamSection from '@features/about/components/team-section';

function AboutPage() {
  return (
    <PageLayout 
      title="Sobre Walyru POS | Solución de Software POS Profesional"
      description="Conoce Walyru POS, la solución profesional de software de punto de venta con IA integrada. Descubre cómo optimizamos la gestión de negocios con tecnología avanzada."
      keywords="software pos, solución punto de venta, sistema pos profesional, walyru pos, software facturación"
      url="https://walyru.com/about"
    >
      <AboutHeroSection />
      <TeamSection />
    </PageLayout>
  );
}

export default AboutPage;
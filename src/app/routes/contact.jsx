import PageLayout from '@components/layout/page-layout';
import ContactFormSection from '@features/contact/components/contact-form-section';

function ContactPage() {
  return (
    <PageLayout 
      title="Contacto | Software POS Walyru - Soporte Profesional"
      description="¿Preguntas sobre nuestro software POS? Contacta con nuestro equipo de soporte. Estamos aquí para ayudarte a implementar la mejor solución de facturación y punto de venta."
      keywords="contacto software pos, soporte pos, consulta sistema facturación, ayuda software punto de venta"
      url="https://walyru.com/contact"
    >
      <ContactFormSection />
    </PageLayout>
  );
}

export default ContactPage;
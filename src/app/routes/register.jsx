import PageLayout from '@components/layout/page-layout';
import AuthSection from '@features/auth/components/auth-section';

function RegisterPage() {
  return (
    <PageLayout 
      title="Registrarse Gratis | Software POS Walyru - Crea tu Cuenta Ahora"
      description="Regístrate gratis en Walyru POS y comienza a optimizar tu negocio. Acceso inmediato a software de punto de venta, facturación y control de inventario."
      keywords="registrarse pos, crear cuenta pos, software pos gratis, registro software punto de venta"
      url="https://walyru.com/register"
    >
      <AuthSection type="register" />
    </PageLayout>
  );
}

export default RegisterPage;
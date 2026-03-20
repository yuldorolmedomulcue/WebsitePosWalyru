import PageLayout from '@components/layout/page-layout';
import AuthSection from '@features/auth/components/auth-section';

function LoginPage() {
  return (
    <PageLayout 
      title="Iniciar Sesión | Software POS Walyru - Acceso a tu Cuenta"
      description="Inicia sesión en tu cuenta de Walyru POS. Accede a tu sistema de punto de venta, facturación y gestión de inventario."
      keywords="iniciar sesión pos, login software pos, acceso pos, ingresar cuenta pos"
      url="https://walyru.com/login"
    >
      <AuthSection type="login" />
    </PageLayout>
  );
}

export default LoginPage;

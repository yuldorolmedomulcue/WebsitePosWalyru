const redirectUrl = (params) => {
  const baseUrl = 'https://pos.walyru.com/auth/registro.php';

  const queryParams = new URLSearchParams(params).toString();
  // Formato para agregar los parámetros a la URL (?plan=1&tipo_usuario=Usuario&mensualidad=Mensual)
  var period = params.mensualidad === 'Mes' ? 'Mensual' : 'Anual';
  var userType = params.tipo_usuario === 'Usuario' ? 'Usuario' : 'Proveedor';
  var plan = params.plan;

  const finalUrl = `${baseUrl}?plan=${plan}&tipo_usuario=${userType}&mensualidad=${period}`;

  return finalUrl;


}

const PricingCard = ({ plan, isMonthly }) => {
  // Mapear IDs de planes a números según el estándar requerido
  const getPlanId = (planId) => {
    switch (planId) {
      case 'basic':
        return 3; // Básico
      case 'business':
        return 1; // Estándar
      case 'premium':
        return 4; // Premium
      default:
        return 1;
    }
  };

  const price = isMonthly ? plan.monthlyPrice : plan.annualPrice;
  const period = isMonthly ? 'Mes' : 'Año';
  const userType = 'Usuario';
  const sideBadgeText = plan.badge ?? 'Más popular';
  const cardHighlightClasses = plan.popular
    ? 'border-blue-900 shadow-2xl shadow-blue-900/15 lg:-translate-y-1'
    : 'border-blue-900/30';
  const btnClasses = plan.popular
    ? 'text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900/40'
    : 'text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-500/40';
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(Number(price) || 0);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className={`relative px-8 pt-12 pb-12 h-full bg-white border-2 overflow-hidden rounded-5xl transition duration-300 hover:shadow-lg hover: translate-y-1 ${cardHighlightClasses}`} data-aos="fade-up" data-aos-delay="200">
        {plan.popular && (
          <div className="absolute top-0 right-0 z-10 w-32 h-32 pointer-events-none animation" data-aos="fade-up" data-aos-delay="300">
            <span className="absolute top-7 -right-[72px] block w-64 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 bg-blue-100 text-center rotate-45 border border-blue-200 shadow-sm">
              {sideBadgeText}
            </span>
          </div>
        )}

        <p className="mb-2 text-lg text-green-400 font-light" data-aos="fade-up" data-aos-delay="400">{plan.name}</p>
        <p className="mb-6 text-gray-500" data-aos="fade-up" data-aos-delay="500">{plan.description}</p>

        <p className="mb-4 text-black font-medium text-5xl" data-aos="fade-up" data-aos-delay="600">
          <span>${formattedPrice}</span>
          <span className="text-base font-medium text-green-500"> / {period}</span>
        </p>

        <p className="mb-6 text-xs text-gray-500 font-light uppercase" data-aos="fade-up" data-aos-delay="700">Que incluye</p>

        <ul className="mb-10" data-aos="fade-up" data-aos-delay="800">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center mb-4">
              <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                <i className="ri-check-fill"></i>
              </div>
              <p className="text-black">{feature}</p>
            </li>
          ))}
        </ul>

        <a className={`inline-block w-full px-8 py-4 text-center font-medium rounded-full transition duration-300 ${btnClasses}`}
          href={redirectUrl({ plan: getPlanId(plan.id), tipo_usuario: userType, mensualidad: period })}>
          {plan.ctaText}
        </a>

        {/* <img className="absolute bottom-0 right-0" src="/images/pricing-shadow.svg" alt="" /> */}
      </div>
    </div>
  );
};

export default PricingCard;
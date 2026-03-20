import featuresData from '@data/features.json';

function SecureAccessSection() {
  if (!featuresData) {
    return null;
  }

  const features = featuresData.secureAccessFeatures;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full md:w-1/2 p-8" data-aos="fade-right">
            <div className="relative z-10 md:max-w-md">
              <span className="inline-block mb-2.5 text-green-400 font-medium bg-gray-50 px-3 py-2 rounded-full">Seguridad y control</span>
              <h2 className="font-heading mb-6 text-6xl md:text-7xl text-black tracking-tighter-xl">
                Acceso seguro  <span className="text-green-500">a tus datos</span>
              </h2>
              <p className="mb-8 text-dark text-opacity-60">
                Tu información está protegida con accesos por roles, historial de movimientos y respaldo de datos.
              </p>
              <ul>
                {features.map((feature, index) => (
                  <li key={index} className="inline-flex mb-3.5">
                    <i className="ri-checkbox-circle-line text-green-500 text-xl mr-3"></i>
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8" data-aos="fade-left" data-aos-delay="100">
            <img className="mx-auto rounded-2xl transform hover:scale-105 transition duration-500 " src="/images/acceso2.jpg" alt="" />
          </div>
        </div>
      </div>
      <img className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-48" src="/images/acceso1.png" alt=""/>      
    </section>
  );
}

export default SecureAccessSection;
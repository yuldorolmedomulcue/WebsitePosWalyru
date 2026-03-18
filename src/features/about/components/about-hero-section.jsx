function AboutHeroSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="md:max-w-xl text-center mx-auto mb-20" data-aos="fade-up">
          <span className="inline-block mb-2.5 text-green-400 font-medium bg-gray-50 px-3 py-2 rounded-full">Creado por emprendedores para emprendedores</span>
          <h2 className="font-heading text-7xl text-black tracking-tighter-xl">Sobre nosotros</h2>
        </div>
        <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-wrap lg:items-center -m-8 lg:-m-12">
            <div className="w-full md:w-1/2 p-8 lg:p-12" data-aos="fade-right" data-aos-delay="150">
              <div className="max-w-max mx-auto">
                <img className="rounded-3xl" src="/images/about.webp" alt="logo de lo que hacemos" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-12" data-aos="fade-left" data-aos-delay="200">
              <span className="inline-block mb-2.5 text-green-400 font-medium bg-gray-50 px-3 py-2 rounded-full">Recorrido de lo que somos</span>
              <h2 className="mb-6 text-5xl md:text-6xl text-black tracking-tighter">Dos ingenieros <span className="text-green-400">con el propósito de crecer tu negocio</span></h2>
              <p className="mb-10 text-black text-opacity-60">Somos dos Ingenieros de Software que emprendimos creando un sistema POS pensado para negocios reales. Desarrollamos software práctico, moderno y accesible, enfocado en facilitar la gestión y el crecimiento de pequeños y medianos emprendimientos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
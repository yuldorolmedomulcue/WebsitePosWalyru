function HeroSection() {
  return (
    <section className="relative pt-10 lg:pt-28">
      <div className="relative z-10 container px-4 mx-auto">
        <div className="relative mb-5 text-center md:max-w-4xl mx-auto" data-aos="fade-up">
          <img
            className="absolute top-44 -left-36 "
            src="/images/star.svg"
            alt=""
          />
          <img
            className="absolute top-10 -right-36" 
            src="/images/star2.svg"
            alt=""
          />
          <span className="inline-block mb-2.5 text-green-400 font-medium bg-gray-50 px-3 py-2 rounded-full">
            Software POS, Vende y factura electrónicamente a un clic cumpliendo con la <span className="text-green-600">DIAN</span>

          </span>
          <h1 className="font-heading mb-10 text-7xl lg:text-8xl xl:text-10xl text-black tracking-tighter">
            <span className="text-green-500">Optimiza en </span>tiempo real con IA integrada 
             <i class="ri-robot-2-line pl-4"></i>
          </h1>
          <a
            className="inline-block px-8 py-4 text-white rounded-full transition duration-300
             bg-gradient-to-r from-blue-500 via-blue-500 to-cyan-400 bg-[length:200%_200%] animate-[gradientShift_4s_ease_infinite]
             shadow-lg shadow-blue-400/40 hover:shadow-sky-400/60"
            href="https://pos.walyru.com/auth/registro.php"
          >
            <span className="font-medium" href="https://pos.walyru.com/auth/registro.php?plan=2&tipo_usuario=Usuario&mensualidad=Mensual">Crea cuenta GRATIS AHORA!</span><i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>

        <div className="relative max-w-max mx-auto mb-10" data-aos="zoom-in" data-aos-delay="100">
          <video
            className="rounded-5xl"
            src="/video/home.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      {/* carrusel de empresas que usan el software */}
      
    </section>
  );
}

export default HeroSection;

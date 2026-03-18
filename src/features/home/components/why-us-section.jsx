import featuresData from '@data/features.json';

function WhyUsSection() {
  if (!featuresData) {
    return null;
  }

  const cards = featuresData.whyUsCards;

  return (
    <section className="pt-20 pb-24 bg-blueGray-950/10">
      <div className="container px-4 mx-auto">
        <div className="text-center" data-aos="fade-up">
          <span className="inline-block mb-2.5 text-green-400 font-medium bg-gray-50 px-3 py-2 rounded-full">
            ¿Por qué Walyru?
          </span>
          <h2 className="font-heading mb-6 text-6xl lg:text-7xl text-black tracking-8xl md:max-w-md mx-auto">
            Diseñado para negocios reales
          </h2>
          <p className="mb-20 text-green-400 md:max-w-md mx-auto text-xl">
            Walyru es un sistema POS pensado para pequeños y medianos negocios que necesitan vender rápido y tener control total de sus ingresos, optimizando su tiempo con IA integrada.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 100, 300)}
            >
              <div className="relative mb-8 overflow-hidden rounded-5xl">
                <img
                  className="w-full transform hover:scale-125 transition duration-1000"
                  src={card.image}
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-card p-8">
                  <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
                    {card.category}
                  </span>
                  <p className="group inline-block max-w-sm">
                    <h3 className="mb-4 text-3xl text-white tracking-3xl hover:underline">
                      {card.title}
                    </h3>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;

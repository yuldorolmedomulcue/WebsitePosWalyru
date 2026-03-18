import { useEffect, useRef } from 'react';
import clientsData from '@data/clients.json';

function ClientsCarouselSection() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clonar los elementos para crear el efecto infinito
    const scrollerInner = scroller.querySelector('.scroller-inner');
    const scrollerContent = Array.from(scrollerInner.children);

    // Duplicar los elementos para el scroll infinito
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="py-16 overflow-hidden" data-aos="fade-up">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
            <span className="inline-block mb-2.5 text-green-400 font-medium bg-gray-50 px-3 py-2 rounded-full">
            Con la confianza de las mejores empresas</span>
          {/* <p className="text-2xl md:text-3xl font-heading font-semibold text-gray-900">
            Más de <span className="text-green-500">500+ empresas</span> utilizan nuestro software
          </p> */}
        </div>

        <div ref={scrollerRef} className="scroller relative">
          <div className="scroller-inner flex gap-8 w-max animate-scroll">
            {clientsData.clients.map((client, index) => (
              <div
                key={client.id}
                className="flex items-center justify-center w-[180px] h-[80px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 px-6 py-4"
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 60, 300)}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300 opacity-75 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsCarouselSection;

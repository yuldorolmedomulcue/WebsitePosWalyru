import React, { useEffect } from 'react';

export function MarqueeTestimonialsSection() {
  useEffect(() => {
    const cardsData = [
      {
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
        name: 'Briar Martin',
        handle: '@neilstellar',
        date: 'Marzo 17, 2026',
        testimonial: 'Un pos para negocios muy completo y fácil de usar. Me encanta.'
      },
      {
        image: '/images/avatar4.png',
        name: 'Melody Montiel',
        handle: '@Melodymontiel',
        date: 'Marzo 16, 2026',
        testimonial: 'Excelente servicio y muy profesional. Ademas con IA incluida muy recomendado.'
      },
      {
        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
        name: 'Juan Carlos Paz',
        handle: '@jordantalks',
        date: 'Marzo 15, 2026',
        testimonial: 'La mejor plataforma que he usado. Muy intuitiva.'
      },
      {
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
        name: 'Alex Cordoba',
        handle: '@alexcordoba',
        date: 'Marzo 15, 2026',
        testimonial: 'Servicio al cliente excepcional. Muy satisfecho.'
      },

       {
        image: '/images/avatar10.png',
        name: 'Camila Gomez',
        handle: '@Camilagomez',
        date: 'Marzo 16, 2026',
        testimonial: 'Me encanta la facilidad de uso y las funciones avanzadas. Muy recomendado.'
      },
    ];

    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');

    if (row1 && row2) {
      const createCard = (card) => `
        <div class="testimonial-card p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0" data-aos="fade-up">
          <div class="flex gap-2">
            <img class="size-11 rounded-full" src="${card.image}" alt="User Image">
            <div class="flex flex-col">
              <div class="flex items-center gap-1">
                <p>${card.name}</p>
                <svg class="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                </svg>
              </div>
              <span class="text-xs text-slate-500">${card.handle}</span>
            </div>
          </div>
          <p class="text-sm pt-4 text-gray-800">${card.testimonial || 'Escribe aquí tu testimonio'}</p>
        </div>
      `;

      const renderCards = (target) => {
        const doubled = [...cardsData, ...cardsData];
        doubled.forEach(card => target.insertAdjacentHTML('beforeend', createCard(card)));
      };

      renderCards(row1);
      renderCards(row2);
    }
  }, []);

  return (
    <div className="marquee-section">
      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5" id="row1"></div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-5 pb-10" id="row2"></div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
}

export default MarqueeTestimonialsSection;

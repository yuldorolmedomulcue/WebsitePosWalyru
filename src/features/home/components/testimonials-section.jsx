import React from 'react';
import MarqueeTestimonialsSection from './marquee-testimonials';
import './testimonials-section.css';

function TestimonialsSection() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block mb-2.5 text-green-400 font-medium bg-gray-50 px-3 py-2 rounded-full">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="font-heading text-6xl lg:text-7xl text-black tracking-tighter-xl md:max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Testimonios en <span className="text-green-500">tiempo real</span>
          </h2>
        </div>
        <MarqueeTestimonialsSection />
      </div>
    </section>
  );
}

export default TestimonialsSection;

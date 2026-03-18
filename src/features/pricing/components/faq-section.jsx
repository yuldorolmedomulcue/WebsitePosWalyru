import pricingData from '@data/pricing.json';

function FAQSection() {
  const { faqs } = pricingData;

  return (
    <section className="py-24 bg-blueGray-950/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20" data-aos="fade-up" data-aos-delay="100">
          <h2 className="font-heading text-7xl lg:text-8xl text-black tracking-tighter">
            Preguntas <span className="text-blue-500">frecuentes</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {faqs.map((faq, index) => (
            <div key={index} className="p-8" data-aos="fade-up" data-aos-delay={100 + index * 100}>
              <div className="mb-8">
                <h3 className="mb-4 text-2xl text-black font-medium">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

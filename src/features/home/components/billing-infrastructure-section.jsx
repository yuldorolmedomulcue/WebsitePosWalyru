import React, { useState } from 'react';
import featuresData from '@data/features.json';

function BillingInfrastructureSection() {
  const [activeTab, setActiveTab] = useState('introduction');

  if (!featuresData) {
    return null;
  }

  const tabs = featuresData.billingTabs;

  return (
    <section className="py-24 bg-blueGray-950/5">
      <div className="container px-4 mx-auto">
        <div className="mb-20 text-center" data-aos="fade-up">
          <span className="inline-block mb-2.5 text-green-400 font-medium bg-blue-50 px-3 py-2 rounded-full">
            Más sobre nuestras funcionalidades
          </span>
          <h2 className="font-heading text-6xl lg:text-7xl text-black tracking-tighter-xl md:max-w-3xl mx-auto">
            Un sistema POS que <span className="text-green-500">crece con tu negocio</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center -m-3 mb-2">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className="w-auto p-3"
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 80, 320)}
            >
              <button
                className={`inline-block px-6 py-3 text-sm font-medium tracking-tighter rounded-full transition duration-300 ${
                  activeTab === tab.id
                    ? 'bg-green-400 text-white'
                    : 'text-black hover:text-green-400 border border-gray-800 hover:border-green-400'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>
        <div className="text-center" data-aos="zoom-in" data-aos-delay="150">
          <img
            className="mx-auto rounded-5xl object-contain h-130 transform hover:scale-100 transition duration-500 "
            src={tabs.find((tab) => tab.id === activeTab)?.image}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default BillingInfrastructureSection;

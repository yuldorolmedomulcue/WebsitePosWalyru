import React, { useState, useCallback } from 'react';
import { Input, Select, Button, Card } from '@components/ui';
import contactData from '@data/contact.json';

/**
 * Formulario de contacto con campos dinámicos y selección de ubicación. Utiliza el estado para manejar los datos del formulario y callbacks para gestionar los cambios y el envío del formulario.
 */
function ContactFormSection() {
  const { contact, form } = contactData;
  const [formData, setFormData] = useState({});

  const handleInputChange = useCallback((e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }, [formData]);

  return (
    <section className="pt-20 lg:pt-24 pb-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full lg:w-1/2 p-8">
            <div className="md:max-w-md" data-aos="fade-right" data-aos-delay="100">
              <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
                {contact.subtitle}
              </span>
              <h1 className="font-heading mb-6 text-6xl md:text-7xl text-black tracking-tighter">
                {contact.title}
              </h1>
              <p className="text-gray-600">
                {contact.description}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 " data-aos="fade-left" data-aos-delay="200">
            <Card>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -m-3 mb-6">
                  {form.fields.map((field, index) => (
                    <div key={index} className="w-full sm:w-1/2 p-3">
                      <Input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}
                </div>
                <div className="mb-6">
                  <Select
                    name="location"
                    onChange={handleInputChange}
                    placeholder="Seleccionar Ubicación"
                    options={form.locationOptions}
                  />
                </div>
                <Button type="submit" className="w-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-500/40 font-medium rounded-full transition duration-300">
                  {form.submitText}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
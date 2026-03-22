import { useState } from 'react';

function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+573005999369';
  };

  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=573005999369&text=Hola%2C+estoy+interesad@...&type=phone_number&app_absent=0', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:neologic.sas@gmail.com';
  };

  const handleChat = () => {
    // Aquí podrías sistema chat ia
    window.location.href = '#';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute bottom-23 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Opción 1: Llamada */}
          <button
            onClick={handleCall}
            className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-green-50 transition-colors duration-200 group"
          >
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center  transition-colors">
              <i className="ri-phone-line text-white text-lg"></i>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800 text-sm">Llamar</p>
              <p className="text-gray-600 text-xs">+57-666-WALYRU</p>
            </div>
          </button>

          {/* Divisor */}
          <div className="h-px bg-gray-200 my-2"></div>

          {/* Opción 2: WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-green-50 transition-colors duration-200 group"
          >
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center  transition-colors">
              <i className="ri-whatsapp-line text-white text-lg"></i>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800 text-sm">WhatsApp</p>
              <p className="text-gray-600 text-xs">En linea</p>
            </div>
          </button>

          {/* Divisor */}
          <div className="h-px bg-gray-200 my-2"></div>

          {/* Opción 3: Email */}
          <button
            onClick={handleEmail}
            className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-green-50 transition-colors duration-200 group"
          >
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center  transition-colors">
              <i className="ri-mail-line text-white text-lg"></i>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800 text-sm">Email</p>
              <p className="text-gray-600 text-xs">contacto@walyru.com</p>
            </div>
          </button>

          {/* Divisor */}
          <div className="h-px bg-gray-200 my-2"></div>

          {/* Opción 4: Chat en vivo */}
          <button
            onClick={handleChat}
            className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-green-50 transition-colors duration-200 group"
          >
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center  transition-colors">
              <i className="ri-message-line text-white text-lg"></i>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800 text-sm">Chat IA</p>
              <p className="text-gray-600 text-xs">Proximamente...</p>
            </div>
          </button>
        </div>
      )}

      {/* Botón flotante principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative -left-5 w-22 h-22 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group ${
          isOpen
            ? 'bg-green-500 scale-90'
            : 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-400'
        }`}
      >
        {/* Logo/Icono */}
        {!isOpen ? (
          <>
            <img src="/images/bot.gif" alt="Contactar" className="w-21 h-21 rounded-full" />
            {/* Badge de "Hablemos" */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-bounce">
              4
            </div>
          </>
        ) : (
          <i className="ri-close-line text-white text-2xl"></i>
        )}

        {/* Efecto hover */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
        )}
      </button>

      {/* Label flotante opcional */}
      {!isOpen && (
        <div className="absolute bottom-20 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¿Necesitas ayuda?
        </div>
      )}
    </div>
  );
}

export default FloatingContactButton;

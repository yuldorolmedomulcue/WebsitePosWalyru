import { Link } from 'react-router-dom';
import { getRouteByName } from '@app/router';

/**
 * Principal
 */
function Footer() {
  return (
    <>
      {/* Secciones */}


      <footer className="bg-gray-50 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
        <div className="py-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center -m-8 mb-10">
              <div className="w-full md:w-1/2 lg:w-4/12 p-8">
                <div className="md:max-w-xs">
                  <div className="flex flex-wrap items-center -m-2 mb-4">
                    <img className="mb-7 w-20" src="/images/acceso1.png" alt="" />
                    <h2 className="mb-4 text-3xl text-black font-medium">
                      <span className="text-green-500">Walyru</span> POS</h2>
                  </div>
                  
                  <p className="text-gray-500 font-medium">
                    Walyru POS es un sistema de ventas y facturación electrónica diseñado para ayudar a pequeños y medianos negocios a gestionar sus ventas, caja y clientes de forma sencilla y segura.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-6 text-lg text-black font-medium">Mapa del <span className="text-green-500">Sitio</span></h3>
                <ul>
                  <li className="mb-2.5 pb-3">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300"
                      to={getRouteByName('#')}
                    >
                      Novedades IA
                    </Link>

                    {/* icono de proximamente */}
                    <span className="inline-block ml-2 px-2 py-1 text-xs text-white bg-red-500 rounded-full">
                      Próximamente...
                    </span>
                  </li>

                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300"
                      to={getRouteByName('contact')}
                    >
                      Contacto
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300"
                      to={getRouteByName('about')}
                    >
                      Nuestra Historia
                    </Link>
                  </li>
                  <li className="mb-2.5">
                    <Link
                      className="inline-block text-lg font-medium text-gray-400 hover:text-black transition duration-300"
                      to={getRouteByName('pricing')}
                    >
                      Precios
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-6 text-lg text-black font-medium"> <span className="text-green-500">Walyru </span>POS</h3>

                <ul>
                  <li className="mb-2.5 inline-block text-lg font-medium text-gray-400">
                      Facturación Electrónica 
                  </li>
                  <li className="mb-2.5 inline-block text-lg font-medium text-gray-400">
                      Control de Caja
                  </li>
                  <li className="mb-2.5 inline-block text-lg font-medium text-gray-400 ">
                      Reportes en Tiempo Real
                  </li>
                  <li className="mb-2.5 inline-block text-lg font-medium text-gray-400">
                      Control de Inventario
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:flex-1 p-8">
                <div className="flex flex-wrap -m-2">
                 
                  <div className="w-full p-2">
                    <a className="block py-5 px-8 bg-white rounded-full border border-blue-200 hover:border-blue-400 transition duration-300 hover:shadow-lg" href="https://www.instagram.com/neologic_sas/" target="_blank">
                      <div className="flex flex-wrap items-center -m-2">
                        <div className="w-auto p-2">
                          <i className="ri-facebook-fill text-blue-500"></i>
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-black">Síguenos en Facebook</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full p-2">
                    <a className="block py-5 px-8 bg-white rounded-full border border-red-200 hover:border-red-400 transition duration-300 hover:shadow-lg" href="https://www.instagram.com/neologic_sas/" target="_blank">
                      <div className="flex flex-wrap items-center -m-2">
                        <div className="w-auto p-2">
                          <i className="ri-instagram-fill text-red-500"></i>
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-black">Síguenos en Instagram</p>
                        </div>
                      </div>
                    </a>
                  </div>     
                  <div className="w-full p-2">
                    <a className="block py-5 px-8 bg-white rounded-full border border-green-200 hover:border-green-400 transition duration-300 hover:shadow-lg" href="https://www.tiktok.com/@neologic?_r=1&_t=Zs-940qchCKRpA" target="_blank">
                      <div className="flex flex-wrap items-center -m-2">
                        
                        <div className="w-auto p-2">
                          <i className="ri-tiktok-fill text-yellow-500"></i>
                        </div>
                        <div className="flex-1 p-2">
                          <p className="text-black">Síguenos en TikTok</p>
                        </div>
                      </div>
                    </a>
                  </div>


                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between -m-2">
              <div className="w-auto p-2">
                <p className="inline-block text-sm font-medium text-black/60">© {new Date().getFullYear()} Walyru POS</p>
                <p className="inline-block text-sm font-medium text-black/60"> | Todos los derechos reservados | Sofware Creado de ❤️ 
                <a href="https://neologic.com.co" target="_blank" className="text-blue-500 hover:text-blue-700"> Neologic JY</a></p>
              </div>
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center -m-2 sm:-m-7">
                  <div className="w-auto p-2 sm:p-7">
                    <a className="inline-block text-sm text-black/60 hover:text-black font-medium transition duration-300" href="/pdfs/PdP.pdf" target="_blank">
                      Terminos de Servicio
                    </a>
                  </div>
                  <div className="w-auto p-2 sm:p-7">
                    <a className="inline-block text-sm text-black/60 hover:text-black font-medium transition duration-300" href="/pdfs/PdP.pdf" target="_blank">
                      Politica de Privacidad
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

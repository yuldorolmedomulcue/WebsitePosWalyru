import React, { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getRouteByName, getNavigationRoutes } from '@app/router';

/**
 * Principal para navegación y branding del sitio. Incluye un menú de navegación que se adapta a dispositivos móviles.
 */
const Header = React.memo(function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detectar cuando el usuario baja en la página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen((prev) => !prev);
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  const navigationItems = getNavigationRoutes();

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md' 
        : 'bg-white'
    } overflow-hidden`}>
      <div className="container px-4 mx-auto mt-2">
        <div className="flex items-center justify-between pt-2 -m-2 ">
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center">
              <div className="w-auto">
                <Link
                  className="relative z-10 inline-block"
                  to={getRouteByName('home')}
                >
                  <img className='w-44 h-20' src="/images/logo-pos.png" alt="Logo del software POS" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center">
              <nav className="w-auto hidden lg:block">
                <ul className="flex items-center mr-12">
                  {navigationItems.map((item, index) => (
                    <li
                      key={item.to}
                      className={`${
                        index < navigationItems.length - 1 ? 'mr-12' : ''
                      } text-black font-medium hover:text-opacity-90 tracking-tighter`}
                    >
                      <Link
                        to={item.to}
                        className={`${
                          location.pathname === item.to
                            ? 'text-green-400'
                            : 'text-black'
                        } hover:text-green-400 transition-colors duration-200`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="w-auto hidden lg:block mr-4">
                <div className="inline-block">
                  <a
                    className="inline-block px-4 py-2 text-white bg-green-400 tracking-tighter  border-2 border-green-400 focus:border-green-400/40  focus:ring-4 focus:ring-green-400/40 rounded-full transition duration-300"
                    href="https://pos.walyru.com/auth/registro.php"
                  >
                    Empezar GRATIS!
                  </a>
                </div>
              </div>

              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <a
                    className="inline-block px-4 py-2 border-green-400 text-green-400 tracking-tighter border-2 border-white focus:border-green-400/40 focus:ring-4 focus:ring-green-400/40 rounded-full transition duration-300"
                    href="https://pos.walyru.com/"
                  >
                    Iniciar sesión
                  </a>
                </div>
              </div>

              {/* menu amburguesa para móviles */}
              <div className="w-auto lg:hidden">
                <button
                  className="relative z-10 inline-block"
                  onClick={toggleMobileNav}
                >
                  <svg
                    className="text-green-500"
                    width="51"
                    height="51"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="56"
                      height="56"
                      rx="28"
                      fill="currentColor"
                    ></rect>
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          mobileNavOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}
      >
        <div
          className="fixed inset-0 bg-black opacity-60"
          onClick={toggleMobileNav}
        ></div>
        <nav className="relative z-10 px-9 pt-8 h-full bg-white overflow-y-auto">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <Link className="inline-block" to={getRouteByName('home')}>
                    <img className='w-20 h-20' src="/images/acceso1.png" alt="Logo del software POS" />
                  </Link>
                </div>
                <div className="w-auto p-2">
                  <button
                    className="inline-block text-black"
                    onClick={toggleMobileNav}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-16 w-full">
              <ul>
                {navigationItems.map((item, index) => (
                  <li
                    key={item.to}
                    className={`${
                      index < navigationItems.length - 1 ? 'mb-8' : ''
                    } text-black font-medium hover:text-opacity-90 tracking-tighter`}
                  >
                    <Link
                      to={item.to}
                      onClick={closeMobileNav}
                      className={`${
                        location.pathname === item.to
                          ? 'text-green-400'
                          : 'text-black'
                      } hover:text-green-400 transition-colors duration-200`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full pb-8">
              <Link
                className="inline-block px-8 py-4 text-center text-white bg-green-400 hover:text-white tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400/40 hover:border-green-400 focus:ring-4 focus:ring-green-400/40 rounded-full transition duration-300"
                to={getRouteByName('login')}
                onClick={closeMobileNav}
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
});

export default Header;

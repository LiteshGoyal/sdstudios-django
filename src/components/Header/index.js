'use client'
import { useState } from 'react';

const Header = () => {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0">
              <a
                href="/"
                title="BakerStreet"
                className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary"
              >
                <img
                  className="w-auto h-8"
                  src="/logo/sdstudios.png"
                  alt="BakerStreet"
                />
              </a>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              <a
                href="#"
                title=""
                className="font-sans text-xl font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:scale-110"
              >
                About
              </a>

              <a
                href="#"
                title=""
                className="font-sans text-xl font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:scale-110"
              >
                Services
              </a>

              <a
                href="#"
                title=""
                className="font-sans text-xl font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary hover:scale-110"
              >
                Contacts
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold leading-6 transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-xl text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary hover:scale-110"
              >
                SignUp
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden bg-[#05131c] ps-5 mt-4 mb-4 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <a
              href="#"
              className="block text-white text-lg font-semibold py-2"
            >
              About
            </a>
            <a
              href="#"
              className="block text-white text-lg font-semibold py-2"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-white text-lg font-semibold py-2"
            >
              Contacts
            </a>
            <a
              href="#"
              className="block text-white text-lg font-semibold py-2"
            >
              SignUp
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

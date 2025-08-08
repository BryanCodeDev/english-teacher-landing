import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { useScrolled } from '../hooks/useScrollAnimation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isScrolled = useScrolled();

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'services', label: 'Servicios' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              EnglishPro
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 relative group px-2 py-1 rounded-md ${
                  activeSection === item.id 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative p-3 rounded-lg bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <X 
                className={`absolute w-6 h-6 text-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                }`} 
              />
              <Menu 
                className={`absolute w-6 h-6 text-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Mejorado */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
        } overflow-hidden`}>
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 mx-2 overflow-hidden">
            <nav className="py-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    block w-full text-left px-6 py-4 font-medium text-lg
                    transition-all duration-200 relative group
                    ${activeSection === item.id 
                      ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 border-r-4 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }
                    ${index !== navItems.length - 1 ? 'border-b border-gray-100' : ''}
                  `}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Indicador visual mejorado */}
                  {activeSection === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                  )}
                  
                  {/* Efecto hover */}
                  <div className={`
                    absolute left-0 top-0 bottom-0 w-0 bg-gradient-to-r from-blue-100 to-purple-100 
                    transition-all duration-300 group-hover:w-full -z-0
                  `}></div>
                </button>
              ))}
            </nav>
            
            {/* Call to Action en Mobile Menu */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Comenzar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
          style={{ top: '80px' }}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
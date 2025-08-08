import React from 'react';
import { Globe, Mail, MessageCircle, Instagram, Facebook, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/englishpro",
      label: "Instagram",
      color: "hover:text-pink-600"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/englishpro",
      label: "Facebook",
      color: "hover:text-blue-600"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/englishpro",
      label: "LinkedIn",
      color: "hover:text-blue-700"
    }
  ];

  const quickLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Servicios', href: '#services' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EnglishPro</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Tu mejor opción para aprender inglés de forma efectiva y personalizada. 
              Clases online con un profesor certificado y experimentado.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>michael@englishpro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>+57 300 123 4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Clases Individuales</li>
              <li>Clases Online</li>
              <li>Preparación Exámenes</li>
              <li>Inglés de Negocios</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-4 md:mb-2">Sígueme en redes sociales</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors duration-200 transform hover:scale-110`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center md:text-right">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Comenzar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="flex items-center space-x-1 mb-2 md:mb-0">
              <span>© {currentYear} EnglishPro. Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>en Bogotá, Colombia</span>
            </div>
            <div className="flex space-x-6">
              <button className="hover:text-white transition-colors duration-200">
                Política de Privacidad
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Términos de Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
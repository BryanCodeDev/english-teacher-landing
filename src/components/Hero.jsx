import React from 'react';
import { ChevronDown, Star, Users, Award } from 'lucide-react';
import Button from './UI/Button';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Profesor Certificado de Inglés
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Tu solución en 
              <span className="gradient-text block mt-2">
                Inglés Profesional
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-slide-up" style={{animationDelay: '0.2s'}}>
              Aprende inglés de forma efectiva y personalizada con un profesor experimentado. 
              Clases adaptadas a tu nivel y objetivos.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center justify-center lg:justify-start">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-700">+200 estudiantes</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Award className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-700">5 años experiencia</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Star className="w-5 h-5 text-blue-600 mr-2 fill-current" />
                <span className="text-gray-700">4.9/5 valoración</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Button onClick={scrollToContact} size="lg">
                Comenzar Ahora
              </Button>
              <Button variant="outline" onClick={scrollToServices} size="lg">
                Ver Servicios
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-scale-in" style={{animationDelay: '0.8s'}}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Certificado TEFL</h3>
                    <p className="text-lg opacity-90">Profesor Profesional</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Online</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <button
            onClick={scrollToServices}
            className="inline-flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Descubre más</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
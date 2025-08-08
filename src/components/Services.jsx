import React from 'react';
import { Check, Users, Video, BookOpen, Award, Clock, Globe } from 'lucide-react';
import Card from './UI/Card';
import { useInView } from '../hooks/useScrollAnimation';

const Services = () => {
  const [ref, inView] = useInView(0.1);

  const services = [
    {
      icon: Users,
      title: "Clases Individuales",
      description: "Sesiones personalizadas adaptadas a tu nivel y objetivos específicos. Atención completa del profesor.",
      features: ["Horarios flexibles", "Contenido personalizado", "Progreso acelerado"],
      price: "Desde $25/hora",
      popular: false
    },
    {
      icon: Video,
      title: "Clases Online en Vivo",
      description: "Aprende desde cualquier lugar con clases interactivas por videoconferencia con materiales digitales.",
      features: ["Plataforma interactiva", "Grabaciones disponibles", "Materiales digitales"],
      price: "Desde $20/hora",
      popular: true
    },
    {
      icon: BookOpen,
      title: "Preparación de Exámenes",
      description: "Preparación especializada para TOEFL, IELTS, Cambridge y otros exámenes internacionales.",
      features: ["Simulacros de examen", "Estrategias específicas", "Feedback detallado"],
      price: "Desde $30/hora",
      popular: false
    },
    {
      icon: Award,
      title: "Inglés de Negocios",
      description: "Desarrolla habilidades comunicativas profesionales para el mundo empresarial y corporativo.",
      features: ["Vocabulario empresarial", "Presentaciones", "Negociaciones"],
      price: "Desde $35/hora",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            💼 Servicios que Ofrezco
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 transition-all duration-1000 delay-200 ${
            inView ? 'animate-scale-in' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            Descubre las diferentes modalidades de aprendizaje diseñadas para alcanzar tus objetivos
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`relative group transition-all duration-1000 ${
                  inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                hover={true}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Más Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-center pt-4 border-t border-gray-100">
                  <p className="text-2xl font-bold gradient-text">
                    {service.price}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          inView ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-medium">Horarios Flexibles</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Globe className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-medium">Clases Online</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 font-medium">Certificado TEFL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
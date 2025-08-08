import React, { useState } from 'react';
import { Send, Mail, MapPin, MessageCircle, User, Clock } from 'lucide-react';
import Button from './UI/Button';
import Input, { TextArea } from './UI/Input';
import Card from './UI/Card';
import { useInView } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, inView] = useInView(0.1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Limpiar mensaje después de 3 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+57 300 123 4567",
      link: "https://wa.me/573001234567",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      content: "michael@englishpro.com",
      link: "mailto:michael@englishpro.com",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Bogotá, Colombia",
      link: null,
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Sáb: 8:00 AM - 8:00 PM",
      link: null,
      color: "text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            📞 Contáctame
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 transition-all duration-1000 delay-200 ${
            inView ? 'animate-scale-in' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            ¿Listo para comenzar tu viaje hacia el dominio del inglés? Contáctame y empezemos juntos
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className={`transition-all duration-1000 ${
            inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíame un mensaje</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">¡Mensaje enviado exitosamente! Te responderé pronto.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nombre completo"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre"
                required
                icon={User}
              />

              <Input
                label="Correo electrónico"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                required
                icon={Mail}
              />

              <TextArea
                label="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntame sobre tus objetivos de aprendizaje, nivel actual y cualquier pregunta que tengas..."
                required
                rows={5}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                icon={Send}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Otras formas de contacto</h3>
            
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="group transition-all duration-300 hover:shadow-lg" hover={!!info.link}>
                  {info.link ? (
                    <a href={info.link} className="block">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-gray-600">{info.content}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200" hover={false}>
              <div className="text-center">
                <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">¡Chatea conmigo ahora!</h4>
                <p className="text-gray-600 mb-4">Respuesta rápida por WhatsApp</p>
                <Button
                  as="a"
                  href="https://wa.me/573001234567?text=Hola! Me interesa tomar clases de inglés"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  icon={MessageCircle}
                >
                  Abrir WhatsApp
                </Button>
              </div>
            </Card>

            {/* Response Time Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-blue-800">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Tiempo de respuesta</span>
              </div>
              <p className="text-blue-700 text-sm mt-1">
                Generalmente respondo en menos de 2 horas durante horarios de oficina
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
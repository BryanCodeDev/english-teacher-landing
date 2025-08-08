import React from 'react';
import { Award, Users, Star, BookOpen, Globe, Clock } from 'lucide-react';
import Card from './UI/Card';
import { useInView } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, inView] = useInView(0.1);

  const stats = [
    { icon: Users, number: "200+", label: "Estudiantes" },
    { icon: Clock, number: "5+", label: "Años Experiencia" },
    { icon: Star, number: "4.9", label: "Valoración Promedio" },
    { icon: Award, number: "15+", label: "Certificaciones" }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Certificado TEFL",
      description: "Teaching English as a Foreign Language - 120 horas"
    },
    {
      icon: Globe,
      title: "Cambridge Certified",
      description: "Certificación oficial de Cambridge para enseñanza"
    },
    {
      icon: BookOpen,
      title: "Metodología Personalizada",
      description: "Enfoque adaptado a cada estudiante y sus objetivos"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            👨‍💼 ¿Quién Soy?
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 transition-all duration-1000 delay-200 ${
            inView ? 'animate-scale-in' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className={`relative transition-all duration-1000 ${
            inView ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-16 h-16 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Profesor Michael</h3>
                    <p className="text-lg opacity-80">English Teacher</p>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">TEFL</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Soy Michael Johnson, experto en enseñanza de inglés con más de 5 años de experiencia
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Mi misión es ayudar a estudiantes de habla hispana a dominar el inglés de manera 
                efectiva y natural. He trabajado con más de 200 estudiantes de diferentes niveles 
                y edades, adaptando mi metodología a las necesidades específicas de cada persona.
              </p>
              
              <p>
                Me especializo en crear un ambiente de aprendizaje cómodo y motivador donde los 
                estudiantes se sientan seguros para practicar y cometer errores, que son parte 
                natural del proceso de aprendizaje.
              </p>
              
              <p>
                Con certificaciones TEFL y Cambridge, utilizo metodologías modernas que combinan 
                conversación práctica, gramática aplicada y situaciones reales del día a día.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`transition-all duration-1000 delay-500 ${
          inView ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center group" hover={true}>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
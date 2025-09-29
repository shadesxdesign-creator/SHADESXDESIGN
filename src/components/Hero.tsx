import { ArrowRight, Award, Users, Building } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury marble interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Crafting Spaces with
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Premium Stone
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your vision into reality with our exquisite marble and stone designs. 
          Architecture and interior solutions that define luxury.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#portfolio"
            className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Our Work
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            Get Consultation
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4 backdrop-blur-sm">
              <Building className="text-amber-400" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4 backdrop-blur-sm">
              <Users className="text-amber-400" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/20 rounded-full mb-4 backdrop-blur-sm">
              <Award className="text-amber-400" size={32} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
import { Home, Building2, Palette, Hammer } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Architectural Design',
      description: 'Complete architectural solutions from concept to construction, specializing in luxury residential and commercial projects.',
      features: ['3D Visualization', 'Structural Planning', 'Permit Assistance', 'Project Management']
    },
    {
      icon: Home,
      title: 'Interior Design',
      description: 'Transform your interiors with our premium stone and marble installations, creating spaces that inspire.',
      features: ['Space Planning', 'Material Selection', 'Custom Furniture', 'Lighting Design']
    },
    {
      icon: Palette,
      title: 'Stone & Marble Selection',
      description: 'Curated collection of premium natural stones and marbles from around the world for your perfect project.',
      features: ['Premium Materials', 'Custom Cutting', 'Installation Service', 'Maintenance Guide']
    },
    {
      icon: Hammer,
      title: 'Construction & Installation',
      description: 'Expert installation services ensuring perfect execution of your stone and marble design vision.',
      features: ['Professional Installation', 'Quality Assurance', 'Timeline Management', 'Post-Installation Care']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From architectural planning to premium stone installation, we provide comprehensive solutions 
            for your luxury design needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
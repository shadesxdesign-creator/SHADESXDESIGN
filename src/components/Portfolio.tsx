import { useState } from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'marble', label: 'Marble Works' },
    { id: 'stone', label: 'Stone Designs' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Interior',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium marble flooring and wall cladding'
    },
    {
      id: 2,
      title: 'Modern Office Lobby',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sophisticated stone reception area'
    },
    {
      id: 3,
      title: 'Carrara Marble Kitchen',
      category: 'marble',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom marble countertops and backsplash'
    },
    {
      id: 4,
      title: 'Natural Stone Bathroom',
      category: 'stone',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Travertine walls with marble accents'
    },
    {
      id: 5,
      title: 'Corporate Headquarters',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Grand marble entrance hall'
    },
    {
      id: 6,
      title: 'Penthouse Living Room',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Onyx feature wall with LED backlighting'
    },
    {
      id: 7,
      title: 'Calacatta Gold Installation',
      category: 'marble',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Book-matched marble fireplace surround'
    },
    {
      id: 8,
      title: 'Slate Stone Exterior',
      category: 'stone',
      image: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Natural slate cladding with modern design'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of premium stone and marble installations that showcase 
            the perfect blend of craftsmanship and luxury design.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedImage(project.image)}
                      className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors"
                    >
                      <ZoomIn size={14} />
                      View
                    </button>
                    <button className="flex items-center gap-1 bg-amber-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm hover:bg-amber-600 transition-colors">
                      <ExternalLink size={14} />
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Portfolio item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
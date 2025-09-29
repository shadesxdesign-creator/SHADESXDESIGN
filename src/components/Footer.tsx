import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AS</span>
              </div>
              <span className="text-2xl font-bold">ArchStone</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Creating extraordinary spaces with premium stone and marble. We transform architectural 
              visions into reality through expert craftsmanship and innovative design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <p>123 Design District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400 flex-shrink-0" size={16} />
                <a href="tel:+15551234567" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-400 flex-shrink-0" size={16} />
                <a href="mailto:info@archstone.com" className="text-gray-300 text-sm hover:text-amber-400 transition-colors">
                  info@archstone.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ArchStone. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Menu, X, Home, Briefcase, Image, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Briefcase, label: 'Services', href: '#services' },
    { icon: Image, label: 'Portfolio', href: '#portfolio' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ArchStone</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-amber-600 transition-colors duration-200"
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-1 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </a>
              ))}
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 bg-amber-600 text-white py-2 px-2 rounded-lg hover:bg-amber-700 transition-colors duration-200 mt-2"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
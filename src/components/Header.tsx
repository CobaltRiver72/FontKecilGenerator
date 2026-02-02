import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Type } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Generator', path: '/#generator' },
    { name: 'Cara Pakai', path: '/#cara-pakai' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return location.pathname === '/';
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Type className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Font Kecil</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#generator"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
            >
              Salin Hasil
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#generator"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-teal-600 text-white text-sm font-medium rounded-lg text-center mt-4"
            >
              Salin Hasil
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

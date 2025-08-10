import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glassmorphism rounded-full px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300 hidden md:block ${
          isScrolled ? 'nav-blur' : ''
        }`}
      >
        <div className="flex space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-white hover:text-[#00ff88] transition-colors duration-300 font-medium text-sm lg:text-base"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`fixed top-6 right-6 z-50 glassmorphism rounded-full p-3 md:hidden transition-all duration-300 ${
          isScrolled ? 'nav-blur' : ''
        }`}
      >
        {isMobileMenuOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <Menu className="text-white" size={24} />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-20 left-6 right-6 glassmorphism rounded-2xl p-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block text-white hover:text-[#00ff88] transition-colors duration-300 font-medium text-lg py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = {
    "Lighting & Power": [
      { name: "Indoor & Outdoor Lighting Setup", path: "/services/indoor-outdoor-lighting" },
      { name: "Power Outlet Installations & Repairs", path: "/services/power-outlet-installations" },
      { name: "Switchboard Repairs & Modern Upgrades", path: "/services/switchboard-repairs" },
      { name: "Consumer Mains Replacement & Upgrades", path: "/services/consumer-mains-replacement" }
    ],
    "Home Installations": [
      { name: "Ceiling Fan Fitting & Replacement", path: "/services/ceiling-fan-fitting" },
      { name: "Bathroom & Kitchen Exhaust Fan Fitting", path: "/services/exhaust-fan-fitting" },
      { name: "Smoke Detector Setup & Maintenance", path: "/services/smoke-detector-setup" },
      { name: "Video Doorbell & Intercom System Setup", path: "/services/video-doorbell-setup" },
      { name: "EV Charger Supply & Installation", path: "/services/ev-charger-installation" }
    ],
    "Security & Safety": [
      { name: "Wireless Security Camera Installation", path: "/services/security-camera-installation" },
      { name: "Home Electrical Safety Inspections", path: "/services/electrical-safety-inspections" },
      { name: "Pre-Rental Electrical Compliance Reports", path: "/services/rental-compliance-reports" }
    ],
    "Renovation & Specialty Work": [
      { name: "Full Electrical Fit-Outs for Renovations", path: "/services/renovation-electrical-fitouts" },
      { name: "Wiring & Power Setup for Pools & Spas", path: "/services/pool-spa-wiring" },
      { name: "24/7 Emergency Electrical Troubleshooting", path: "/services/emergency-troubleshooting" },
      { name: "Internet & Data Point Connections", path: "/services/data-point-connections" }
    ]
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/pb8.jpg" 
                alt="PB8 Electricals Logo" 
                className="h-12 w-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                PB8 Electricals
              </h1>
              <p className="text-sm text-gray-600">Melbourne's Trusted Electricians</p>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                location.pathname === '/' ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setIsServicesOpen(false);
                setActiveSubmenu(null);
              }}
            >
              <button className={`font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-1 relative group ${
                location.pathname.startsWith('/services') ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}>
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {/* Main Services Dropdown */}
              <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform ${
                isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
              }`}>
                <div className="p-2">
                  {Object.entries(services).map(([category, items]) => (
                    <div 
                      key={category}
                      className="relative"
                      onMouseEnter={() => setActiveSubmenu(category)}
                    >
                      <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 cursor-pointer group">
                        <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                          {category}
                        </span>
                        <ChevronDown className="h-4 w-4 text-gray-400 -rotate-90 group-hover:text-blue-700 transition-colors duration-200" />
                      </div>
                      
                      {/* Sub-services Dropdown */}
                      <div className={`absolute left-full top-0 ml-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform ${
                        activeSubmenu === category ? 'opacity-100 translate-x-0 visible' : 'opacity-0 -translate-x-2 invisible'
                      }`}>
                        <div className="p-2">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <h4 className="font-bold text-blue-700 text-sm">{category}</h4>
                          </div>
                          {items.map((item, index) => (
                            <Link
                              key={index}
                              to={item.path}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                              onClick={() => {
                                setIsServicesOpen(false);
                                setActiveSubmenu(null);
                              }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                location.pathname === '/about' ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                location.pathname === '/contact' ? 'text-blue-700' : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Emergency Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">24/7 Emergency</p>
              <p className="text-lg font-bold text-blue-700">(+61) 404-398-404</p>
            </div>
            <a 
              href="tel:0312345678" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 px-2 py-1">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 px-2 py-1">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 px-2 py-1">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 px-2 py-1">Contact</Link>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2 px-2">24/7 Emergency</p>
                <a 
                  href="tel:0312345678" 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 w-full transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" />
                  <span>(+61) 404-398-404</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
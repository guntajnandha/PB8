import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.jpg" alt="PB8 Electricals Logo" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold">PB8 Electricals</h3>
                <p className="text-gray-400 text-sm">Melbourne's Trusted Electricians</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional electrical services across Melbourne. Licensed, insured, and committed to excellence .
            </p>
            
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Residential Electrical", path: "/services" },
                { name: "Commercial Electrical", path: "/services" },              
                { name: "LED Lighting Solutions", path: "/services/indoor-outdoor-lighting" },
                { name: "Safety Inspections", path: "/services/electrical-safety-inspections" },
                { name: "Electrical Maintenance", path: "/services" },
                { name: "Home Automation", path: "/services" },
                { name: "EV Charger Installation", path: "/services/ev-charger-installation" }
              ].map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-300 hover:text-yellow-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
              
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <a href="tel:61404398404" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    (+61) 404-398-404 
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="info@pb8electricals.com.au" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    info@pb8electricals.com.au 
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-gray-300">Melbourne </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} PB8 Electricals. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Licensed Electrical Contractor | Master Electricians Australia Member
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
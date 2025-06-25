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
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PB8 Electricals</h3>
                <p className="text-gray-400 text-sm">Melbourne's Trusted Electricians</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional electrical services across Melbourne. Licensed, insured, and committed to excellence .
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Residential Electrical", path: "/services" },
                { name: "Commercial Electrical", path: "/services" },
                { name: "Emergency Services", path: "/services/emergency-troubleshooting" },
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
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Get Quote</Link></li>
              <li><a href="tel:0312345678" className="text-gray-300 hover:text-yellow-400 transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="font-medium">24/7 Emergency</p>
                  <a href="tel:0312345678" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    (03) 1234 5678
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@pb8electricals.com.au" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    info@pb8electricals.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-gray-300">Melbourne Metro</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-1" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-300">Mon-Fri: 7AM-6PM</p>
                  <p className="text-gray-300">Emergency: 24/7</p>
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
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Warranty</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
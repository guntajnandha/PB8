import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const DataPointConnections = () => {
  const services = [
    "Ethernet data point installation",
    "Network cable running",
    "Internet connection setup",
    "Wi-Fi access point installation",
    "Home office network setup",
    "Smart home network infrastructure",
    "Data cabinet installation",
    "Network troubleshooting and repair"
  ];

  const benefits = [
    "Reliable internet connections",
    "Faster data speeds",
    "Professional cable management",
    "Future-ready infrastructure",
    "Enhanced connectivity",
    "Warranty on workmanship"
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-blue-700">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-700">Services</Link>
            <span>/</span>
            <span className="text-gray-900">Internet & Data Point Connections</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wifi className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Internet & Data Point Connections
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional data and internet connection services. From ethernet installations to complete network setups, we ensure reliable connectivity throughout your home or office.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In today's connected world, reliable internet and data connections are essential. Our qualified technicians install and configure data points, network infrastructure, and internet connections to ensure fast, stable connectivity throughout your property.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We work with all types of network installations, from simple ethernet points to complex structured cabling systems, ensuring your home or business has the connectivity infrastructure it needs for today and the future.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Data Connection Services:</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits & Image */}
            <div>
              <div className="mb-8">
                <img 
                  src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Network cable installation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of Professional Data Installation</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <h4 className="font-semibold text-teal-900 mb-2">Future Ready</h4>
                <p className="text-teal-800 text-sm">
                  Professional data cabling provides a solid foundation for current and future technology needs, supporting faster speeds and new devices.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Assessment", desc: "Evaluate connectivity needs and layout" },
                { step: "2", title: "Planning", desc: "Design optimal cable routes and data points" },
                { step: "3", title: "Installation", desc: "Run cables and install data outlets" },
                { step: "4", title: "Testing", desc: "Test all connections and configure network" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Need Better Connectivity?</h2>
            <p className="text-teal-100 mb-6">
              Contact PB8 Electricals for professional data point and internet connection services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:61404398404"
                className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (61) 404-398-404</span>
              </a>
              <Link 
                to="/contact"
                className="bg-teal-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-900 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8">
            <Link 
              to="/services"
              className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-800 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataPointConnections;
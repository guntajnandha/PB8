import React from 'react';
import { Link } from 'react-router-dom';
import { Fan, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const CeilingFanFitting = () => {
  const services = [
    "New ceiling fan installation",
    "Ceiling fan replacement",
    "Fan speed control installation",
    "Remote control ceiling fans",
    "Outdoor ceiling fan installation",
    "Industrial and commercial fans",
    "Fan balancing and repair",
    "Ceiling fan removal"
  ];

  const benefits = [
    "Improved air circulation",
    "Energy-efficient cooling",
    "Enhanced comfort",
    "Professional installation",
    "Warranty on workmanship",
    "Safety compliance"
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
            <span className="text-gray-900">Ceiling Fan Fitting & Replacement</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Fan className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ceiling Fan Fitting & Replacement
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional ceiling fan installation and replacement services. From standard fans to remote-controlled models, we ensure safe and efficient installation for optimal comfort.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our experienced electricians provide complete ceiling fan services, from new installations to replacements and repairs. We work with all types of ceiling fans, ensuring proper mounting, wiring, and safety compliance.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're looking to install a new fan for better air circulation or replace an old, noisy unit, we ensure professional installation with proper ceiling support and electrical connections.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Ceiling Fan Services:</h3>
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
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Modern ceiling fan installation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of Professional Installation</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Safety First</h4>
                <p className="text-blue-800 text-sm">
                  Proper ceiling fan installation requires adequate ceiling support and correct electrical connections. We ensure safe, wobble-free operation.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Assessment", desc: "Check ceiling structure and electrical requirements" },
                { step: "2", title: "Preparation", desc: "Install proper mounting bracket and wiring" },
                { step: "3", title: "Installation", desc: "Mount fan and connect electrical components" },
                { step: "4", title: "Testing", desc: "Test all speeds and functions for proper operation" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Need a Ceiling Fan Installed?</h2>
            <p className="text-blue-100 mb-6">
              Contact PB8 Electricals for professional ceiling fan installation and replacement services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:61404398404"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (61) 404-398-404</span>
              </a>
              <Link 
                to="/contact"
                className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
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

export default CeilingFanFitting;
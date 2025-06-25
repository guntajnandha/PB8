import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const SmokeDetectorSetup = () => {
  const services = [
    "Hardwired smoke detector installation",
    "Battery smoke detector setup",
    "Interconnected smoke alarm systems",
    "Heat detector installation",
    "Carbon monoxide detector fitting",
    "Smoke detector replacement",
    "System testing and maintenance",
    "Compliance inspections"
  ];

  const benefits = [
    "Life-saving early warning",
    "Code compliance assurance",
    "Insurance requirements met",
    "Professional installation",
    "Regular maintenance service",
    "Peace of mind"
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
            <span className="text-gray-900">Smoke Detector Setup & Maintenance</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Smoke Detector Setup & Maintenance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional smoke detector installation and maintenance services. Protect your family and property with properly installed and maintained smoke detection systems.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Smoke detectors are your first line of defense against fire. Our licensed electricians install, maintain, and test smoke detection systems to ensure they provide reliable early warning protection for your home and family.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We work with all types of smoke detectors, from basic battery units to interconnected hardwired systems. All installations comply with Australian standards and local building codes.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Smoke Detector Services:</h3>
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
                  src="https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Smoke detector installation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Professional Installation Matters</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-semibold text-red-900 mb-2">Critical Safety</h4>
                <p className="text-red-800 text-sm">
                  Properly installed and maintained smoke detectors can reduce fire deaths by up to 50%. Don't compromise on safety.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Assessment", desc: "Evaluate your home's smoke detection needs" },
                { step: "2", title: "Planning", desc: "Design optimal detector placement strategy" },
                { step: "3", title: "Installation", desc: "Install detectors with proper wiring and mounting" },
                { step: "4", title: "Testing", desc: "Test all detectors and provide maintenance schedule" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Protect Your Family Today</h2>
            <p className="text-red-100 mb-6">
              Contact PB8 Electricals for professional smoke detector installation and maintenance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0312345678"
                className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (03) 1234 5678</span>
              </a>
              <Link 
                to="/contact"
                className="bg-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors"
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

export default SmokeDetectorSetup;
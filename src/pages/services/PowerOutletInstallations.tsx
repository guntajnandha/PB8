import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const PowerOutletInstallations = () => {
  const services = [
    "New power outlet installation",
    "Additional outlet installation",
    "USB charging outlet installation",
    "Outdoor weatherproof outlet installation",
    "Kitchen and bathroom outlet upgrades",
    "Workshop and garage power points",
    "Safety switch and RCD installation",
    "Faulty outlet repair and replacement"
  ];

  const benefits = [
    "Increased electrical capacity",
    "Enhanced safety features",
    "Convenient device charging",
    "Code-compliant installations",
    "Professional workmanship",
    "Warranty on all work"
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
            <span className="text-gray-900">Power Outlet Installations & Repairs</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Power Outlet Installations & Repairs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional power outlet installation and repair services. From additional outlets to USB charging points, we ensure safe and convenient power access throughout your home.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our qualified electricians provide comprehensive power outlet services for residential and commercial properties. We install new outlets, repair faulty ones, and upgrade existing installations to meet current safety standards and your power needs.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you need more outlets for your home office, kitchen appliances, or outdoor entertaining area, we ensure all installations comply with Australian electrical standards and include appropriate safety features like RCD protection.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Power Outlet Services:</h3>
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
                  src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional power outlet installation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our Outlet Services?</h3>
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
                  All our outlet installations include RCD protection and comply with AS/NZS 3000 wiring standards for maximum safety.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Assessment", desc: "Evaluate your power needs and existing wiring" },
                { step: "2", title: "Planning", desc: "Design optimal outlet placement and wiring routes" },
                { step: "3", title: "Installation", desc: "Professional installation with minimal disruption" },
                { step: "4", title: "Testing", desc: "Complete safety testing and certification" }
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Need More Power Outlets?</h2>
            <p className="text-blue-100 mb-6">
              Contact PB8 Electricals for professional power outlet installation and repair services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0312345678"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (03) 1234 5678</span>
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

export default PowerOutletInstallations;
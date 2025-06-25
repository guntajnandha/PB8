import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const PoolSpaWiring = () => {
  const services = [
    "Pool pump electrical connections",
    "Spa and hot tub wiring",
    "Pool lighting installation",
    "Safety switch installation",
    "Underwater lighting systems",
    "Pool equipment electrical setup",
    "RCD protection for pool areas",
    "Pool electrical safety inspections"
  ];

  const benefits = [
    "Safe pool electrical systems",
    "Code compliance assurance",
    "Professional installation",
    "Waterproof connections",
    "Enhanced pool enjoyment",
    "Safety certification"
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
            <span className="text-gray-900">Wiring & Power Setup for Pools & Spas</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Waves className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Wiring & Power Setup for Pools & Spas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional electrical services for pools and spas. Safe, compliant wiring and power solutions for all your pool and spa electrical needs.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pool and spa electrical work requires specialized knowledge and strict adherence to safety standards. Our licensed electricians have extensive experience with pool electrical systems, ensuring safe and compliant installations for all your aquatic electrical needs.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We handle everything from pool pump connections to underwater lighting systems, always prioritizing safety with proper RCD protection and waterproof installations that meet Australian pool electrical standards.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Pool & Spa Electrical Services:</h3>
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
                  src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Pool electrical installation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Professional Pool Wiring Matters</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6">
                <h4 className="font-semibold text-cyan-900 mb-2">Critical Safety</h4>
                <p className="text-cyan-800 text-sm">
                  Water and electricity can be deadly. Professional pool electrical work with proper safety measures is essential for protecting swimmers.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Assessment", desc: "Evaluate pool area and electrical requirements" },
                { step: "2", title: "Planning", desc: "Design safe electrical layout and protection" },
                { step: "3", title: "Installation", desc: "Install wiring with waterproof connections" },
                { step: "4", title: "Testing", desc: "Complete safety testing and certification" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Need Pool or Spa Electrical Work?</h2>
            <p className="text-cyan-100 mb-6">
              Contact PB8 Electricals for safe, professional pool and spa electrical services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:61404398404"
                className="bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (61) 404-398-404</span>
              </a>
              <Link 
                to="/contact"
                className="bg-cyan-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-900 transition-colors"
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

export default PoolSpaWiring;
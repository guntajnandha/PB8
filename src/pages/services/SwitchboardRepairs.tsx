import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const SwitchboardRepairs = () => {
  const services = [
    "Switchboard safety inspections",
    "Circuit breaker replacement",
    "RCD and safety switch installation",
    "Meter box upgrades",
    "Fuse box to circuit breaker conversion",
    "Additional circuit installation",
    "Switchboard labeling and documentation",
   
  ];

  const benefits = [
    "Enhanced electrical safety",
    "Improved power distribution",
    "Code compliance assurance",
    "Reduced fire risk",
    "Better circuit protection",
    "Professional certification"
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
            <span className="text-gray-900">Switchboard Repairs & Modern Upgrades</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Switchboard Repairs & Modern Upgrades
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional switchboard repair and upgrade services. We modernize old fuse boxes, install safety switches, and ensure your electrical distribution meets current safety standards.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your switchboard is the heart of your home's electrical system. Our licensed electricians specialize in upgrading old switchboards, installing modern safety devices, and ensuring your electrical distribution system meets current Australian standards.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We work with all types of switchboards, from old ceramic fuse systems to modern circuit breaker panels. Our upgrades include RCD protection, proper circuit labeling, and compliance with AS/NZS 3000 standards.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Switchboard Services:</h3>
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
                  src="/switchboard.jpg" 
                  alt="Modern electrical switchboard"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Upgrade Your Switchboard?</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-semibold text-red-900 mb-2">Safety Warning</h4>
                <p className="text-red-800 text-sm">
                  Old switchboards without RCD protection pose serious safety risks. Upgrade today to protect your family and property.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Upgrade Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Inspection", desc: "Comprehensive assessment of existing switchboard" },
                { step: "2", title: "Design", desc: "Plan modern switchboard layout and safety features" },
                { step: "3", title: "Installation", desc: "Professional upgrade with minimal downtime" },
                { step: "4", title: "Certification", desc: "Complete testing and compliance certification" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Need a Switchboard Upgrade?</h2>
            <p className="text-purple-100 mb-6">
              Contact PB8 Electricals for professional switchboard repair and upgrade services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:61404398404"
                className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (61) 404-398-404</span>
              </a>
              <Link 
                to="/contact"
                className="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-colors"
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

export default SwitchboardRepairs;
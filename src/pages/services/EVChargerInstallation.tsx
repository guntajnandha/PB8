import React from 'react';
import { Link } from 'react-router-dom';
import { Car, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const EVChargerInstallation = () => {
  const services = [
    "Home EV charger installation",
    "Commercial charging stations",
    "Level 2 charger setup",
    "Smart charger configuration",
    "Electrical panel upgrades",
    "Dedicated circuit installation",
    "Weatherproof outdoor installation",
    "Charger maintenance and repair"
  ];

  const benefits = [
    "Convenient home charging",
    "Faster charging speeds",
    "Increased property value",
    "Cost-effective charging",
    "Smart scheduling features",
    "Professional installation"
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
            <span className="text-gray-900">EV Charger Supply & Installation</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Car className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              EV Charger Supply & Installation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional electric vehicle charger installation services. From home charging stations to commercial installations, we provide complete EV charging solutions.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As electric vehicles become more popular, having a reliable home charging solution is essential. Our qualified electricians install EV chargers for all major vehicle brands, ensuring safe, efficient, and convenient charging at your home or business.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We handle everything from electrical panel assessments to dedicated circuit installation and charger mounting. All installations comply with Australian electrical standards and include necessary safety features.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our EV Charger Services:</h3>
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
                  src="https://images.pexels.com/photos/7869258/pexels-photo-7869258.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="EV charger installation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of Home EV Charging</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-2">Future Ready</h4>
                <p className="text-green-800 text-sm">
                  Installing an EV charger now prepares your home for the electric vehicle revolution and can increase your property value.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Assessment", desc: "Evaluate electrical capacity and requirements" },
                { step: "2", title: "Planning", desc: "Design optimal charger placement and wiring" },
                { step: "3", title: "Permits", desc: "Obtain necessary electrical permits" },
                { step: "4", title: "Installation", desc: "Install charger and dedicated circuit" },
                { step: "5", title: "Testing", desc: "Test system and provide user training" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready for Electric Vehicle Charging?</h2>
            <p className="text-green-100 mb-6">
              Contact PB8 Electricals for professional EV charger installation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0312345678"
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (61) 404-398-404</span>
              </a>
              <Link 
                to="/contact"
                className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
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

export default EVChargerInstallation;
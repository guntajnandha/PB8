import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const ElectricalSafetyInspections = () => {
  const services = [
    "Comprehensive electrical safety audits",
    "RCD testing and verification",
    "Switchboard safety inspections",
    "Wiring condition assessments",
    "Appliance safety testing",
    "Earthing system checks",
    "Safety compliance reports",
    "Electrical hazard identification"
  ];

  const benefits = [
    "Identify potential hazards",
    "Ensure code compliance",
    "Prevent electrical fires",
    "Insurance requirements",
    "Peace of mind",
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
            <span className="text-gray-900">Home Electrical Safety Inspections</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Home Electrical Safety Inspections
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical safety inspections for your home. Our qualified electricians identify potential hazards and ensure your electrical system meets current safety standards.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Regular electrical safety inspections are crucial for protecting your family and property. Our licensed electricians conduct thorough assessments of your electrical system, identifying potential hazards and ensuring compliance with current Australian standards.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide detailed reports with recommendations for any necessary repairs or upgrades, helping you maintain a safe electrical environment in your home.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Safety Inspection Services:</h3>
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
                  src="https://images.pexels.com/photos/8924675/pexels-photo-8924675.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Electrical safety inspection"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Safety Inspections Matter</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h4 className="font-semibold text-orange-900 mb-2">Important Statistics</h4>
                <p className="text-orange-800 text-sm">
                  Electrical faults cause thousands of house fires annually in Australia. Regular inspections can prevent most electrical hazards.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Inspection Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Visual Inspection", desc: "Examine all visible electrical components" },
                { step: "2", title: "Testing", desc: "Test RCDs, circuits, and safety devices" },
                { step: "3", title: "Documentation", desc: "Record findings and take photographs" },
                { step: "4", title: "Report", desc: "Provide detailed safety report with recommendations" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ensure Your Home's Electrical Safety</h2>
            <p className="text-orange-100 mb-6">
              Contact PB8 Electricals for comprehensive electrical safety inspections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:61404398404"
                className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (61) 404-398-404</span>
              </a>
              <Link 
                to="/contact"
                className="bg-orange-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-900 transition-colors"
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

export default ElectricalSafetyInspections;
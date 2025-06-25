import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const SecurityCameraInstallation = () => {
  const services = [
    "Wireless security camera installation",
    "Wired CCTV system setup",
    "IP camera network configuration",
    "Night vision camera installation",
    "Motion detection setup",
    "Remote monitoring configuration",
    "DVR/NVR system installation",
    "Camera maintenance and repair"
  ];

  const benefits = [
    "24/7 property monitoring",
    "Crime deterrent effect",
    "Remote viewing capability",
    "Evidence recording",
    "Insurance benefits",
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
            <span className="text-gray-900">Wireless Security Camera Installation</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Camera className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Wireless Security Camera Installation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional security camera installation services. Protect your property with modern wireless and wired security camera systems with remote monitoring capabilities.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modern security camera systems provide comprehensive protection for your home or business. Our experienced technicians install and configure both wireless and wired camera systems, ensuring optimal coverage and reliable operation.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We work with all major security camera brands and can design systems ranging from simple single-camera setups to complex multi-camera networks with remote monitoring and mobile app integration.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Security Camera Services:</h3>
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
                  src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Security camera installation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of Security Cameras</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Smart Features</h4>
                <p className="text-blue-800 text-sm">
                  Modern security cameras offer features like motion alerts, two-way audio, and smartphone notifications for complete peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Site Survey", desc: "Assess property and identify optimal camera locations" },
                { step: "2", title: "System Design", desc: "Plan camera placement and network configuration" },
                { step: "3", title: "Installation", desc: "Mount cameras and complete wiring/network setup" },
                { step: "4", title: "Configuration", desc: "Set up recording, alerts, and remote access" }
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Secure Your Property Today</h2>
            <p className="text-blue-100 mb-6">
              Contact PB8 Electricals for professional security camera installation services.
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

export default SecurityCameraInstallation;
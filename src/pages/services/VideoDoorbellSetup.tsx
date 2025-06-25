import React from 'react';
import { Link } from 'react-router-dom';
import { Video, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const VideoDoorbellSetup = () => {
  const services = [
    "Video doorbell installation",
    "Intercom system setup",
    "Smart doorbell configuration",
    "Wired and wireless options",
    "Mobile app integration",
    "Existing doorbell replacement",
    "Power supply installation",
    "System troubleshooting"
  ];

  const benefits = [
    "Enhanced home security",
    "Remote visitor monitoring",
    "Package delivery alerts",
    "Two-way communication",
    "Mobile notifications",
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
            <span className="text-gray-900">Video Doorbell & Intercom System Setup</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Video className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Video Doorbell & Intercom System Setup
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional video doorbell and intercom system installation. Enhance your home security with smart doorbell technology and two-way communication systems.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Modern video doorbells and intercom systems provide enhanced security and convenience for your home. Our experienced electricians install and configure these systems to work seamlessly with your existing electrical setup and smart home devices.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We work with all major brands and can install both wired and wireless systems. Our installations include proper power supply setup, network configuration, and mobile app integration for remote monitoring.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Video Doorbell Services:</h3>
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
                  src="https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Smart video doorbell installation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of Video Doorbells</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h4 className="font-semibold text-purple-900 mb-2">Smart Integration</h4>
                <p className="text-purple-800 text-sm">
                  Modern video doorbells integrate with smart home systems, allowing you to see and speak with visitors from anywhere in the world.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Consultation", desc: "Assess your security needs and system options" },
                { step: "2", title: "Preparation", desc: "Plan wiring and power supply requirements" },
                { step: "3", title: "Installation", desc: "Mount device and complete electrical connections" },
                { step: "4", title: "Configuration", desc: "Set up app integration and test all features" }
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
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Upgrade Your Home Security</h2>
            <p className="text-purple-100 mb-6">
              Contact PB8 Electricals for professional video doorbell and intercom system installation.
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

export default VideoDoorbellSetup;
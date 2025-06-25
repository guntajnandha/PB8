import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const ConsumerMainsReplacement = () => {
  const services = [
    "Consumer mains cable replacement",
    "Service head upgrades",
    "Meter box relocation",
    "Underground cable installation",
    "Overhead service upgrades",
    "Electrical service capacity increases",
    "Compliance certification",
    "Emergency mains repairs"
  ];

  const benefits = [
    "Increased electrical capacity",
    "Improved safety and reliability",
    "Code compliance assurance",
    "Enhanced property value",
    "Reduced power outages",
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
            <span className="text-gray-900">Consumer Mains Replacement & Upgrades</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Consumer Mains Replacement & Upgrades
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional consumer mains replacement and upgrade services. We handle everything from cable replacement to service capacity increases, ensuring reliable power supply to your property.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Consumer mains are the cables that bring electricity from the street to your property. Our qualified electricians handle all aspects of consumer mains work, from replacement of aging cables to complete service upgrades for increased capacity.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We coordinate with your electricity distributor to ensure seamless installation and connection. All work is performed to Australian standards and includes necessary permits and certifications.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Consumer Mains Services:</h3>
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
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Electrical service installation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Upgrade Your Consumer Mains?</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h4 className="font-semibold text-orange-900 mb-2">Important Note</h4>
                <p className="text-orange-800 text-sm">
                  Consumer mains work requires coordination with your electricity distributor and special permits. We handle all paperwork and approvals.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Upgrade Process</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Assessment", desc: "Evaluate current service and requirements" },
                { step: "2", title: "Permits", desc: "Obtain necessary approvals and permits" },
                { step: "3", title: "Coordination", desc: "Schedule with electricity distributor" },
                { step: "4", title: "Installation", desc: "Professional cable and service installation" },
                { step: "5", title: "Connection", desc: "Final connection and testing" }
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
            <h2 className="text-2xl font-bold mb-4">Need Consumer Mains Work?</h2>
            <p className="text-orange-100 mb-6">
              Contact PB8 Electricals for professional consumer mains replacement and upgrade services.
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

export default ConsumerMainsReplacement;
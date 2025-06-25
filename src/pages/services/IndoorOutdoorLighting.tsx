import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const IndoorOutdoorLighting = () => {
  const services = [
    "LED downlight installation and replacement",
    "Pendant and chandelier installation",
    "Under-cabinet and strip lighting",
    "Outdoor security and garden lighting",
    "Motion sensor lighting systems",
    "Dimmer switch installation",
    "Smart lighting control systems",
    "Emergency and exit lighting"
  ];

  const benefits = [
    "Energy-efficient LED technology",
    "Enhanced home security",
    "Improved property value",
    "Customizable lighting scenes",
    "Long-lasting solutions",
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
            <span className="text-gray-900">Indoor & Outdoor Lighting Setup</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Indoor & Outdoor Lighting Setup
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your home with professional lighting solutions. From energy-efficient LED installations to smart lighting systems, we create the perfect ambiance for every space.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our lighting specialists design and install comprehensive lighting solutions for both indoor and outdoor spaces. We work with the latest LED technology and smart lighting systems to create energy-efficient, beautiful, and functional lighting for your home.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're looking to upgrade your existing lighting, install new fixtures, or create a complete lighting design for your renovation, our experienced electricians ensure every installation meets Australian electrical standards and your specific needs.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Lighting Services Include:</h3>
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
                  alt="Modern LED lighting installation"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our Lighting Services?</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-semibold text-yellow-900 mb-2">Energy Savings</h4>
                <p className="text-yellow-800 text-sm">
                  LED lighting can reduce your electricity bills by up to 80% compared to traditional incandescent bulbs, while lasting 25 times longer.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Consultation", desc: "We assess your lighting needs and space" },
                { step: "2", title: "Design", desc: "Create a custom lighting plan for your home" },
                { step: "3", title: "Installation", desc: "Professional installation by licensed electricians" },
                { step: "4", title: "Testing", desc: "Complete testing and demonstration of all systems" }
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
            <h2 className="text-2xl font-bold mb-4">Ready to Upgrade Your Lighting?</h2>
            <p className="text-blue-100 mb-6">
              Contact PB8 Electricals today for a free consultation and quote on your lighting project.
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

export default IndoorOutdoorLighting;
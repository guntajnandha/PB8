import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const ExhaustFanFitting = () => {
  const services = [
    "Bathroom exhaust fan installation",
    "Kitchen range hood installation",
    "Laundry exhaust fan fitting",
    "Commercial exhaust systems",
    "Ducting and ventilation work",
    "Timer and humidity sensor installation",
    "Exhaust fan replacement",
    "Ventilation system repairs"
  ];

  const benefits = [
    "Improved air quality",
    "Moisture control",
    "Odor elimination",
    "Mold prevention",
    "Energy-efficient operation",
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
            <span className="text-gray-900">Bathroom & Kitchen Exhaust Fan Fitting</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Wind className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bathroom & Kitchen Exhaust Fan Fitting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional exhaust fan installation for bathrooms and kitchens. Improve air quality, control moisture, and eliminate odors with properly installed ventilation systems.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Proper ventilation is essential for maintaining healthy indoor air quality. Our qualified electricians install exhaust fans in bathrooms, kitchens, and other areas where moisture and odors need to be controlled.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We handle everything from basic exhaust fan installation to complex ducting systems, ensuring optimal airflow and compliance with building codes. All installations include proper electrical connections and ventilation ducting.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Exhaust Fan Services:</h3>
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
                  src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Modern bathroom exhaust fan"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of Proper Ventilation</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-2">Health Benefits</h4>
                <p className="text-green-800 text-sm">
                  Proper exhaust ventilation prevents mold growth, reduces humidity, and improves indoor air quality for a healthier home environment.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Planning", desc: "Assess ventilation needs and optimal placement" },
                { step: "2", title: "Preparation", desc: "Cut ceiling opening and plan ducting route" },
                { step: "3", title: "Installation", desc: "Install fan, ducting, and electrical connections" },
                { step: "4", title: "Testing", desc: "Test airflow and ensure proper operation" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Need Exhaust Fan Installation?</h2>
            <p className="text-green-100 mb-6">
              Contact PB8 Electricals for professional exhaust fan installation and ventilation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0312345678"
                className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (03) 1234 5678</span>
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

export default ExhaustFanFitting;
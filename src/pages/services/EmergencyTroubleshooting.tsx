import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const EmergencyTroubleshooting = () => {
  const services = [
    "24/7 emergency electrical repairs",
    "Power outage troubleshooting",
    "Circuit breaker trip diagnosis",
    "Electrical fault finding",
    "Emergency lighting repairs",
    "Safety hazard resolution",
    "Urgent electrical replacements",
    "Emergency safety inspections"
  ];

  const benefits = [
    "24/7 availability",
    "Rapid response times",
    "Expert troubleshooting",
    "Safety priority",
    "Professional equipment",
    "Emergency certification"
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
            <span className="text-gray-900">24/7 Emergency Electrical Troubleshooting</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              24/7 Emergency Electrical Troubleshooting
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Round-the-clock emergency electrical services. When electrical problems can't wait, our experienced electricians are available 24/7 to resolve urgent electrical issues safely and efficiently.
            </p>
          </div>

          {/* Emergency Banner */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold text-red-900 mb-4">Electrical Emergency? Call Now!</h2>
            <a 
              href="tel:0312345678"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold text-xl transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105 hover:shadow-xl"
            >
              <Phone className="h-6 w-6" />
              <span>(03) 1234 5678</span>
            </a>
            <p className="text-red-700 mt-4">Available 24 hours a day, 7 days a week</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Electrical emergencies can happen at any time and often pose serious safety risks. Our emergency electricians are available 24/7 to respond quickly to urgent electrical problems, ensuring your safety and restoring power when you need it most.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We carry fully equipped service vehicles and have the expertise to diagnose and resolve most electrical emergencies on the spot, minimizing downtime and ensuring your electrical system is safe and functional.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Emergency Services:</h3>
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
                  alt="Emergency electrical repair"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our Emergency Service</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="font-semibold text-red-900 mb-2">When to Call Emergency</h4>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Complete power loss</li>
                  <li>• Burning smells from electrical</li>
                  <li>• Sparking outlets or switches</li>
                  <li>• Electrical shocks</li>
                  <li>• Hot electrical panels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Emergency Response Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Call", desc: "Contact us immediately for emergency service" },
                { step: "2", title: "Dispatch", desc: "Emergency electrician dispatched to your location" },
                { step: "3", title: "Diagnose", desc: "Quick assessment and problem identification" },
                { step: "4", title: "Resolve", desc: "Safe repair and restoration of electrical service" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Don't Wait - Call Now!</h2>
            <p className="text-red-100 mb-6">
              Electrical emergencies require immediate attention. Our emergency electricians are standing by 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0312345678"
                className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-6 w-6" />
                <span>EMERGENCY: (03) 1234 5678</span>
              </a>
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

export default EmergencyTroubleshooting;
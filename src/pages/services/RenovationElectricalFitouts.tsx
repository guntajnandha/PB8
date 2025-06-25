import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const RenovationElectricalFitouts = () => {
  const services = [
    "Complete electrical rewiring",
    "New circuit installations",
    "Lighting design and installation",
    "Power outlet planning and fitting",
    "Kitchen electrical upgrades",
    "Bathroom electrical work",
    "Smart home integration",
    "Electrical permit coordination"
  ];

  const benefits = [
    "Modern electrical systems",
    "Increased property value",
    "Enhanced functionality",
    "Code compliance assurance",
    "Energy efficiency",
    "Professional project management"
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
            <span className="text-gray-900">Full Electrical Fit-Outs for Renovations</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Home className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Full Electrical Fit-Outs for Renovations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete electrical solutions for home renovations. From planning to installation, we provide comprehensive electrical services for your renovation project.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Renovating your home is the perfect opportunity to upgrade your electrical system. Our experienced electricians work closely with builders and homeowners to design and install modern electrical systems that meet your lifestyle needs and comply with current standards.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We handle everything from initial electrical planning to final testing and certification, ensuring your renovation includes a safe, efficient, and future-ready electrical system.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Renovation Electrical Services:</h3>
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
                  alt="Renovation electrical work"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of Electrical Renovation</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Perfect Timing</h4>
                <p className="text-blue-800 text-sm">
                  Renovation is the ideal time to upgrade your electrical system while walls are open, making installation easier and more cost-effective.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Renovation Process</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Planning", desc: "Design electrical layout with your renovation team" },
                { step: "2", title: "Permits", desc: "Obtain necessary electrical permits and approvals" },
                { step: "3", title: "Rough-in", desc: "Install wiring and electrical infrastructure" },
                { step: "4", title: "Fit-off", desc: "Install outlets, switches, and fixtures" },
                { step: "5", title: "Testing", desc: "Complete testing and certification" }
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Planning a Renovation?</h2>
            <p className="text-blue-100 mb-6">
              Contact PB8 Electricals for comprehensive electrical fit-out services for your renovation project.
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

export default RenovationElectricalFitouts;
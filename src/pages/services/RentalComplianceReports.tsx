import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, ArrowLeft, Phone } from 'lucide-react';

const RentalComplianceReports = () => {
  const services = [
    "Pre-rental electrical inspections",
    "Compliance certificate issuance",
    "RCD testing and verification",
    "Smoke detector compliance checks",
    "Electrical safety documentation",
    "Landlord compliance reports",
    "Tenant safety assessments",
    "Regulatory requirement verification"
  ];

  const benefits = [
    "Legal compliance assurance",
    "Tenant safety protection",
    "Insurance requirements met",
    "Professional certification",
    "Fast turnaround times",
    "Detailed documentation"
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
            <span className="text-gray-900">Pre-Rental Electrical Compliance Reports</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Pre-Rental Electrical Compliance Reports
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional electrical compliance reports for rental properties. Ensure your property meets all electrical safety requirements for tenant protection and legal compliance.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Landlords have legal obligations to ensure rental properties meet electrical safety standards. Our licensed electricians conduct comprehensive inspections and provide official compliance reports required for rental properties.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We ensure your property complies with all relevant Australian standards and local regulations, providing the documentation you need for legal rental compliance and tenant safety.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Compliance Services:</h3>
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
                  src="https://images.pexels.com/photos/4254167/pexels-photo-4254167.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Electrical compliance inspection"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Compliance Reports Matter</h3>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <h4 className="font-semibold text-indigo-900 mb-2">Legal Requirement</h4>
                <p className="text-indigo-800 text-sm">
                  Electrical compliance reports are mandatory for rental properties in many Australian states. Ensure you meet all legal obligations.
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Compliance Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Inspection", desc: "Comprehensive electrical safety assessment" },
                { step: "2", title: "Testing", desc: "Test all safety devices and systems" },
                { step: "3", title: "Documentation", desc: "Record all findings and test results" },
                { step: "4", title: "Certification", desc: "Issue official compliance certificate" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Need Rental Compliance Reports?</h2>
            <p className="text-indigo-100 mb-6">
              Contact PB8 Electricals for professional electrical compliance reports for rental properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0312345678"
                className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (03) 1234 5678</span>
              </a>
              <Link 
                to="/contact"
                className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-900 transition-colors"
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

export default RentalComplianceReports;
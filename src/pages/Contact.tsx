import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "(+61) 404-398-404",
      subInfo: "24/7 Emergency Service",
      action: "tel:61404-398-404",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "pb8electricals@gmail.com",
      subInfo: "We'll respond within 2 hours",
      action: "mailto:pb8electricals@gmail.com",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Service Area",
      info: "Melbourne Metro",
      subInfo: "All suburbs within 50km of CBD",
      action: null,
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 7AM-6PM",
      subInfo: "Emergency: 24/7",
      action: null,
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-4 animate-bounce-gentle">
              📞 Get In Touch
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact PB8 Electricals
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get started? Contact us today for professional electrical services across Melbourne. We're here to help with all your electrical needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up animation-delay-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div 
                      key={index} 
                      className={`group flex items-start space-x-4 animate-slide-in-right`}
                      style={{ animationDelay: `${300 + (index * 100)}ms` }}
                    >
                      <div className={`bg-gradient-to-r ${contact.color} p-3 rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{contact.title}</h3>
                        {contact.action ? (
                          <a 
                            href={contact.action}
                            className="text-blue-700 hover:text-blue-800 font-medium transition-colors duration-300 flex items-center space-x-1 group/link"
                          >
                            <span>{contact.info}</span>
                            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">{contact.info}</p>
                        )}
                        <p className="text-gray-600 text-sm">{contact.subInfo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Call-out */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-2xl p-6 animate-fade-in-up animation-delay-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-pattern opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Electrical Emergency?</h3>
                  <p className="text-red-700 mb-4">
                    Don't wait for dangerous electrical issues. Our emergency electricians are available 24/7 across Melbourne.
                  </p>
                  <a 
                    href="tel:0312345678" 
                    className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg"
                  >
                    <Phone className="h-5 w-5 group-hover:animate-pulse" />
                    <span>Call Now: (61) 404-398-404</span>
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 animate-fade-in-up animation-delay-800">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Service Areas</h3>
                <p className="text-blue-700 mb-3">
                  We proudly serve all Melbourne metropolitan areas including:
                </p>
                <div className="text-sm text-blue-800 grid grid-cols-2 gap-2">
                  {[
                    "Melbourne CBD", "Richmond", "South Yarra", "Carlton", "Fitzroy", 
                    "St Kilda", "Brighton", "Caulfield", "Glen Waverley", "And many more..."
                  ].map((area, index) => (
                    <div 
                      key={index} 
                      className={`animate-fade-in-up`}
                      style={{ animationDelay: `${900 + (index * 50)}ms` }}
                    >
                      • {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Methods</h2>
              
              <div className="space-y-6">
                {/* Phone Contact */}
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Call Us Directly</h3>
                      <p className="text-gray-600">Speak with our team immediately</p>
                    </div>
                  </div>
                  <a 
                    href="tel:0312345678"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                  >
                    <Phone className="h-5 w-5" />
                    <span>(61) 404-398-404</span>
                  </a>
                </div>

                {/* Email Contact */}
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600">Send us your enquiry details</p>
                    </div>
                  </div>
                  <a 
                    href="pb8electricals@gmail.com"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                  >
                    <Mail className="h-5 w-5" />
                    <span>pb8electricals@gmail.com</span>
                  </a>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Why Choose PB8 Electricals?</h3>
                  <ul className="space-y-2 text-yellow-800">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span>15 years of experience</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span>Fully licensed & insured</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span>24/7 emergency service</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span>Quality workmanship guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
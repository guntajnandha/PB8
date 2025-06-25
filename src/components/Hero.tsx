import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Clock, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm animate-bounce-gentle">
                ⚡ Licensed & Insured Electricians
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-blue-700 block animate-slide-in-right">Electrical</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 animate-slide-in-left">Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-300">
                Your trusted electrical contractors serving Melbourne and surrounding areas. We provide reliable, professional electrical services for residential and commercial properties.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-up animation-delay-500">
              {[
                { icon: CheckCircle, text: "Fully Licensed & Insured", delay: "animation-delay-600" },
                { icon: Clock, text: "24/7 Emergency Service", delay: "animation-delay-700" },
                { icon: CheckCircle, text: "Quality Workmanship Guarantee", delay: "animation-delay-800" },
                { icon: CheckCircle, text: "Upfront Fixed Pricing", delay: "animation-delay-900" }
              ].map((feature, index) => (
                <div key={index} className={`flex items-center space-x-3 animate-slide-in-left ${feature.delay} group`}>
                  <div className="bg-green-100 p-1 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                    <feature.icon className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1000">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a 
                href="tel:0312345678" 
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-xl"
              >
                <Phone className="h-5 w-5 group-hover:animate-pulse" />
                <span>Call Emergency</span>
              </a>
            </div>

            {/* Service Areas */}
            <div className="pt-8 border-t border-gray-200 animate-fade-in-up animation-delay-1200">
              <p className="text-sm text-gray-600 mb-2">Servicing Melbourne Metro Areas:</p>
              <p className="text-gray-700">CBD • Richmond • South Yarra • Carlton • Fitzroy • St Kilda • Brighton • Caulfield • Glen Waverley</p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-first animate-fade-in-up animation-delay-400">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <img 
                src="https://images.pexels.com/photos/8961342/pexels-photo-8961342.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional electrician working safely"
                className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-700 animate-counter">24/7</p>
                  <p className="text-gray-600 font-medium">Available</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold animate-bounce-gentle animation-delay-2000">
                ⚡ Licensed
              </div>
              <div className="absolute top-16 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce-gentle animation-delay-3000">
                ✓ Insured
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
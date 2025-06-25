import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, number: "24/7", text: "Emergency Service" },
    { icon: Users, number: "100%", text: "Licensed Team" },
    { icon: CheckCircle, number: "Quality", text: "Workmanship" },
    { icon: Award, number: "Insured", text: "& Bonded" }
  ];

  const certifications = [
    "Licensed Electrical Contractor",
    "Master Electricians Australia Member",
    "Electrical Safety Inspector",
    "Solar Installation Certified",
    "Public Liability Insured",
    "WorkSafe Compliant"
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-4 animate-bounce-gentle">
                  🏆 Professional & Reliable
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted Melbourne Electrical Contractors
                </h1>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p className="animate-fade-in-up animation-delay-200">
                    PB8 Electricals is your reliable partner for all electrical services across Melbourne and surrounding areas. We are committed to providing safe, professional, and high-quality electrical solutions for both residential and commercial properties.
                  </p>
                  <p className="animate-fade-in-up animation-delay-400">
                    Our team of fully licensed and insured electricians brings expertise and dedication to every project. We understand the importance of electrical safety and reliability, which is why we use only quality materials and follow strict safety protocols.
                  </p>
                  <p className="animate-fade-in-up animation-delay-600">
                    From simple repairs to complex installations, we approach every job with professionalism and attention to detail. Our goal is to build lasting relationships with our clients through honest service and quality workmanship.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 animate-fade-in-up animation-delay-800">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <stat.icon className="h-8 w-8 text-blue-700" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1 animate-counter">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.text}</div>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 animate-fade-in-up animation-delay-1000">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Our Experience</h3>
                <p className="text-blue-700 text-lg">
                   We have successfully completed thousands of projects across Melbourne, from simple residential repairs to complex commercial installations.
                </p>
              </div>

              {/* Certifications */}
              <div className="animate-fade-in-up animation-delay-1200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Licenses & Certifications</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center space-x-3 group animate-slide-in-left`}
                      style={{ animationDelay: `${1200 + (index * 100)}ms` }}
                    >
                      <div className="bg-green-100 p-1 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up animation-delay-400">
              <div className="space-y-6">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="https://images.pexels.com/photos/8924675/pexels-photo-8924675.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Professional electrician at work"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 animation-delay-200">
                  <img 
                    src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Electrical panel installation"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 animation-delay-400">
                  <img 
                    src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Professional electrical tools"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 animation-delay-600">
                  <img 
                    src="https://images.pexels.com/photos/4254167/pexels-photo-4254167.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Modern electrical panel"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
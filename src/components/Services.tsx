import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Zap, 
  Lightbulb, 
  Shield, 
  Settings, 
  Wrench, 
  AlertTriangle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Lighting & Power",
      description: "Complete lighting solutions and power installations for your home and business.",
      features: [
        "Indoor & Outdoor Lighting Setup",
        "Power Outlet Installations & Repairs", 
        "Switchboard Repairs & Modern Upgrades",
        "Consumer Mains Replacement & Upgrades"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Home,
      title: "Home Installations",
      description: "Professional home electrical installations and modern convenience upgrades.",
      features: [
        "Ceiling Fan Fitting & Replacement",
        "Bathroom & Kitchen Exhaust Fan Fitting",
        "Smoke Detector Setup & Maintenance", 
        "Video Doorbell & Intercom System Setup",
        "EV Charger Supply & Installation"
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Shield,
      title: "Security & Safety",
      description: "Comprehensive electrical safety and security system installations.",
      features: [
        "Wireless Security Camera Installation",
        "Home Electrical Safety Inspections",
        "Pre-Rental Electrical Compliance Reports"
      ],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Settings,
      title: "Renovation & Specialty Work",
      description: "Specialized electrical services for renovations and unique requirements.",
      features: [
        "Full Electrical Fit-Outs for Renovations",
        "Wiring & Power Setup for Pools & Spas",
        "Internet & Data Point Connections"
      ],
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-4 animate-bounce-gentle">
            ⚡ Professional Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Electrical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential installations to commercial solutions, we provide comprehensive electrical services across Melbourne with guaranteed quality and safety.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className={`flex items-center space-x-3 animate-slide-in-left`}
                    style={{ animationDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                  >
                    <div className="bg-green-100 p-1 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                      <CheckCircle className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100">
                <Link 
                  to="/services" 
                  className="group/btn inline-flex items-center space-x-2 text-blue-700 hover:text-blue-800 font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <span>View All Services</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Services;
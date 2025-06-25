import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Home, 
  Shield, 
  Settings, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Lighting & Power",
      description: "Complete lighting solutions and power installations for your home and business.",
      features: [
        { name: "Indoor & Outdoor Lighting Setup", path: "/services/indoor-outdoor-lighting" },
        { name: "Power Outlet Installations & Repairs", path: "/services/power-outlet-installations" },
        { name: "Switchboard Repairs & Modern Upgrades", path: "/services/switchboard-repairs" },
        { name: "Consumer Mains Replacement & Upgrades", path: "/services/consumer-mains-replacement" }
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Home,
      title: "Home Installations",
      description: "Professional home electrical installations and modern convenience upgrades.",
      features: [
        { name: "Ceiling Fan Fitting & Replacement", path: "/services/ceiling-fan-fitting" },
        { name: "Bathroom & Kitchen Exhaust Fan Fitting", path: "/services/exhaust-fan-fitting" },
        { name: "Smoke Detector Setup & Maintenance", path: "/services/smoke-detector-setup" },
        { name: "Video Doorbell & Intercom System Setup", path: "/services/video-doorbell-setup" },
        { name: "EV Charger Supply & Installation", path: "/services/ev-charger-installation" }
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Shield,
      title: "Security & Safety",
      description: "Comprehensive electrical safety and security system installations.",
      features: [
        { name: "Wireless Security Camera Installation", path: "/services/security-camera-installation" },
        { name: "Home Electrical Safety Inspections", path: "/services/electrical-safety-inspections" },
        { name: "Pre-Rental Electrical Compliance Reports", path: "/services/rental-compliance-reports" }
      ],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Settings,
      title: "Renovation & Specialty Work",
      description: "Specialized electrical services for renovations and unique requirements.",
      features: [
        { name: "Full Electrical Fit-Outs for Renovations", path: "/services/renovation-electrical-fitouts" },
        { name: "Wiring & Power Setup for Pools & Spas", path: "/services/pool-spa-wiring" },
        { name: "24/7 Emergency Electrical Troubleshooting", path: "/services/emergency-troubleshooting" },
        { name: "Internet & Data Point Connections", path: "/services/data-point-connections" }
      ],
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium text-sm mb-4 animate-bounce-gentle">
              ⚡ Professional Services
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Electrical Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential installations to commercial solutions, we provide comprehensive electrical services across Melbourne with guaranteed quality and safety.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <Link
                      key={featureIndex}
                      to={feature.path}
                      className={`flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 group/item animate-slide-in-left`}
                      style={{ animationDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-1 rounded-full group-hover/item:bg-green-200 transition-colors duration-300">
                          <CheckCircle className="h-4 w-4 text-green-500 group-hover/item:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="text-gray-700 text-sm group-hover/item:text-blue-700 transition-colors duration-300">{feature.name}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover/item:text-blue-700 group-hover/item:translate-x-1 transition-all duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
import React from "react";
import { Eye, Target, Radio, Cpu } from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Advanced Surveillance",
      description: "AI-powered aerial intelligence and tracking.",
      features: ["4K Video", "Thermal Imaging", "Night Vision"],
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Targeting",
      description: "Autonomous navigation and GPS accuracy.",
      features: ["GPS Navigation", "Auto-Return", "Obstacle Avoidance"],
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Long-Range Comms",
      description: "Encrypted communication up to 50km.",
      features: ["Secure Data Link", "Telemetry", "Redundant Systems"],
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Integration",
      description: "Edge computing with adaptive intelligence.",
      features: ["Machine Learning", "Edge Processing", "Autonomy"],
    },
  ];

  return (
    <section id="technology" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
            Core Capabilities
          </div>
          <h2 className="text-4xl font-bold mb-4">Advanced UAV Systems</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{cap.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.features.map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-400"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;

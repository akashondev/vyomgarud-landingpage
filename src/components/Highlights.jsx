import React from "react";
import { Shield, Zap, Radio, Cpu } from "lucide-react";

const HighlightsSection = () => {
  const offerings = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Aerial Surveillance",
      description:
        "High-altitude monitoring with encrypted real-time data streams.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Navigation",
      description:
        "Smart pathfinding and autonomous obstacle avoidance for complex terrain.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Response",
      description:
        "Fast deployment with modular payloads for multiple mission profiles.",
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Secure Communications",
      description:
        "Military-grade encrypted channels for reliable mission control.",
    },
  ];

  const highlights = [
    {
      title: "Military-Grade Reliability",
      description: "Redundant fail-safe systems for extreme conditions.",
    },
    {
      title: "Rapid Deployment",
      description: "Quick setup for time-critical operations.",
    },
    {
      title: "Autonomous Operations",
      description: "AI-driven mission execution.",
    },
  ];

  return (
    <section
      id="product"
      className="py-24 bg-gray-900/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Offerings Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
            Capabilities & Products
          </div>
          <h2 className="text-4xl font-bold text-white">
            Engineered for Mission Success
          </h2>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-24">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-950/50 border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
            Why Choose VyomGarud
          </div>
          <h2 className="text-3xl font-bold text-white">
            Built for Mission-Critical Operations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="bg-gray-950/50 border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{h.title}</h3>
              <p className="text-gray-400">{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;

import React from "react";
import { Shield, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
  ];

  const footerLinks = [
    { title: "Company", links: ["About", "Careers", "Press", "Blog"] },
    {
      title: "Products",
      links: ["Surveillance", "Targeting", "Communications", "AI Systems"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API", "Support", "Training"],
    },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "Compliance"] },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold">VyomGarud</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Next-generation autonomous UAV systems engineered for
              mission-critical operations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            © 2024 VyomGarud. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <Shield size={16} className="text-orange-500" />
            <span>Military-Grade Security & Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

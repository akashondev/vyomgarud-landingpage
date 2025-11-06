import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = [
        "home",
        "about",
        "technology",
        "Product",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "About", id: "about" },
    { name: "Technology", id: "technology" },
    { name: "Product", id: "Product"},
    { name: "Contact us", id: "contact", isButton: true },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-xl shadow-2xl shadow-orange-500/10 border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:rotate-[-12deg] transition-all duration-500 shadow-lg shadow-orange-500/20">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">
              VyomGarud
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                {!item.isButton ? (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-6 py-3 text-lg font-medium text-gray-300 transition-all duration-300 ease-in-out hover:text-white"
                  >
                    <span className="relative z-10">{item.name}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="px-8 py-3 border-2 border-white text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-gradient-to-r  hover:from-slate-50 hover:to-orange-500 hover:text-black"
                  >
                    <span className="relative z-10">{item.name}</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 hover:bg-gray-800/50 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 group ${
                  item.isButton
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                    : activeSection === item.id
                    ? "text-orange-500 bg-orange-500/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.name}</span>
                  {!item.isButton && (
                    <div className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

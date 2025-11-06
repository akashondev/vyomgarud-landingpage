import React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Play, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Enhanced Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Zap className="w-4 h-4" />
              <span>Innovating Autonomous Flight</span>
            </motion.div>

            <motion.h2
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Redefining
              <span className="block text-orange-500 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Aerial Intelligence
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              VyomGarud pioneers next-generation UAV systems with cutting-edge
              AI, delivering unparalleled performance for defense, security, and
              surveillance missions.
            </motion.p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4 text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Advanced AI-powered autonomous systems</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4 text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Military-grade security and reliability</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4 text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Real-time surveillance and data analytics</span>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, x: 8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25"
              >
                <span>Explore Our Technology</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white rounded-2xl font-semibold transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section - Enhanced Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Main Card */}
            <motion.div
              className="relative aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="VyomGarud Advanced Drone"
                className="w-full h-full object-cover opacity-90"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-6 right-6 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Shield className="w-8 h-8 text-orange-400" />
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-2xl font-bold mb-2">V-Mark IV</h3>
                <p className="text-gray-300">Next-gen autonomous UAV</p>
              </motion.div>

              {/* Animated Scan Line */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent"
                animate={{ y: ["-100%", "200%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Floating Orb */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Background Decorative Elements */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

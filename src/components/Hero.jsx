import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// ====== Animation Variants (moved outside component for clarity) ======
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const statVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8 + i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const glowPulseVariant = {
  initial: { opacity: 0.3, scale: 1 },
  animate: {
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.1, 1],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// ====== Subcomponents ======

// Background with glowing animated gradients
const HeroBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
    <motion.div
      variants={glowPulseVariant}
      initial="initial"
      animate="animate"
      className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"
    />
    <motion.div
      variants={glowPulseVariant}
      initial="initial"
      animate="animate"
      transition={{ delay: 1 }}
      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-70"
    />
  </div>
);

// Hero title and tagline
const HeroTitle = ({ title, tagline }) => (
  <>
    <motion.h1
      variants={fadeUpVariant}
      className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
    >
      <span className="block text-white">{title}</span>
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mt-2">
        {tagline}
      </span>
    </motion.h1>

    <motion.p
      variants={fadeUpVariant}
      className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
    >
      Military-grade autonomous drone systems engineered for critical missions.
    </motion.p>
  </>
);

// CTA Buttons
const HeroButtons = ({ scrollToSection }) => (
  <motion.div
    variants={fadeUpVariant}
    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
  >
    <motion.button
      onClick={() => scrollToSection("capabilities")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 flex items-center space-x-2"
    >
      <span>Explore Systems</span>
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronRight className="w-5 h-5" />
      </motion.div>
    </motion.button>

    <motion.button
      onClick={() => scrollToSection("contact")}
      whileHover={{ scale: 1.05, borderColor: "rgb(249 115 22)" }}
      whileTap={{ scale: 0.98 }}
      className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
    >
      Request Demo
    </motion.button>
  </motion.div>
);

// Stats section
const HeroStats = ({ stats }) => (
  <motion.div
    variants={fadeUpVariant}
    className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16"
  >
    {stats.map((stat, idx) => (
      <motion.div
        key={idx}
        custom={idx}
        variants={statVariant}
        whileHover={{ y: -5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: [1, 1.1, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 + idx * 0.1 }}
          className="text-3xl font-bold text-orange-500"
        >
          {stat.value}
        </motion.div>
        <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
      </motion.div>
    ))}
  </motion.div>
);

// ====== Main Component ======
const Hero = ({
  title = "VyomGarud",
  tagline = "Precision. Power. Performance.",
  stats = [
    { value: "50+", label: "Missions Completed" },
    { value: "99.9%", label: "System Uptime" },
    { value: "50km", label: "Max Range" },
  ],
}) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center w-full overflow-hidden"
    >
      <HeroBackground />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="space-y-8">
          <HeroTitle title={title} tagline={tagline} />
          <HeroButtons scrollToSection={scrollToSection} />
          <HeroStats stats={stats} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

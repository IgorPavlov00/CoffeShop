import React from "react";
import { motion } from "framer-motion";
import {
  FaCoffee,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaHeart,
  FaWifi,
  FaStar,
} from "react-icons/fa";

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(217,119,6,0.4)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(245,158,11,0.3)_0%,_transparent_50%)]" />
      </div>

      {/* Floating Coffee Elements */}
      <motion.div
        className="absolute top-20 left-8 w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 opacity-20 flex items-center justify-center"
        variants={floatingVariants}
        animate="animate"
      >
        <FaHeart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-12 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 opacity-25 flex items-center justify-center"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      >
        <FaStar className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-600 opacity-30 flex items-center justify-center"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      >
        <FaWifi className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20 scale-[0.95] lg:scale-[0.9] xl:scale-[0.90] transition-all duration-500">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
            <motion.div className="inline-flex items-center px-4 py-3 sm:px-6 sm:py-3 rounded-full bg-amber-500/25 backdrop-blur-sm border border-amber-400/40 shadow-lg mb-6">
              <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 mr-3" />
              <span className="text-amber-300 text-sm sm:text-base font-semibold tracking-wider uppercase">
                Visit Us Today
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-300 leading-tight mb-6 drop-shadow-lg">
              Experience
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-300">
                Kombinat Today
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed font-light">
              Visit our cozy coffee shop in the heart of Novi Sad, or{" "}
              <span className="text-amber-300 font-semibold">order online</span>{" "}
              and enjoy our{" "}
              <span className="text-amber-300 font-semibold">
                signature flavors
              </span>{" "}
              at home.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(217,119,6,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-base sm:text-lg rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 w-full sm:w-auto border border-amber-500/30"
            >
              <span className="relative z-10 flex items-center justify-center">
                <FaCoffee className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                Order Online Now
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 sm:px-10 sm:py-5 bg-transparent border-2 border-amber-400/60 text-amber-200 font-bold text-base sm:text-lg rounded-2xl backdrop-blur-sm hover:bg-amber-500/15 hover:border-amber-400/80 transition-all duration-300 w-full sm:w-auto flex items-center justify-center shadow-xl"
            >
              <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
              Find Our Location
            </motion.button>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          >
            {/* Hours Card */}
            <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-sm border border-amber-600/30 rounded-3xl p-6 sm:p-8 shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4 mx-auto">
                <FaClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-200 mb-3">
                Opening Hours
              </h3>
              <div className="space-y-2 text-amber-100/80">
                <p className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="font-semibold">7AM - 9PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Weekends:</span>
                  <span className="font-semibold">8AM - 10PM</span>
                </p>
                <div className="mt-3 px-3 py-1 bg-green-500/20 rounded-full text-center">
                  <span className="text-green-400 font-semibold text-sm">
                    Open Now
                  </span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-sm border border-amber-600/30 rounded-3xl p-6 sm:p-8 shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4 mx-auto">
                <FaMapMarkerAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-200 mb-3">
                Location
              </h3>
              <div className="text-amber-100/80 text-center">
                <p className="mb-2">Zmaj Jovina 15</p>
                <p className="mb-2">21000 Novi Sad</p>
                <p className="font-semibold text-amber-300">Serbia</p>
                <div className="mt-3">
                  <span className="text-sm text-amber-400">
                    City Center Location
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-sm border border-amber-600/30 rounded-3xl p-6 sm:p-8 shadow-2xl hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4 mx-auto">
                <FaPhone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-200 mb-3">
                Contact
              </h3>
              <div className="text-amber-100/80 text-center">
                <p className="mb-2">+381 21 555 0123</p>
                <p className="mb-2">hello@kombinat.rs</p>
                <div className="mt-3 flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-amber-500/20 rounded text-xs text-amber-300">
                    WiFi
                  </span>
                  <span className="px-2 py-1 bg-amber-500/20 rounded text-xs text-amber-300">
                    Takeaway
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20 sm:h-32"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(245, 158, 11, 0.1)"
            d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,224C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
          <path
            fill="rgba(217, 119, 6, 0.05)"
            d="M0,192L80,197.3C160,203,320,213,480,229.3C640,245,800,267,960,256C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTA;

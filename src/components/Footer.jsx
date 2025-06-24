import React from "react";
import { motion } from "framer-motion";
import {
  FaCoffee,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-amber-800 via-orange-800 to-yellow-800">
      <div className="relative z-10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center"
          >
            {/* Left - Logo & Social */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <FaCoffee className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-black text-white">Kombinat</h3>
              </div>

              <p className="text-amber-100/80 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Your cozy corner in Novi Sad for specialty coffee and good
                vibes.
              </p>

              <div className="flex justify-center lg:justify-start space-x-4">
                {[
                  { icon: FaInstagram, href: "#" },
                  { icon: FaFacebook, href: "#" },
                  { icon: FaTwitter, href: "#" },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Center - Image */}
            <motion.div
              variants={itemVariants}
              className="order-first lg:order-none"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
                  alt="Kombinat coffee and pastries"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Right - Contact */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-right"
            >
              <h4 className="text-2xl font-bold text-white mb-6">Visit Us</h4>
              <div className="space-y-4 text-amber-100/80">
                <div className="flex items-center justify-center lg:justify-end">
                  <FaMapMarkerAlt className="w-5 h-5 text-amber-300 mr-3 flex-shrink-0" />
                  <span>Zmaj Jovina 15, Novi Sad</span>
                </div>
                <div className="flex items-center justify-center lg:justify-end">
                  <FaPhone className="w-5 h-5 text-amber-300 mr-3 flex-shrink-0" />
                  <span>+381 21 555 0123</span>
                </div>
                <div className="flex items-center justify-center lg:justify-end">
                  <FaEnvelope className="w-5 h-5 text-amber-300 mr-3 flex-shrink-0" />
                  <span>hello@kombinat.rs</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-white text-amber-800 font-bold rounded-xl hover:bg-amber-50 transition-all duration-300 shadow-lg"
              >
                Get Directions
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-amber-600/30 text-center"
          >
            <p className="text-amber-200/60 text-sm">
              © {new Date().getFullYear()} Kombinat Coffee. Made with ❤️ in Novi
              Sad
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

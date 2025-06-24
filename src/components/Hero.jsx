import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaCoffee,
  FaMapMarkerAlt,
  FaStar,
  FaClock,
  FaWifi,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const mobileY = useTransform(scrollY, [0, 300], [0, 50]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 1,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900 overflow-hidden ">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,183,77,0.3)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(245,158,11,0.2)_0%,_transparent_70%)]" />
      </div>

      {/* Floating Modern Elements */}
      <motion.div
        className="absolute top-30 left-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-40 right-20 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-500 rotate-45 opacity-50"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-70"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      {/* Mouse Follower - Modern */}
      {!isMobile && (
        <motion.div
          className="absolute w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full pointer-events-none mix-blend-screen hidden md:block"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      )}

      {/* Parallax Content Container */}
      <motion.div
        style={{ y: isMobile ? mobileY : y }}
        className="relative z-10 min-h-screen flex items-center pt-24"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 xl:px-12 lg:scale-[0.9] lg:origin-top">
          <motion.div
            className="grid items-center grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-20 lg:py-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left Content - 5 columns */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-center lg:text-left">
              <motion.div
                variants={textVariants}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <FaCoffee className="w-4 h-4 text-amber-300 mr-3" />
                <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
                  Welcome to Kombinat
                </span>
              </motion.div>

              <motion.h1
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight"
                style={{
                  textShadow: "0 0 40px rgba(0,0,0,0.5)",
                }}
              >
                Artisan
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                  Coffee
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl text-white/80">
                  & Fresh Pastries
                </span>
              </motion.h1>

              <motion.p
                variants={textVariants}
                className="text-lg sm:text-xl text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Experience the finest{" "}
                <span className="text-amber-300 font-semibold">
                  artisan coffee
                </span>
                ,{" "}
                <span className="text-amber-300 font-semibold">
                  handcrafted pastries
                </span>
                , and{" "}
                <span className="text-amber-300 font-semibold">
                  cozy atmosphere
                </span>{" "}
                in the heart of Novi Sad.
              </motion.p>

              <motion.div
                variants={textVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                >
                  <FaCoffee className="w-5 h-5 mr-3" />
                  View Menu
                  <FaArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                >
                  <FaMapMarkerAlt className="w-5 h-5 mr-3" />
                  Find Us
                </motion.button>
              </motion.div>

              {/* Status Indicators */}
              <motion.div
                variants={textVariants}
                className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm"
              >
                <div className="flex items-center bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-400/30">
                  <FaClock className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-white/90">Open Now • 7AM - 9PM</span>
                </div>
                <div className="flex items-center bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-400/30">
                  <FaStar className="w-4 h-4 text-amber-400 mr-2" />
                  <span className="text-white/90">4.9 ★ (850+ reviews)</span>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Section - 7 columns */}
            <div className="lg:col-span-7 relative">
              <motion.div
                variants={imageVariants}
                className="relative grid grid-cols-12 grid-rows-8 gap-4 h-[600px] lg:h-[700px]"
              >
                {/* Main Hero Image - Coffee Shop Interior */}
                <motion.div
                  className="col-span-8 row-span-5 relative group overflow-hidden rounded-3xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-50" />
                  <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                    alt="Kombinat coffee shop - cozy interior with warm lighting"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <FaCoffee className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Specialty Coffee Image - Moved up to fill space */}
                <motion.div
                  className="col-span-4 row-span-3 relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=400&q=80"
                    alt="Specialty coffee beans and brewing equipment"
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-2xl" />
                </motion.div>

                {/* Features Badge - Moved below */}
                <motion.div
                  className="col-span-4 row-span-2 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-2xl p-4 flex flex-col justify-center items-center border border-white/10 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-3 gap-3 w-full">
                    <div className="flex flex-col items-center">
                      <FaCoffee className="w-6 h-6 text-amber-400 mb-1" />
                      <span className="text-xs text-white/70 text-center">
                        Fresh
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaWifi className="w-6 h-6 text-blue-400 mb-1" />
                      <span className="text-xs text-white/70 text-center">
                        WiFi
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaHeart className="w-6 h-6 text-rose-400 mb-1" />
                      <span className="text-xs text-white/70 text-center">
                        Love
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Barista at Work - Now Rectangle instead of Circle */}
                <motion.div
                  className="col-span-4 row-span-3 relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://i.pinimg.com/736x/85/85/11/85851111fca1556b7a272dd4d7df2943.jpg"
                    alt="Professional barista crafting the perfect espresso"
                    className="w-full h-full object-cover shadow-xl rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />

                  {/* Heart Badge */}
                  <motion.div
                    className="absolute bottom-2 right-2 w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <FaHeart className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>

                {/* Coffee Art & Atmosphere - Extended to fill space */}
                <motion.div
                  className="col-span-8 row-span-3 relative overflow-hidden rounded-3xl"
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                    alt="Perfect latte art in a warm coffee shop setting"
                    className="w-full h-full object-cover shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-3xl" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

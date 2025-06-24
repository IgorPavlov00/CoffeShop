import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FaCoffee,
  FaUtensils,
  FaCouch,
  FaHeart,
  FaWifi,
  FaLeaf,
  FaArrowRight,
  FaStar,
  FaPlay,
} from "react-icons/fa";

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { damping: 25, stiffness: 700 });
  const mouseYSpring = useSpring(mouseY, { damping: 25, stiffness: 700 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;

    mouseX.set(x * 20);
    mouseY.set(y * 20);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
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

  const pulseVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const shimmerVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const features = [
    {
      title: "Specialty Coffee",
      text: "Only the finest locally roasted beans, expertly brewed to perfection with precision and passion.",
      img: "https://i.pinimg.com/736x/e2/1e/1e/e21e1e6c6d6c1e712de14547d2603cc9.jpg",
      icon: FaCoffee,
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-500/20 to-orange-500/20",
      stats: "50+ Varieties",
    },
    {
      title: "Artisan Brunch",
      text: "Handcrafted meals with fresh ingredients, vegan-friendly options, and service that feels like home.",
      img: "https://i.pinimg.com/736x/53/60/5e/53605e529501d12bc77b7ac2837fe1f2.jpg",
      icon: FaUtensils,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-500/20 to-red-500/20",
      stats: "Fresh Daily",
    },
    {
      title: "Cozy Atmosphere",
      text: "Perfect ambiance for focused work, meaningful conversations, or simply unwinding with great coffee.",
      img: "https://i.pinimg.com/736x/64/47/ac/6447acf7358f7a7cb67cae3556f8099f.jpg",
      icon: FaCouch,
      color: "from-yellow-600 to-amber-600",
      bgColor: "from-yellow-500/20 to-amber-500/20",
      stats: "Open 7AM-9PM",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-orange-900 via-amber-900 to-slate-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Exact same background as Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,183,77,0.3)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(245,158,11,0.2)_0%,_transparent_70%)]" />
      </div>

      {/* Same floating elements as Hero */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
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

      {/* Parallax Background Elements */}
      <motion.div
        style={{ x: mouseXSpring, y: mouseYSpring }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-500/25 to-teal-500/25 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-24 scale-[0.95] lg:scale-[0.9] xl:scale-[0.85] transition-all duration-500">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Enhanced Section Header */}
          <motion.div
            variants={cardVariants}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-8 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                variants={shimmerVariants}
                animate="animate"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,183,77,0.3), transparent)",
                  backgroundSize: "200% 100%",
                }}
              />
              <FaHeart className="w-4 h-4 text-amber-300 mr-3 relative z-10" />
              <span className="text-white/90 text-sm font-medium tracking-wider uppercase relative z-10">
                What Makes Us Special
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight mb-8 relative"
              style={{ textShadow: "0 0 40px rgba(0,0,0,0.5)" }}
            >
              Why People Love
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                Kombinat
              </span>
            </motion.h2>

            <motion.p className="text-lg sm:text-xl text-white/70 max-w-lg mx-auto leading-relaxed">
              More than just a coffee shop – we're a community hub where{" "}
              <span className="text-amber-300 font-semibold">
                exceptional coffee
              </span>
              ,{" "}
              <span className="text-amber-300 font-semibold">artisan food</span>
              , and{" "}
              <span className="text-amber-300 font-semibold">
                genuine hospitality
              </span>{" "}
              come together.
            </motion.p>
          </motion.div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -15,
                    rotateY: 5,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:border-white/20 overflow-hidden"
                >
                  {/* Enhanced Card Background Effects */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Enhanced Image Container */}
                  <div className="relative mb-8 flex justify-center">
                    <motion.div
                      className="relative w-24 h-24 sm:w-28 sm:h-28 group-hover:w-32 group-hover:h-32 transition-all duration-500"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src={feature.img}
                        alt={feature.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-full border-3 border-amber-500/40 shadow-xl group-hover:border-amber-400/60 transition-all duration-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Floating Icon Badge */}
                      <motion.div
                        className={`absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center border-2 border-amber-200/20 shadow-lg`}
                        variants={floatingVariants}
                        animate="animate"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.4 }}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative z-10 text-center">
                    <motion.h3
                      className="text-xl sm:text-2xl font-bold text-amber-200 mb-4 group-hover:text-amber-100 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      className="text-amber-100/80 text-sm sm:text-base leading-relaxed group-hover:text-amber-100 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.text}
                    </motion.p>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400/40 rounded-full group-hover:bg-amber-400/60 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400/40 rounded-full group-hover:bg-orange-400/60 transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Bottom CTA */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-20 md:mt-24"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 30px 60px rgba(217,119,6,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-base sm:text-lg rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border border-amber-500/30"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <span className="relative z-10 flex items-center justify-center">
                <FaCoffee className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                Experience Kombinat Today
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaArrowRight className="w-4 h-4" />
                </motion.div>
              </span>
            </motion.button>

            {/* Social Proof */}
            <motion.div
              className="flex items-center justify-center mt-8 space-x-6"
              variants={cardVariants}
            >
              <div className="flex items-center text-white/70">
                <FaStar className="w-4 h-4 text-amber-400 mr-2" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center text-white/70">
                <FaHeart className="w-4 h-4 text-rose-400 mr-2" />
                <span className="text-sm font-medium">
                  850+ Happy Customers
                </span>
              </div>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center text-white/70">
                <FaCoffee className="w-4 h-4 text-amber-400 mr-2" />
                <span className="text-sm font-medium">
                  50+ Coffee Varieties
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

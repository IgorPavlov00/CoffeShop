import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaGoogle,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      text: "Best brunch in Novi Sad! The avocado toast is incredible and the coffee is perfectly balanced. The atmosphere is so cozy and perfect for work or catching up with friends.",
      author: "Ana Petrović",
      role: "Regular Customer",
      rating: 5,
      source: "google",
      location: "Novi Sad",
      avatar:
        "https://i.pinimg.com/736x/27/33/76/273376744ea6b7e3231a9d5a24396786.jpg",
    },
    {
      text: "Cozy interior, friendly staff, 10/10 coffee! I've tried their matcha latte and it's the best I've had in Serbia. The pancakes are fluffy perfection. Highly recommend!",
      author: "Marko Jovanović",
      role: "Coffee Enthusiast",
      rating: 5,
      source: "instagram",
      location: "Belgrade",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      text: "Perfect spot for digital nomads! Fast WiFi, comfortable seating, and amazing specialty coffee. The granola bowl is my go-to breakfast. Kombinat has become my second office!",
      author: "Sarah Chen",
      role: "Digital Nomad",
      rating: 5,
      source: "google",
      location: "Traveling",
      avatar:
        "https://i.pinimg.com/736x/69/4a/6c/694a6ca11827273806b8a83ed57c7d65.jpg",
    },
  ];

  const sourceIcons = {
    google: { icon: FaGoogle, color: "text-red-500", name: "Google Reviews" },
    instagram: { icon: FaInstagram, color: "text-pink-500", name: "Instagram" },
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="reviews"
      className="relative py-20 bg-gradient-to-b from-slate-900 via-amber-900 to-orange-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,183,77,0.3)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(245,158,11,0.2)_0%,_transparent_70%)]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-30"
        animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-40"
        animate={{ y: [10, -10, 10], rotate: [360, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20 scale-[0.95] lg:scale-[0.9] xl:scale-[0.95] transition-all duration-500">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="w-5 h-5 text-amber-300 mr-3" />
            <span className="text-white/90 font-semibold tracking-wider uppercase">
              Customer Reviews
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Customers
            </span>{" "}
            Say
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Real experiences from our amazing community of coffee lovers, food
            enthusiasts, and digital nomads.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
              initial={{ opacity: 0, x: 300, rotateY: 45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -300, rotateY: -45 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <FaQuoteLeft className="w-8 h-8 text-white" />
              </motion.div>

              {/* Stars */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    <FaStar className="w-6 h-6 text-amber-400 mx-1" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.blockquote
                className="text-xl md:text-2xl text-white leading-relaxed text-center mb-8 font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                "{testimonials[currentIndex].text}"
              </motion.blockquote>

              {/* Author Info */}
              <motion.div
                className="flex items-center justify-center space-x-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-16 h-16 rounded-full border-3 border-amber-400/50 shadow-xl"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    {React.createElement(
                      sourceIcons[testimonials[currentIndex].source].icon,
                      {
                        className: "w-3 h-3 text-white",
                      }
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-bold text-white">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-amber-300 text-sm">
                    {testimonials[currentIndex].role} •{" "}
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    via {sourceIcons[testimonials[currentIndex].source].name}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
          >
            <FaChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
          >
            <FaChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Dots Navigation - Enhanced */}
        <div className="flex items-center justify-center space-x-4 mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`relative transition-all duration-300 ${
                index === currentIndex ? "w-12 h-4" : "w-4 h-4 hover:w-6"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/50 to-orange-500/50 rounded-full blur-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Social Proof Stats - Enhanced */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            {
              value: "4.9★",
              label: "Google Rating",
              icon: "⭐",
              color: "from-yellow-400 to-amber-500",
            },
            {
              value: "850+",
              label: "Happy Customers",
              icon: "😊",
              color: "from-green-400 to-emerald-500",
            },
            {
              value: "2.5K",
              label: "Instagram Followers",
              icon: "📱",
              color: "from-pink-400 to-rose-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full text-2xl mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-amber-300 transition-colors duration-300"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white/70 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

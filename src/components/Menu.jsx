import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCoffee, FaUtensils, FaHeart, FaLeaf, FaStar } from "react-icons/fa";

const Menu = () => {
  const [filter, setFilter] = useState("all");

  const menuItems = [
    {
      name: "Avocado Toast",
      desc: "Artisan sourdough with cherry tomatoes & creamy feta cheese",
      price: "€5.90",
      img: "https://i.pinimg.com/736x/06/b7/60/06b760a4faa9d509ca29781101c48d73.jpg",
      type: "food",
      featured: true,
    },
    {
      name: "Shakshuka",
      desc: "Perfectly poached eggs in our signature spicy tomato sauce",
      price: "€6.50",
      img: "https://i.pinimg.com/736x/03/50/3d/03503de53f6b35245a88aa176a8fe13b.jpg",
      type: "food",
      featured: false,
    },
    {
      name: "Oat Latte",
      desc: "Rich espresso with creamy oat milk, perfectly balanced",
      price: "€3.20",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80",
      type: "drink",
      featured: true,
    },
    {
      name: "Granola Bowl",
      desc: "House-made granola with Greek yogurt, seasonal fruit & honey",
      price: "€4.80",
      img: "https://i.pinimg.com/736x/bb/b4/ff/bbb4ffb986448c7fe83159aba14170f7.jpg",
      type: "food",
      featured: false,
    },
    {
      name: "Pancake Stack",
      desc: "Fluffy pancakes with maple syrup, fresh berries & whipped cream",
      price: "€5.50",
      img: "https://i.pinimg.com/736x/18/bc/d8/18bcd81675c38986d31cf6977dd5833b.jpg",
      type: "food",
      featured: true,
    },
    {
      name: "Espresso",
      desc: "Bold and rich single shot, expertly extracted",
      price: "€2.50",
      img: "https://i.pinimg.com/736x/85/85/11/85851111fca1556b7a272dd4d7df2943.jpg",
      type: "drink",
      featured: false,
    },
    {
      name: "Matcha Latte",
      desc: "Premium ceremonial matcha with silky oat milk",
      price: "€3.80",
      img: "https://i.pinimg.com/736x/f3/35/3d/f3353da22218a4de90629ea801d6d0ff.jpg",
      type: "drink",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-6, 6, -6],
      rotate: [0, 3, 0, -3, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const filteredItems =
    filter === "all"
      ? menuItems
      : menuItems.filter((item) => item.type === filter);

  const filterButtons = [
    { key: "all", label: "All Favorites", icon: FaHeart },
    { key: "food", label: "Food", icon: FaUtensils },
    { key: "drink", label: "Drinks", icon: FaCoffee },
  ];

  return (
    <section id="menu" className="scroll-mt-24 relative pt-8 pb-12">
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

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-15 flex items-center justify-center"
        variants={floatingVariants}
        animate="animate"
      >
        <FaCoffee className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-12 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 opacity-20 flex items-center justify-center"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      >
        <FaUtensils className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-25 flex items-center justify-center"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      >
        <FaLeaf className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-20 scale-[0.95] lg:scale-[0.9] xl:scale-[0.95] transition-all duration-500">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 shadow-lg mb-4">
              <FaUtensils className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-3" />
              <span className="text-amber-800 text-sm sm:text-base font-semibold tracking-wider uppercase">
                Kombinat Menu
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 leading-tight mb-4 drop-shadow-lg">
              Our Favorites
            </h2>

            <p className="text-lg sm:text-xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed font-light">
              Carefully crafted dishes and expertly brewed beverages, made with{" "}
              <span className="text-amber-700 font-semibold">
                fresh ingredients
              </span>{" "}
              and{" "}
              <span className="text-amber-700 font-semibold">
                passionate attention
              </span>{" "}
              to every detail.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {filterButtons.map(({ key, label, icon: IconComponent }) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border-2 ${
                  filter === key
                    ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-amber-400/50 shadow-xl"
                    : "bg-white/80 text-amber-800 border-amber-300/50 hover:bg-amber-50 hover:border-amber-400/70 shadow-lg backdrop-blur-sm"
                }`}
                onClick={() => setFilter(key)}
              >
                <span className="relative z-10 flex items-center">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {label}
                </span>
                {filter === key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${filter}-${index}`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  }}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300/70"
                >
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                      <FaStar className="w-4 h-4 text-white" />
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Type Badge */}
                    <div
                      className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                        item.type === "drink"
                          ? "bg-blue-500/80 text-white"
                          : "bg-green-500/80 text-white"
                      } backdrop-blur-sm`}
                    >
                      {item.type === "drink" ? "☕ Drink" : "🍽️ Food"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl sm:text-2xl font-bold text-amber-900 group-hover:text-amber-800 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 ml-2">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-amber-800/70 text-sm sm:text-base leading-relaxed group-hover:text-amber-800 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>

                  {/* Add to Order Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Add to Order
                  </motion.button>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-amber-400/40 rounded-full group-hover:bg-amber-400/60 transition-all duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-8 sm:mt-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(217,119,6,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-base sm:text-lg rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border border-amber-500/30"
            >
              <span className="relative z-10 flex items-center justify-center">
                <FaCoffee className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                View Full Menu
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;

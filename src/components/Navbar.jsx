import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section for highlighting
      const sections = ["hero", "about", "menu", "testimonials", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle navigation click
  const handleNavClick = (sectionId) => {
    smoothScrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking on a link
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const menuItems = ["About", "Menu", "Reviews", "Contact"];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 xl:px-12 lg:scale-[0.9] lg:origin-top">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Enhanced Logo */}
            <motion.div
              className="flex-shrink-0 z-60"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => handleNavClick("hero")}
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
              >
                <div className="relative">
                  <motion.div
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.5 3A1.5 1.5 0 0 1 20 4.5V5a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V4.5A1.5 1.5 0 0 1 1.5 3h17zM2 10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8zm8.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 opacity-30 rounded-full blur"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <motion.span
                  className="text-lg sm:text-xl font-bold text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  Kombinat
                </motion.span>
              </button>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative font-medium text-sm xl:text-base transition-all duration-300 px-3 py-2 rounded-lg ${
                    activeSection === item.id
                      ? "text-amber-400 bg-amber-500/10"
                      : "text-gray-300 hover:text-amber-400 hover:bg-white/5"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"
                    initial={{ width: 0 }}
                    animate={{
                      width: activeSection === item.id ? "100%" : 0,
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Enhanced Desktop CTA Button */}
            <motion.button
              onClick={() =>
                window.open(
                  "https://wa.me/381641234567?text=Hi! I would like to place an order at Kombinat.",
                  "_blank"
                )
              }
              className="hidden lg:flex items-center px-4 py-2 xl:px-6 xl:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-sm xl:text-base rounded-xl xl:rounded-2xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(34,197,94,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              <span className="relative z-10 flex items-center">
                <span className="mr-2">📱</span>
                Order Online
                <motion.svg
                  className="w-3 h-3 xl:w-4 xl:h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </span>
            </motion.button>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-white hover:text-amber-400 transition-colors duration-300 z-60 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  className="w-6 h-0.5 bg-current block rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 2 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-current block mt-1 rounded-full"
                  variants={{
                    closed: { opacity: 1, x: 0 },
                    open: { opacity: 0, x: -10 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-current block mt-1 rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -10 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Enhanced Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Enhanced Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-b from-slate-900/98 to-slate-800/98 backdrop-blur-xl border-l border-amber-500/20 shadow-2xl z-50 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full">
                {/* Enhanced Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700/50 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
                  <motion.span
                    className="text-xl font-bold text-white flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="mr-2">🍔</span>
                    Menu
                  </motion.span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Enhanced Mobile Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.id)}
                        className={`block w-full text-left px-4 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                          activeSection === item.id
                            ? "text-amber-400 bg-amber-500/20 border border-amber-500/30"
                            : "text-gray-300 hover:text-amber-400 hover:bg-white/10"
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          {activeSection === item.id && (
                            <motion.div
                              className="w-2 h-2 bg-amber-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </nav>

                {/* Enhanced Mobile CTA Button */}
                <div className="p-6 border-t border-slate-700/50">
                  <motion.button
                    onClick={() => {
                      window.open(
                        "https://wa.me/381641234567?text=Hi! I would like to place an order at Kombinat.",
                        "_blank"
                      );
                      handleMobileMenuClick();
                    }}
                    className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(34,197,94,0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />

                    <span className="relative z-10 flex items-center">
                      <span className="mr-3">📱</span>
                      Order via WhatsApp
                      <motion.svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </motion.svg>
                    </span>
                  </motion.button>

                  {/* Quick contact info */}
                  <motion.div
                    className="mt-4 text-center text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p>📞 +381 64 123 4567</p>
                    <p className="mt-1">🕒 Open daily 7AM - 9PM</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

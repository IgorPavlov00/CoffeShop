import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaQuestionCircle,
  FaTimes,
} from "react-icons/fa";

const StickyContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  const contactOptions = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      color: "from-green-500 to-green-600",
      action: () =>
        window.open(
          "https://wa.me/381641234567?text=Hi! I have a question about Kombinat.",
          "_blank"
        ),
    },
    {
      icon: FaPhone,
      label: "Call Us",
      color: "from-blue-500 to-blue-600",
      action: () => window.open("tel:+381641234567", "_self"),
    },
    {
      icon: FaEnvelope,
      label: "Email",
      color: "from-purple-500 to-purple-600",
      action: () =>
        window.open(
          "mailto:hello@kombinat.rs?subject=Inquiry about Kombinat",
          "_self"
        ),
    },
    {
      icon: FaQuestionCircle,
      label: "FAQ",
      color: "from-amber-500 to-orange-600",
      action: () => setShowFAQ(true),
    },
  ];

  const faqItems = [
    {
      question: "Do you offer vegan options?",
      answer:
        "Yes! We have a variety of vegan dishes including our popular avocado toast, oat milk lattes, and seasonal vegan specials.",
    },
    {
      question: "What are your working hours?",
      answer:
        "We're open daily from 7:00 AM to 9:00 PM. Perfect for your morning coffee, lunch break, or evening hangout!",
    },
    {
      question: "Do you deliver?",
      answer:
        "Currently, we focus on dine-in experience, but you can order ahead via WhatsApp for quick pickup!",
    },
    {
      question: "Is WiFi available?",
      answer:
        "Absolutely! We offer free high-speed WiFi, making Kombinat perfect for remote work or studying.",
    },
    {
      question: "Can I reserve a table?",
      answer:
        "Yes! Contact us via WhatsApp or call us directly to reserve your table, especially during busy hours.",
    },
  ];

  return (
    <>
      {/* Sticky Contact Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2,
        }}
        style={{ zIndex: 9999 }}
      >
        {/* Contact Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-14 right-0 space-y-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
              style={{ zIndex: 9999 }}
            >
              {contactOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <motion.button
                    key={option.label}
                    onClick={option.action}
                    className={`group flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-gradient-to-r ${option.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{ zIndex: 9999 }}
                  >
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5" />

                    {/* Tooltip - Enhanced for desktop */}
                    <motion.div
                      className="absolute right-14 md:right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      initial={{ x: 10 }}
                      whileHover={{ x: 0 }}
                      style={{ zIndex: 10000 }}
                    >
                      {option.label}
                      <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                    </motion.div>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button - Enhanced for desktop */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          style={{ zIndex: 9999 }}
        >
          <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <span className="text-xl md:text-2xl">💬</span>
            )}
          </motion.div>
        </motion.button>

        {/* Pulse Animation - Enhanced visibility */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ zIndex: 9998 }}
          />
        )}
      </motion.div>

      {/* FAQ Modal */}
      <AnimatePresence>
        {showFAQ && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFAQ(false)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-lg w-full max-h-[70vh] overflow-y-auto p-4 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-2">
                    <FaQuestionCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Frequently Asked Questions
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Quick answers to common questions
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowFAQ(false)}
                  className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                >
                  <FaTimes className="w-3 h-3 text-gray-600" />
                </button>
              </div>

              {/* FAQ Items */}
              <div className="space-y-2">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-xl p-2 hover:border-amber-300 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="font-semibold text-gray-800 mb-1 flex items-center text-sm">
                      <span className="w-4 h-4 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xs font-bold mr-2">
                        {index + 1}
                      </span>
                      {item.question}
                    </h4>
                    <p className="text-gray-600 leading-snug ml-6 text-xs">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-4 p-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                <p className="text-center text-gray-700 mb-2 text-xs">
                  <strong>Still have questions?</strong> We'd love to help!
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => {
                      setShowFAQ(false);
                      window.open(
                        "https://wa.me/381641234567?text=Hi! I have a question about Kombinat.",
                        "_blank"
                      );
                    }}
                    className="flex items-center px-2 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200 text-xs"
                  >
                    <FaWhatsapp className="w-3 h-3 mr-1" />
                    WhatsApp Us
                  </button>
                  <button
                    onClick={() => {
                      setShowFAQ(false);
                      window.open("tel:+381641234567", "_self");
                    }}
                    className="flex items-center px-2 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 text-xs"
                  >
                    <FaPhone className="w-3 h-3 mr-1" />
                    Call Us
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyContactButton;

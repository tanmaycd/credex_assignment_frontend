import React from 'react';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Hero = () => {
  return (
    <section className="relative text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white dark:text-gray-100">
      <DarkModeToggle />
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold leading-tight">
          Welcome to <span className="text-yellow-300 dark:text-yellow-400">SoftSell</span>
        </h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-200 dark:text-gray-300">
          Sell your unused software licenses with ease. We make it fast, secure, and simple.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-yellow-300 text-blue-800 font-semibold rounded-full shadow-lg hover:bg-yellow-400 dark:bg-yellow-500 dark:text-gray-900 dark:hover:bg-yellow-600 transition-all"
        >
          Get a Quote
        </motion.button>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 dark:bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-400 dark:bg-gray-700 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default Hero;
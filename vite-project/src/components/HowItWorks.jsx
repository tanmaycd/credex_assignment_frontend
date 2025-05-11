import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    { icon: '📦', title: 'Submit Your License', description: 'Provide your unused software license details for evaluation.' },
    { icon: '🔍', title: 'Get an Instant Quote', description: 'Our system analyzes your license and provides a fair market value.' },
    { icon: '💳', title: 'Receive Your Payment', description: 'Get paid securely and quickly through your preferred method.' }
  ];

  return (
    <section className="text-center py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100">
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold mb-12 text-gray-700 dark:text-gray-200">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="p-8 border rounded-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-all relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Decorative Background Element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-500 opacity-10 rounded-full blur-3xl"></div>

              <div className="text-6xl mb-4 z-10 relative">{step.icon}</div>
              <h3 className="font-bold text-2xl mb-2 z-10 relative">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 z-10 relative">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
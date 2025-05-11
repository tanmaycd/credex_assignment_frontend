import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Emily Carter',
      role: 'Product Manager',
      company: 'BrightTech',
      review: 'SoftSell transformed how we manage unused licenses. The process was smooth and efficient!',
    },
    {
      name: 'Michael Brown',
      role: 'Founder',
      company: 'NextGen Solutions',
      review: 'I was amazed by the professionalism and speed of the service. Highly recommended!',
    },
    {
      name: 'Sophia Wilson',
      role: 'IT Director',
      company: 'CloudCore',
      review: 'The best platform for selling unused software licenses. Secure and hassle-free!',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-700 dark:text-gray-200">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-500 opacity-10 rounded-full blur-3xl"></div>

            <p className="text-lg italic text-gray-600 dark:text-gray-300 z-10 relative">
              "{testimonial.review}"
            </p>
            <div className="mt-6 text-left z-10 relative">
              <strong className="text-lg text-gray-800 dark:text-gray-100">{testimonial.name}</strong>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
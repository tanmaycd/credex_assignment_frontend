import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', licenseType: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700 dark:text-gray-200">
        Contact Us
      </h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Enter your company name (optional)"
          className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
        <select
          value={formData.licenseType}
          onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
          className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select License Type</option>
          <option value="Software">Software</option>
          <option value="Subscription">Subscription</option>
        </select>
        <textarea
          placeholder="Write your message here..."
          className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
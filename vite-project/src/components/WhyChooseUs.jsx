import React from 'react';

const WhyChooseUs = () => {
  const features = [
    { icon: '🛡️', title: 'Reliable Security', description: 'Your data and transactions are protected with advanced encryption.' },
    { icon: '🚀', title: 'Lightning Fast', description: 'Experience quick evaluations and instant payments for your licenses.' },
    { icon: '🤝', title: 'Trusted Expertise', description: 'Our team ensures a smooth and professional experience every time.' }
  ];

  return (
    <section className="text-center py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-700 dark:text-gray-200">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-8 border rounded-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-all relative overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>

            <div className="text-5xl mb-4 z-10 relative">{feature.icon}</div>
            <h3 className="font-bold text-2xl mb-2 z-10 relative">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 z-10 relative">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
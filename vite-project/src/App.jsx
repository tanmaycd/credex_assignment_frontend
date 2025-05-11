import React from 'react';

// Importing the individual sections
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import DarkModeToggle from './components/DarkModeToggle';
const App = () => (
  <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
    
    <Hero />
    <HowItWorks />
    <WhyChooseUs />
    <Testimonials />
    <ContactForm />
    <ChatWidget />
    <DarkModeToggle />
    
  </div>
);

export default App;

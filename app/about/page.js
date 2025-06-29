// pages/about.js or components/AboutSection.js
"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../Components/Testimonials';
import FixItSection from '../Components/FixItSection';
import Navbar from '../Components/Navbar';

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
    <Navbar/>
    <div className="h-[1070px] bg-gradient-to-br from-blue-50 to-indigo-50 pt-24 px-6 md:px-16 lg:px-24 relative overflow-hidden ">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-indigo-100 opacity-40 blur-xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 rounded-full bg-blue-100 opacity-30 blur-xl" />
      
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-grid-pattern bg-center" />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Subheading with animation */}
        <motion.p 
          variants={itemVariants}
          className="text-sm md:text-base font-semibold text-indigo-600 mb-4 tracking-wider"
        >
          ABOUT INK CURES
        </motion.p>

        {/* Main Heading with animation */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-12"
        >
          <span className="block">Your Expert Guide</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            For Printer Solutions
          </span>
        </motion.h1>

        {/* Content container */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col lg:flex-row gap-12 items-center mb-16"
        >
          {/* Text content */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We simplify printer troubleshooting with easy-to-follow guides, 
              helping you solve common issues quickly without technical expertise.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our mission is to save you time and frustration by providing clear, 
              step-by-step solutions for all major printer brands and models.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-indigo-600">100+</p>
                <p className="text-gray-600">Solutions</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-indigo-600">24/7</p>
                <p className="text-gray-600">Support</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-indigo-600">95%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Image with hover effect */}
          <div className="lg:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              <Image
                src="/about.jpg"
                alt="Printer Troubleshooting"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200 hidden md:block">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse" />
                <p className="text-sm font-medium text-gray-700">Live Support Available</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
          <p className="text-gray-600 mb-6 text-lg">Our experts are ready to assist you with any printer issue.</p>
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Contact Support Now
          </button>
        </motion.div>
      </motion.div>
    </div>
    <Testimonials/>
    <FixItSection/>
    
    </>
  );
};

export default AboutSection;
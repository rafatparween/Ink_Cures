// components/ContactUs.js
"use client"
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
import FixItSection from "../Components/FixItSection";
import Navbar from "../Components/Navbar";

const ContactUs = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-blue-200 opacity-30 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-indigo-200 opacity-20 blur-3xl" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-sm font-semibold text-indigo-600 tracking-wider mb-3">
            GET IN TOUCH
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            We're Here to <span className="text-indigo-600">Help</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about your printer? Our support team is ready to assist you 24/7.
          </p>
        </motion.div>

        {/* Grid Layout (Contact Cards + Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Cards */}
          <motion.div variants={item} className="space-y-6">
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <FiMail className="text-indigo-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Drop us a message anytime!</p>
              <a
                href="mailto:support@inkcures.com"
                className="text-indigo-600 font-medium hover:underline"
              >
                support@inkcures.com
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <FiPhone className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Available 24/7 for emergencies.</p>
              <a
                href="tel:+18005551234"
                className="text-blue-600 font-medium hover:underline"
              >
                +1 (800) 555-1234
              </a>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <FiMapPin className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Visit Us</h3>
              </div>
              <p className="text-gray-600 mb-2">Our office is open weekdays.</p>
              <p className="text-gray-800 font-medium">
                123 Printer Lane, Tech City, TC 90210
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={item}
            className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="Describe your printer issue..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
              >
                <FiSend className="text-lg" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Integration */}
        <motion.div
          variants={item}
          className="mt-16 rounded-xl overflow-hidden shadow-xl border border-gray-200"
        >
          <div className="h-80 w-full bg-gray-200 relative">
            {/* Replace with actual Google Maps iframe */}
            <Image
              src="/map.png" // Replace with your map image
              alt="InkCures Office Location"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
              <FiMapPin className="text-red-500 inline mr-2" />
              <span className="font-medium">InkCures Headquarters</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    <FixItSection/>
    </>
  );
};

export default ContactUs;
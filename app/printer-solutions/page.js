// components/PrinterSolutions.js
"use client"
import { motion } from "framer-motion";
import { FiPrinter, FiAlertCircle, FiCheckCircle, FiArrowRight, FiSearch } from "react-icons/fi";
import Image from "next/image";
import FixItSection from "../Components/FixItSection";
import Blog from "../Components/Blog";
import Navbar from "../Components/Navbar";

const PrinterSolutions = () => {
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

  // Printer solutions data
  const solutions = [
    {
      id: 1,
      title: "Printer Not Responding",
      steps: [
        "Check power and cable connections",
        "Restart your printer and computer",
        "Update printer drivers",
        "Clear print queue"
      ],
      image: "/solution1.jpg",
      difficulty: "Easy",
      time: "5 mins"
    },
    {
      id: 2,
      title: "Poor Print Quality",
      steps: [
        "Run printer head cleaning utility",
        "Check ink/toner levels",
        "Align printer heads",
        "Use high-quality paper"
      ],
      image: "/solution2.jpg",
      difficulty: "Medium",
      time: "10 mins"
    },
    {
      id: 3,
      title: "Paper Jams",
      steps: [
        "Turn off and unplug printer",
        "Open access doors carefully",
        "Remove jammed paper slowly",
        "Check for torn pieces"
      ],
      image: "/solution6.jpg",
      difficulty: "Medium",
      time: "15 mins"
    },
    {
      id: 4,
      title: "Wireless Connection Issues",
      steps: [
        "Restart router and printer",
        "Check network settings",
        "Reinstall printer software",
        "Move printer closer to router"
      ],
      image: "/solution3.jpg",
      difficulty: "Hard",
      time: "20 mins"
    },
    {
      id: 5,
      title: "Printer Offline Error",
      steps: [
        "Check USB/Wi-Fi connection",
        "Set as default printer",
        "Restart print spooler service",
        "Reinstall drivers if needed"
      ],
      image: "/solution4.jpg",
      difficulty: "Medium",
      time: "10 mins"
    },
    {
      id: 6,
      title: "Ink Cartridge Problems",
      steps: [
        "Reseat cartridges properly",
        "Clean contacts with lint-free cloth",
        "Check for protective tape",
        "Replace if expired"
      ],
      image: "/solution5.jpg",
      difficulty: "Easy",
      time: "7 mins"
    }
  ];

  const brands = ["HP", "Canon", "Epson", "Brother", "Lexmark", "Samsung"];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-indigo-100 opacity-15 blur-3xl" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-sm font-semibold text-indigo-600 tracking-wider mb-3">
            PRINTER SOLUTIONS
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Fix Your Printer <span className="text-indigo-600">Step by Step</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Easy-to-follow guides to solve common printer issues quickly and effectively.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div variants={item} className="mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Search printer issues..."
                />
              </div>
              <select className="block w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>All Brands</option>
                {brands.map((brand) => (
                  <option key={brand}>{brand}</option>
                ))}
              </select>
              <select className="block w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>All Difficulty</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-indigo-600 text-white px-3 py-1 text-sm font-medium">
                  {solution.difficulty} • {solution.time}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FiPrinter className="text-indigo-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                </div>
                
                {/* Steps */}
                <div className="space-y-3 mb-5">
                  {solution.steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FiCheckCircle className="text-green-500 mr-2" />
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-colors">
                  View Detailed Guide <FiArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Section */}
        {/* <motion.div 
          variants={item}
          className="mt-16 bg-[#1110232] rounded-xl p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <div className="flex items-center mb-3">
                <FiAlertCircle className="text-white mr-2" size={24} />
                <h3 className="text-2xl font-bold">Emergency Printer Help?</h3>
              </div>
              <p className="mb-4 text-red-100">
                Can't fix it yourself? Our certified technicians are available 24/7 for immediate assistance.
              </p>
              <button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Connect With Printer Expert Now
              </button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-40 h-40">
                <Image
                  src="/images/support-agent.png"
                  alt="Printer Support"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Printer Brands Section */}
        {/* <motion.div variants={item} className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Solutions for All Major Brands</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <div key={brand} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center justify-center">
                <Image
                  src={`/solution3.jpg/brands/${brand.toLowerCase()}-logo.png`}
                  alt={`${brand} logo`}
                  width={120}
                  height={60}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </motion.div> */}
      </motion.div>
    </div>
    <Blog/>
    <FixItSection/>
    </>
  );
};

export default PrinterSolutions;
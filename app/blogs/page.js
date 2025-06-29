// components/BlogPage.js
"use client"
import { motion } from "framer-motion";
import { FiCalendar, FiUser, FiArrowRight, FiSearch, FiTag } from "react-icons/fi";
import Image from "next/image";
import Blog from "../Components/Blog";
import FixItSection from "../Components/FixItSection";
import Navbar from "../Components/Navbar";

const BlogPage = () => {
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

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "10 Common Printer Problems and How to Fix Them",
      excerpt: "Learn how to troubleshoot the most frequent printer issues with our step-by-step guide.",
      date: "May 15, 2023",
      author: "Sarah Johnson",
      category: "Troubleshooting",
      image: "/service10.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Ink vs Toner: Which is Right for Your Business?",
      excerpt: "Discover the key differences between ink and toner printers to make the best choice for your office.",
      date: "April 28, 2023",
      author: "Michael Chen",
      category: "Buying Guide",
      image: "/blog3.jpg",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Printer Maintenance",
      excerpt: "Extend your printer's lifespan with these essential maintenance tips every owner should know.",
      date: "April 10, 2023",
      author: "David Wilson",
      category: "Maintenance",
      image: "/colorprinter.jpg",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Wireless Printing: Setup and Troubleshooting",
      excerpt: "Solve common wireless printing issues and learn how to set up your printer for seamless connectivity.",
      date: "March 22, 2023",
      author: "Emily Rodriguez",
      category: "Technology",
      image: "/blog1.jpg",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Eco-Friendly Printing: Save Money and the Environment",
      excerpt: "Discover how to reduce your printing costs while being environmentally conscious.",
      date: "March 5, 2023",
      author: "James Peterson",
      category: "Sustainability",
      image: "/allinone.jpg",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "The Future of 3D Printing in Home Offices",
      excerpt: "How 3D printing technology is evolving to meet the needs of modern home offices.",
      date: "February 18, 2023",
      author: "Lisa Wong",
      category: "Innovation",
      image: "/threed.jpg",
      readTime: "9 min read"
    }
  ];

  const categories = [
    "All Topics",
    "Troubleshooting",
    "Buying Guide",
    "Maintenance",
    "Technology",
    "Innovation",
    "Sustainability"
  ];

  const popularTags = [
    "Printer Repair",
    "Ink Cartridges",
    "Wireless Setup",
    "Cost Saving",
    "Product Reviews",
    "Office Printing",
    "DIY Fixes"
  ];

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
            INKCURES BLOG
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Printer <span className="text-indigo-600">Knowledge Hub</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert tips, troubleshooting guides, and the latest trends in printing technology.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
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
                  placeholder="Search articles..."
                />
              </div>
              <select className="block w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <motion.div variants={item} className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="flex items-center mr-4">
                        <FiCalendar className="mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <FiUser className="mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <button className="text-indigo-600 font-medium flex items-center hover:underline">
                        Read More <FiArrowRight className="ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={item} className="lg:w-1/3 space-y-8">
            {/* About Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About InkCures Blog</h3>
              <p className="text-gray-600 mb-4">
                Our blog provides expert advice on printer maintenance, troubleshooting, and the latest printing technologies to help you get the most out of your devices.
              </p>
              <button className="text-indigo-600 font-medium flex items-center hover:underline">
                Learn More About Us <FiArrowRight className="ml-1" />
              </button>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-indigo-100 hover:text-indigo-800 transition-colors"
                  >
                    <FiTag className="mr-1" size={14} />
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="mb-4 opacity-90">
                Subscribe to our newsletter for the latest printer tips and exclusive offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  className="flex-grow px-4 py-2 rounded-l-lg border-0 focus:ring-2 focus:ring-white"
                  placeholder="Your email"
                />
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-r-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
    <Blog/>
    <FixItSection/>

    </>
  );
};

export default BlogPage;
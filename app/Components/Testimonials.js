// import React from 'react';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Chris L.",
//       location: "Orlando",
//       feedback: "Pages were printing too slow and I didn't know why. Their performance tips actually worked—huge help!",
//       rating: 5,
//     },
//     {
//       name: "Megan R.",
//       location: "Denver",
//       feedback: "The blog on mobile printing issues solved the problem I'd been stuck on for days. Great resource!",
//       rating: 5,
//     },
//   ];

//   return (
//     <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center">
//           <p className="text-sm text-gray-500 uppercase tracking-wide">Our Testimonials</p>
//           <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Our Customer Feedbacks</h2>
//           <div className="flex justify-end mt-4">
//             <span className="text-sm text-gray-500">04 / 05</span>
//           </div>
//         </div>
//         <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//               {index === 0 && (
//                 <div className="flex justify-center mb-4">
//                   <img
//                     className="w-32 h-32 rounded-full object-cover"
//                     src="https://via.placeholder.com/128"
//                     alt="Customer"
//                   />
//                 </div>
//               )}
//               <div className="text-center">
//                 <p className="text-gray-900 font-medium">{testimonial.name}</p>
//                 <p className="text-gray-500 text-sm">{testimonial.location}</p>
//                 <p className="mt-2 text-gray-600">{testimonial.feedback}</p>
//                 <div className="mt-4 flex justify-center">
//                   {Array.from({ length: testimonial.rating }, (_, i) => (
//                     <span key={i} className="text-yellow-400">★</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


// pages/index.js or components/Testimonials.js




'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Chris L.',
    location: 'Orlando, FL',
    message: 'Pages were printing too slow and I didn\'t know why. Their performance tips actually worked—huge help!',
    rating: 5,
    image: '/men1.avif',
  },
  {
    name: 'Megan R.',
    location: 'Denver, CO',
    message: 'The blog on mobile printing issues solved the problem I\'d been stuck on for days. Great resource!',
    rating: 5,
    image: '/men3.avif',
  },
  {
    name: 'Daniel K.',
    location: 'Austin, TX',
    message: 'Support was quick to respond and helped me troubleshoot in no time. Fantastic experience.',
    rating: 5,
    image: '/men2.avif',
  },
  {
    name: 'Sophie M.',
    location: 'Seattle, WA',
    message: 'User-friendly interface and great value. I would recommend this to everyone I know!',
    rating: 5,
    image: '/women1.jpg',
  },
  {
    name: 'Leo B.',
    location: 'Chicago, IL',
    message: 'Smooth service and outstanding documentation. Saved me a lot of time!',
    rating: 5,
    image: '/women2.png',
  },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentItems = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs text-blue-600 tracking-widest font-semibold mb-2 uppercase">
          Customer Voices
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-0">
            What Our Customers Say
          </h2>
          <div className="flex items-center gap-4">
            <button
              className="bg-white hover:bg-gray-100 border border-gray-200 p-3 rounded-full shadow-sm transition-all duration-300"
              onClick={handlePrev}
              aria-label="Previous testimonials"
            >
              <ArrowLeft size={18} className="text-gray-700" />
            </button>
            <span className="font-semibold text-gray-700">
              <span className="text-blue-600">0{currentPage + 1}</span> / 0{totalPages}
            </span>
            <button
              className="bg-white hover:bg-gray-100 border border-gray-200 p-3 rounded-full shadow-sm transition-all duration-300"
              onClick={handleNext}
              aria-label="Next testimonials"
            >
              <ArrowRight size={18} className="text-gray-700" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/3 flex justify-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/customer.jpg"
                fill
                alt="Happy customer"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium">Join 5,000+ satisfied customers</p>
                <h3 className="text-xl font-bold mt-1">Your Success Story Could Be Next</h3>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
                      {item.image && (
                        <Image
                          src={item.image}
                          width={48}
                          height={48}
                          alt={item.name}
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{item.message}"</p>
                  <div className="flex gap-1 text-yellow-400">
                    {Array(item.rating)
                      .fill(0)
                      .map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
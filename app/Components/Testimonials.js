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
    location: 'Orlando',
    message:
      'Pages were printing too slow and I didn’t know why. Their performance tips actually worked—huge help!',
    rating: 5,
    image: '/man-ok.png',
  },
  {
    name: 'Megan R.',
    location: 'Denver',
    message:
      'The blog on mobile printing issues solved the problem I’d been stuck on for days. Great resource!',
    rating: 5,
    image: '',
  },
  {
    name: 'Daniel K.',
    location: 'Austin',
    message:
      'Support was quick to respond and helped me troubleshoot in no time. Fantastic experience.',
    rating: 5,
    image: '',
  },
  {
    name: 'Sophie M.',
    location: 'Seattle',
    message:
      'User-friendly interface and great value. I would recommend this to everyone I know!',
    rating: 5,
    image: '',
  },
  {
    name: 'Leo B.',
    location: 'Chicago',
    message:
      'Smooth service and outstanding documentation. Saved me a lot of time!',
    rating: 5,
    image: '',
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
    <div className="bg-gray-50 py-12 px-4 sm:px-8 md:px-16">
      <div className="text-sm text-gray-500 tracking-widest font-semibold mb-2">
        OUR TESTIMONIALS
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Our Customer Feedbacks
        </h2>
        <div className="flex items-center gap-4">
          <button
            className="bg-white border p-2 rounded-full"
            onClick={handlePrev}
          >
            <ArrowLeft size={16} />
          </button>
          <span className="font-semibold">
            0{currentPage + 1} / 0{totalPages}
          </span>
          <button
            className="bg-white border p-2 rounded-full"
            onClick={handleNext}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src="/man-ok.png"
            width={280}
            height={280}
            alt="Customer"
            className="rounded-xl object-cover"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex gap-6"
          >
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.location}</p>
                <p className="text-sm text-gray-700 mb-4">“{item.message}”</p>
                <div className="flex gap-1">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
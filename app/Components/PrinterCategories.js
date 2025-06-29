// 'use client';

// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const categories = [
//   {
//     name: '3D Printer',
//     image: '/printers/3d.png',
//     description: 'Create intricate 3D models with precision technology',
//     highlight: 'Precision Printing'
//   },
//   {
//     name: 'Laser Printer',
//     image: '/laser.jpg',
//     description: 'Professional quality at lightning speeds',
//     highlight: 'Blazing Fast'
//   },
//   {
//     name: 'Super Tank Printer',
//     image: '/printers/supertank.png',
//     description: 'Massive ink capacity for high-volume needs',
//     highlight: 'High Capacity'
//   },
//   {
//     name: 'All In One Printer',
//     image: '/printers/allinone.png',
//     description: 'Print, scan, copy and fax in one device',
//     highlight: 'Multifunctional'
//   },
//   {
//     name: 'Photo Printer',
//     image: '/printers/photo.png',
//     description: 'Studio-quality photo prints at home',
//     highlight: 'Vibrant Colors'
//   },
//   {
//     name: 'Portable Printer',
//     image: '/printers/portable.png',
//     description: 'Print anywhere, anytime with compact design',
//     highlight: 'On-the-Go'
//   },
//   {
//     name: 'Industrial Printer',
//     image: '/printers/industrial.png',
//     description: 'Heavy-duty printing for commercial needs',
//     highlight: 'Powerhouse'
//   },
//   {
//     name: 'Eco Printer',
//     image: '/printers/eco.png',
//     description: 'Energy-efficient and sustainable printing',
//     highlight: 'Earth-Friendly'
//   }
// ];

// export default function PrinterCategories() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState('right');
//   const [isHovered, setIsHovered] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);

//   useEffect(() => {
//     if (isHovered || isDragging) return;

//     const interval = setInterval(() => {
//       setDirection('right');
//       setCurrentIndex((prev) => (prev + 1) % categories.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [isHovered, isDragging]);

//   const nextSlide = () => {
//     setDirection('right');
//     setCurrentIndex((prev) => (prev + 1) % categories.length);
//   };

//   const prevSlide = () => {
//     setDirection('left');
//     setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
//   };

//   const goToSlide = (index) => {
//     setDirection(index > currentIndex ? 'right' : 'left');
//     setCurrentIndex(index);
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction === 'right' ? '100%' : '-100%',
//       opacity: 0.5,
//       scale: 0.95
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         x: { type: 'spring', stiffness: 300, damping: 30 },
//         opacity: { duration: 0.3 },
//         scale: { duration: 0.2 }
//       }
//     },
//     exit: (direction) => ({
//       x: direction === 'right' ? '-100%' : '100%',
//       opacity: 0.5,
//       scale: 0.95,
//       transition: {
//         x: { type: 'spring', stiffness: 300, damping: 30 },
//         opacity: { duration: 0.3 },
//         scale: { duration: 0.2 }
//       }
//     })
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
//           Different Printers, One Solution Hub
//         </h4>
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Premium Printer
//           </span>{' '}
//           Collection
//         </h2>
//         <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
//           Discover our cutting-edge printers designed for every need and budget
//         </p>
//       </motion.div>

//       {/* Slider Container */}
//       <div 
//         className="relative overflow-hidden h-[500px] md:h-[450px] w-full"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <AnimatePresence custom={direction} initial={false}>
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragStart={() => setIsDragging(true)}
//             onDragEnd={(e, { offset, velocity }) => {
//               setIsDragging(false);
//               if (offset.x > 100) {
//                 prevSlide();
//               } else if (offset.x < -100) {
//                 nextSlide();
//               }
//             }}
//             className="absolute inset-0 bg-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-center gap-8 cursor-grab active:cursor-grabbing"
//           >
//             <div className="relative w-full md:w-1/2 h-64 md:h-80 flex-shrink-0">
//               <Image
//                 src={categories[currentIndex].image}
//                 alt={categories[currentIndex].name}
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>

//             <div className="text-left space-y-4">
//               <div className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
//                 {categories[currentIndex].highlight}
//               </div>
//               <h3 className="text-3xl font-bold text-gray-900">
//                 {categories[currentIndex].name}
//               </h3>
//               <p className="text-lg text-gray-600">
//                 {categories[currentIndex].description}
//               </p>
//               <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
//                 Explore Features
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
//           aria-label="Previous slide"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
//           aria-label="Next slide"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>

//       {/* Dots Pagination */}
//       <div className="flex justify-center mt-8 space-x-2">
//         {categories.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => goToSlide(idx)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    {
        name: '3D Printer',
        image: '/threed.jpg',
        highlight: 'Precision Printing'
    },
    {
        name: 'Laser Printer',
        image: '/laser.jpg',
        highlight: 'Blazing Fast'
    },
    {
        name: 'Super Tank Printer',
        image: '/super.jpg',
        highlight: 'High Capacity'
    },
    {
        name: 'All In One Printer',
        image: '/allinone.jpg',
        highlight: 'Multifunctional'
    }
];

export default function PrinterCategories() {
    const [currentSet, setCurrentSet] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Rotate through different sets of printers
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setCurrentSet((prev) => (prev + 1) % 3); // 3 different sets to cycle through
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    // Get current set of printers to display
    const getCurrentPrinters = () => {
        const rotated = [...categories];
        // Rotate array to show different "featured" printers
        return rotated.slice(currentSet).concat(rotated.slice(0, currentSet));
    };

    return (
        <div className="max-w-7xl mx-auto py-20 px-4 text-center">
            <h4 className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                Different Printers,
                One Solution Hub
            </h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">
                    Printer
                </span> Categories
            </h2>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {getCurrentPrinters().map((item, idx) => (
                    <motion.div
                        key={`${currentSet}-${idx}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-gradient-to-b from-[#f6f8ff] to-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <div className="relative w-full h-48 mb-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`img-${currentSet}-${idx}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full flex items-center justify-center"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={180}
                                        height={180}
                                        className="object-contain"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {item.name}
                        </h3>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
                            {item.highlight}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Dots Pagination */}
            <div className="flex justify-center mt-10 space-x-2">
                {[0, 1, 2].map((dot) => (
                    <button
                        key={dot}
                        onClick={() => setCurrentSet(dot)}
                        className={`w-3 h-3 rounded-full transition-all ${dot === currentSet
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                                : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}


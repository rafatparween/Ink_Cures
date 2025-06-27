// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//       <header className="text-center">
//         <h1 className="text-xl font-medium text-gray-600">Printer Solutions</h1>
//         <h2 className="text-5xl font-bold text-gray-900 mt-2">Service We Provide</h2>
//       </header>
//       <main className="flex flex-wrap justify-center gap-8 mt-10 px-4">
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/printer-icon.svg" alt="DIY Fixes" width={50} height={50} />
//           <h3 className="text-xl font-semibold text-gray-800 mt-4">Step-by-Step DIY Fixes</h3>
//           <p className="text-gray-600 mt-2">Clear guides to handle issues like printing errors, paper jams, and more—right from home.</p>
//         </div>
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/person-with-printer.jpg" alt="Support" width={150} height={200} />
//         </div>
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/wifi-icon.svg" alt="Wi-Fi & Connectivity Help" width={50} height={50} />
//           <h3 className="text-xl font-semibold text-gray-800 mt-4">Wi-Fi & Connectivity Help</h3>
//           <p className="text-gray-600 mt-2">Easy solutions for reconnecting printers to your home network or mobile devices.</p>
//         </div>
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/scanner.jpg" alt="Maintenance" width={150} height={200} />
//         </div>
//       </main>
//       <main className="flex flex-wrap justify-center gap-8 mt-10 px-4">
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/printer-icon.svg" alt="DIY Fixes" width={50} height={50} />
//           <h3 className="text-xl font-semibold text-gray-800 mt-4">Step-by-Step DIY Fixes</h3>
//           <p className="text-gray-600 mt-2">Clear guides to handle issues like printing errors, paper jams, and more—right from home.</p>
//         </div>
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/person-with-printer.jpg" alt="Support" width={150} height={200} />
//         </div>
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/wifi-icon.svg" alt="Wi-Fi & Connectivity Help" width={50} height={50} />
//           <h3 className="text-xl font-semibold text-gray-800 mt-4">Wi-Fi & Connectivity Help</h3>
//           <p className="text-gray-600 mt-2">Easy solutions for reconnecting printers to your home network or mobile devices.</p>
//         </div>
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/scanner.jpg" alt="Maintenance" width={150} height={200} />
//         </div>
//       </main>
//       <main className="flex flex-wrap justify-center gap-8 mt-10 px-4">
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/printer-icon.svg" alt="DIY Fixes" width={50} height={50} />
//           <h3 className="text-xl font-semibold text-gray-800 mt-4">Step-by-Step DIY Fixes</h3>
//           <p className="text-gray-600 mt-2">Clear guides to handle issues like printing errors, paper jams, and more—right from home.</p>
//         </div>
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/person-with-printer.jpg" alt="Support" width={150} height={200} />
//         </div>
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/wifi-icon.svg" alt="Wi-Fi & Connectivity Help" width={50} height={50} />
//           <h3 className="text-xl font-semibold text-gray-800 mt-4">Wi-Fi & Connectivity Help</h3>
//           <p className="text-gray-600 mt-2">Easy solutions for reconnecting printers to your home network or mobile devices.</p>
//         </div>
//         <div className="w-64 h-80 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
//           <Image src="/scanner.jpg" alt="Maintenance" width={150} height={200} />
//         </div>
//       </main>
      
//     </div>
//   );
// }


// "use client"
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import Head from 'next/head';

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   },
//   hover: {
//     y: -5,
//     scale: 1.02,
//     transition: {
//       duration: 0.2
//     }
//   }
// };

// const ServiceCard = ({ icon, title, description, image, isImageCard = false }) => (
//   <motion.div
//     className={`w-full sm:w-64 h-80 bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-6 overflow-hidden ${isImageCard ? 'p-0' : ''}`}
//     variants={itemVariants}
//     whileHover="hover"
//   >
//     {isImageCard ? (
//       <div className="relative w-full h-full">
//         <Image 
//           src={image || ''} 
//           alt={title || ''}
//           fill
//           className="object-cover rounded-xl"
//           sizes="(max-width: 640px) 100vw, 256px"
//         />
//       </div>
//     ) : (
//       <>
//         <div className="bg-blue-50 p-4 rounded-full">
//           <Image 
//             src={icon || ''} 
//             alt={title || ''}
//             width={40}
//             height={40}
//             className="text-blue-500"
//           />
//         </div>
//         <h3 className="text-xl font-semibold text-gray-800 mt-6">{title}</h3>
//         <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>
//       </>
//     )}
//   </motion.div>
// );

// export default function Home() {
//   const services = [
//     {
//       icon: "/printer-icon.svg",
//       title: "Step-by-Step DIY Fixes",
//       description: "Clear guides to handle issues like printing errors, paper jams, and more—right from home."
//     },
//     {
//       image: "/person-with-printer.jpg",
//       isImageCard: true
//     },
//     {
//       icon: "/wifi-icon.svg",
//       title: "Wi-Fi & Connectivity Help",
//       description: "Easy solutions for reconnecting printers to your home network or mobile devices."
//     },
//     {
//       image: "/scanner.jpg",
//       isImageCard: true
//     },
//     {
//       icon: "/printer-icon.svg",
//       title: "Printer Maintenance",
//       description: "Keep your printer in top condition with our maintenance guides."
//     },
//     {
//       image: "/ink-refill.jpg",
//       isImageCard: true
//     },
//     {
//       icon: "/support-icon.svg",
//       title: "24/7 Support",
//       description: "Our experts are always ready to help with any printer issues."
//     },
//     {
//       image: "/office-printing.jpg",
//       isImageCard: true
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>Printer Solutions | Services We Provide</title>
//         <meta name="description" content="Professional printer solutions for home and office. DIY fixes, connectivity help, and maintenance services." />
//       </Head>
      
//       <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="max-w-7xl mx-auto"
//         >
//           <motion.header 
//             className="text-center mb-16"
//             variants={itemVariants}
//           >
//             <motion.p 
//               className="text-lg font-medium text-blue-600"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//             >
//               Printer Solutions
//             </motion.p>
//             <motion.h1
//               className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Services We Provide
//             </motion.h1>
//             <motion.div
//               className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             />
//           </motion.header>

//           <motion.div 
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
//             variants={containerVariants}
//           >
//             {services.map((service, index) => (
//               <ServiceCard
//                 key={index}
//                 icon={service.icon}
//                 title={service.title}
//                 description={service.description}
//                 image={service.image}
//                 isImageCard={service.isImageCard}
//               />
//             ))}
//           </motion.div>

//           <motion.div
//             className="mt-20 text-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-1">
//               Get Started Today
//             </button>
//             <p className="text-gray-500 mt-4">Need immediate help? Call us at 1-800-PRINTER</p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </>
//   );
// }



"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.2
    }
  }
};

const ServiceCard = ({ icon, title, description, image, isImageCard = false }) => (
  <motion.div
    className={`w-full sm:w-72 h-80 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center p-6 overflow-hidden transition-all ${isImageCard ? 'p-0' : 'hover:border-blue-100'}`}
    variants={itemVariants}
    whileHover="hover"
  >
    {isImageCard ? (
      <div className="relative w-full h-full group">
        <Image 
          src={image || ''} 
          alt={title || ''}
          fill
          className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, 288px"
        />
        <div className="absolute inset-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl" />
      </div>
    ) : (
      <>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl shadow-inner">
          <Image 
            src={icon || ''} 
            alt={title || ''}
            width={100}
            height={100}
            className="text-blue-500"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mt-6">{title}</h3>
        <p className="text-gray-500 mt-3 leading-relaxed text-sm">{description}</p>
      </>
    )}
  </motion.div>
);

export default function Home() {
  const services = [
    {
      icon: "/service1.png",
      title: "Step-by-Step DIY Fixes",
      description: "Clear guides to handle issues like printing errors, paper jams, and more—right from home."
    },
    {
      image: "/service2.jpg",
      isImageCard: true
    },
    {
      icon: "/service3.png",
      title: "Wi-Fi & Connectivity Help",
      description: "Easy solutions for reconnecting printers to your home network or mobile devices."
    },
    {
      image: "/service4.jpg",
      isImageCard: true
    },
    {
      image: "/service5.jpg",
      isImageCard: true
    },
    {
      icon: "/service6.png",
      title: "Print Quality Troubleshooting",
      description: "Tips to improve faded, blurry, or uneven print results without needing external help."
      
    },
    {
      image: "/service7.jpg",
      isImageCard: true
    },
    {
       icon: "/service8.png",
      title: "Ink Cartridge & Alignment Checks",
      description: "Simple instructions to check ink levels, realign cartridges, and avoid printing issues."
    },
    {
      icon: "/service9.png",
      title: "Performance & Speed Tips",
      description: "Guidance to boost your printer’s performance and reduce lag or slow printing times."
    },
    {
      image: "/service10.jpg",
      isImageCard: true
    },
    {
      icon: "/service11.png",
      title: "Error Code Explanations",
      description: "Understand what those blinking lights or messages mean—and what you can do next."
    },
    {
      image: "/service12.jpg",
      isImageCard: true
    }
    
  ];

  return (
    <>
      <Head>
        <title>Printer Solutions | Services We Provide</title>
        <meta name="description" content="Professional printer solutions for home and office. DIY fixes, connectivity help, and maintenance services." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.header 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg font-semibold text-blue-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Printer Solutions
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Services We Provide
            </motion.h1>
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-200 mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.header>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                isImageCard={service.isImageCard}
              />
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button 
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.button>
            <p className="text-gray-500 mt-5 text-sm">Need immediate help? <span className="text-blue-500 font-medium">Call us at 1-800-PRINTER</span></p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
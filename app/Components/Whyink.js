// import Image from 'next/image';

// export default function Whyink() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
//       <main className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-6 py-16 gap-12">
//         <div className="w-full lg:w-1/2 relative">
//           <div className="rounded-3xl overflow-hidden shadow-2xl">
//             <Image 
//               src="/printer-image.jpg" 
//               alt="Printer" 
//               width={600} 
//               height={400} 
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg font-bold text-lg">
//             Trusted by thousands
//           </div>
//         </div>
        
//         <div className="w-full lg:w-1/2 space-y-6">
//           <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
//             Why Ink Cures
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//             Solve Printer Problems <span className="text-blue-600">Effortlessly</span>
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Ink Cures is your go-to guide for solving everyday printer problems on your own. We break down complex issues into simple, easy-to-understand steps.
//           </p>
          
//           <div className="space-y-5 mt-8">
//             <div className="space-y-2">
//               <div className="flex justify-between text-sm font-medium text-gray-600">
//                 <span>MONTHLY VISITORS</span>
//                 <span>12,000+</span>
//               </div>
//               <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" 
//                   style={{ width: '100%' }}
//                 ></div>
//               </div>
//             </div>
            
//             <div className="space-y-2">
//               <div className="flex justify-between text-sm font-medium text-gray-600">
//                 <span>ISSUES SOLVED BY READERS</span>
//                 <span>85%</span>
//               </div>
//               <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" 
//                   style={{ width: '85%' }}
//                 ></div>
//               </div>
//             </div>
//           </div>
          
//           <button className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300 transform hover:scale-105">
//             Start Solving Now
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }


"use client";

import Image from "next/image";

const WhyInkCures = () => {
  return (
    <div className="w-full bg-white flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16 gap-10">
      {/* Left Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/colorprinter.jpg" // Make sure this image exists in public folder
          alt="Printer"
          width={600}
          height={400}
          className="rounded-md object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-2">Why Ink Cures</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Why Thousands Rely <br /> on <span className="text-gray-800">Ink Cures</span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-xl">
          Ink Cures is your go-to guide for solving everyday printer problems on your own. We break down complex issues into simple, easy-to-understand steps. Whether it’s a blank page, paper jam, or slow printing, our guides are built for real users.
        </p>

        {/* Stats */}
        <div className="space-y-6">
          <div className="flex justify-between items-center px-6 py-4 bg-gray-100 rounded-full w-full max-w-xl">
            <p className="text-sm font-semibold text-gray-700">MONTHLY VISITORS</p>
            <p className="text-lg font-bold text-gray-900">12,000+</p>
          </div>
          <div className="flex justify-between items-center px-6 py-4 bg-gray-100 rounded-full w-full max-w-xl">
            <p className="text-sm font-semibold text-gray-700">ISSUES SOLVED BY READERS</p>
            <p className="text-lg font-bold text-gray-900">85%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyInkCures;

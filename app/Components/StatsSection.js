// "use client";

// import Image from "next/image";

// const StatsSection = () => {
//   return (
//     <div className="w-full bg-white py-12 px-4">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
//         {/* ITEM 1 */}
//         <div className="flex flex-col items-center text-center relative md:px-10">
//           <div className="w-24 h-24 flex items-center justify-center rounded-full border-[6px] border-gray-100 mb-4">
//             <Image
//               src="/blog-icon.png"
//               alt="Total Blog Reads"
//               width={40}
//               height={40}
//             />
//           </div>
//           <p className="text-3xl font-bold text-gray-900">450+</p>
//           <p className="text-sm font-medium text-gray-500 mt-1 tracking-wide uppercase">
//             Total Blog Reads
//           </p>

//           {/* Divider */}
//           <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r border-gray-300" />
//         </div>

//         {/* ITEM 2 */}
//         <div className="flex flex-col items-center text-center relative md:px-10">
//           <div className="w-24 h-24 flex items-center justify-center rounded-full border-[6px] border-gray-100 mb-4">
//             <Image
//               src="/return-visitors-icon.png"
//               alt="Return Visitors"
//               width={40}
//               height={40}
//             />
//           </div>
//           <p className="text-3xl font-bold text-gray-900">18K+</p>
//           <p className="text-sm font-medium text-gray-500 mt-1 tracking-wide uppercase">
//             Return Visitors
//           </p>

//           {/* Divider */}
//           <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r border-gray-300" />
//         </div>

//         {/* ITEM 3 */}
//         <div className="flex flex-col items-center text-center md:px-10">
//           <div className="w-24 h-24 flex items-center justify-center rounded-full border-[6px] border-gray-100 mb-4">
//             <Image
//               src="/printer-issues-icon.png"
//               alt="Printer Issues Covered"
//               width={40}
//               height={40}
//             />
//           </div>
//           <p className="text-3xl font-bold text-gray-900">250+</p>
//           <p className="text-sm font-medium text-gray-500 mt-1 tracking-wide uppercase">
//             Printer Issues Covered
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsSection;


'use client';

import Image from 'next/image';

const stats = [
  {
    icon: '/circle1.png', // Replace with actual path
    number: '450+',
    label: 'TOTAL BLOG READS',
  },
  {
    icon: '/circle2.png', // Replace with actual path
    number: '18K+',
    label: 'RETURN VISITORS',
  },
  {
    icon: '/circle3.png', // Replace with actual path
    number: '250+',
    label: 'PRINTER ISSUES COVERED',
  },
];

export default function StatsSection() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gray-200">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-center text-center space-x-4 ${
            idx !== 0 && 'md:border-l md:pl-6 border-gray-300'
          }`}
        >
          <div className="relative w-[140px] h-[140px] mx-auto flex items-center justify-center ">
            <Image src={item.icon} alt={item.label} width={140} height={140} />
          </div>
          <div className="text-left">
            <div className="text-[48px] font-bold text-[#1C2539]">{item.number}</div>
            <div className="text-[16px] text-[#5D666F]">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}


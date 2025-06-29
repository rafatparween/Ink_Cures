// export default function SupportSearch() {
//     return (
//       <div className="flex flex-col items-center justify-center h-[30px] bg-white">
//         <h1 className="text-xl font-semibold mb-6 text-center text-black">
//           Search our support articles
//         </h1>
//         <div className="flex w-full max-w-xl rounded border border-gray-300 overflow-hidden shadow-sm">
//           <input
//             type="text"
//             placeholder="What can we help you with?"
//             className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
//           />
//           <button className="bg-gray-200 px-4 flex items-center justify-center">
//             <svg
//               className="h-5 w-5 text-gray-600"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     );
//   }
  

"use client"
import { useState } from "react";
import Diagnose from "./Digonose";
import Printerissue from "./Printerissue";


export default function SupportTabs() {
  const [activeTab, setActiveTab] = useState("diagnose");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Tabs */}
      <div className="flex gap-10 mt-16 text-lg font-medium">
        <button
          className={`flex items-center gap-2 ${
            activeTab === "diagnose" ? "text-blue-700 font-bold border-b-4 border-blue-700 pb-1" : "text-gray-700 hover:text-black"
          }`}
          onClick={() => setActiveTab("diagnose")}
        >
          <span className="text-2xl">🖥</span> Computer Issues
        </button>
        <button
          className={`flex items-center gap-2 ${
            activeTab === "printer" ? "text-blue-700 font-bold border-b-4 border-blue-700 pb-1" : "text-gray-700 hover:text-black"
          }`}
          onClick={() => setActiveTab("printer")}
        >
          <span className="text-2xl">🖨</span> Printer Issues
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="mt-10 w-full">
        {activeTab === "diagnose" && <Diagnose />}
        {activeTab === "printer" && <Printerissue />}
      </div>
    </div>
  );
}

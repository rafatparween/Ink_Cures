// import Image from "next/image";
// import { FaSearch, FaShoppingCart } from "react-icons/fa";

// export default function PageNavbar() {
//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
//       {/* Left - Logo & Nav */}
//       <div className="flex items-center space-x-10">
//         <Image src="/hplogo.png" alt="HP Logo" width={60} height={60} />
//         <div className="flex space-x-6 text-gray-700 font-medium text-lg">
//           <a href="#" className="hover:text-black">Explore</a>
//           <a href="#" className="hover:text-black">Shop</a>
//           <a href="#" className="hover:text-black">Support</a>
//         </div>
//       </div>

//       {/* Center - Search */}
//       <div className="flex items-center w-[400px] border border-gray-300 rounded px-4 py-1">
//         <input
//           type="text"
//           placeholder="Search HP Support"
//           className="w-full outline-none text-gray-700"
//         />
//         <FaSearch className="text-gray-500" />
//       </div>

//       {/* Right - Cart and Sign in */}
//       <div className="flex items-center space-x-4">
//         <FaShoppingCart className="text-gray-700 text-xl" />
//         <button className="bg-black text-white px-4 py-1 font-medium">
//           Sign in
//         </button>
//       </div>
//     </nav>
//   );
// }


// "use client"
// import Image from "next/image";
// import { useState } from "react";
// import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

// export default function PageNavbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);

//   return (
//     <>
//       {/* Desktop View - EXACTLY as you had it */}
//       <nav className="hidden md:flex items-center justify-between px-6 py-4 bg-white shadow">
//         <div className="flex items-center space-x-10">
//           {/* <Image src="/hplogo.png" alt="HP Logo" width={60} height={60} /> */}
//           <div className="flex space-x-6 text-gray-700 font-medium text-lg">
//             <a href="#" className="hover:text-black">Explore</a>
//             <a href="#" className="hover:text-black">Shop</a>
//             <a href="#" className="hover:text-black">Support</a>
//           </div>
//         </div>

//         <div className="flex items-center w-[400px] border border-gray-300 rounded px-4 py-1">
//           <input
//             type="text"
//             placeholder="Search HP Support"
//             className="w-full outline-none text-gray-700"
//           />
//           <FaSearch className="text-gray-500" />
//         </div>

//         <div className="flex items-center space-x-4">
//           <FaShoppingCart className="text-gray-700 text-xl" />
//           <button className="bg-black text-white px-4 py-1 font-medium">
//             Sign in
//           </button>
//         </div>
//       </nav>

//       {/* Mobile View */}
//       <nav className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow relative">
//         {/* Left: Menu Button + Logo */}
//         <div className="flex items-center space-x-4">
//           <button 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-gray-700 text-xl"
//           >
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//           <Image 
//             src="/hplogo.png" 
//             alt="HP Logo" 
//             width={48} 
//             height={48}
//           />
//         </div>

//         {/* Right: Search Icon + Cart + Sign In */}
//         <div className="flex items-center space-x-4">
//           <button 
//             onClick={() => setShowSearch(!showSearch)}
//             className="text-gray-700"
//           >
//             <FaSearch className="text-lg" />
//           </button>
//           <FaShoppingCart className="text-gray-700 text-lg" />
//           <button className="bg-black text-white px-3 py-1 text-sm font-medium">
//             Sign in
//           </button>
//         </div>

//         {/* Mobile Menu Slide-out */}
//         {isMenuOpen && (
//           <div className="absolute top-full left-0 w-64 bg-white shadow-lg z-50 border-t">
//             <div className="flex flex-col py-2">
//               <a href="#" className="px-4 py-3 text-gray-700 hover:bg-gray-100">Explore</a>
//               <a href="#" className="px-4 py-3 text-gray-700 hover:bg-gray-100">Shop</a>
//               <a href="#" className="px-4 py-3 text-gray-700 hover:bg-gray-100">Support</a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Mobile Search Bar - appears below navbar */}
//       {showSearch && (
//         <div className="md:hidden px-4 py-2 bg-white border-t border-b">
//           <div className="flex items-center w-full border border-gray-300 rounded px-3 py-1">
//             <input
//               type="text"
//               placeholder="Search HP Support"
//               className="w-full outline-none text-gray-700 text-sm"
//               autoFocus
//             />
//             <FaSearch className="text-gray-500 ml-2" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



// "use client"
// export default function PageNavbar() {
//   return (
//     <>
//       <div className="h-[50px] w-full bg-white"></div>
//     </>
//   );
// }



"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function PageNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleRedirect = () => {
    window.open("https://www.printersmartassistant.com/", "_blank");
  };

  return (
    <div className="flex flex-col items-center w-full ">
      {/* Navigation Bar - completely unchanged desktop view */}
      <nav className="bg-white text-black w-full">
        <div className="max-w-[90.33%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center h-16">
            {/* Mobile menu button - only visible on mobile */}
            <button
              className="md:hidden text-[#0C7173] text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiMenu />
            </button>

            {/* Your original desktop navigation - untouched */}
            <div className="hidden md:flex justify-between items-center w-full">
              {[
                "Ink Cures",
                // "Printer Setup",
                // "Scanner Setup",
                // "Support Home",
                // "Ink Cartridges Issue",
                // "Diagnostics",
                // "Business Support",
              ].map((item, index) => (
                <button 
                  key={index}
                  className="hover:text-gray-300 sm:text-base md:text-[30px] font-medium whitespace-nowrap px-3 text-[#0C71C3] text-[30px]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu - only visible on mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}
      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1C8DCEED] text-[#0C7173] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-o
        ut z-50 md:hidden`}
      >
        <div className="h-16 flex items-center justify-end pr-4">
          <button
            className="text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6">
          {[
            "Printer Offline",
            "Printer Setup",
            "Scanner Setup",
            "Support Home",
            "Ink Cartridges Issue",
            "Diagnostics",
            "Business Support",
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              className="block text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
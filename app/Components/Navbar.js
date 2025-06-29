'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from 'lucide-react'; // Optional icon library

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 ml-[92px] ">
          <Image
            src="/ink.png"
            alt="logo"
            width={200}
            height={35}
            className="object-contain"
            priority
          />
          {/* <span className="text-xl font-bold text-gray-900">INK CURES</span> */}
        </div>

        {/* Center: Menu items */}
        <div className="hidden md:flex space-x-10 text-[16px] font-semibold text-[#111032]">
          <a href="/#" className="hover:text-blue-700">Home</a>
          <a href="/about" className="hover:text-blue-700">About Us</a>
          <a href="/printer-solutions" className="hover:text-blue-700">Printer Solutions</a>
          <a href="/blogs" className="hover:text-blue-700">Blogs</a>
          <a href="/printer-computer" className="hover:text-blue-700">Printer / Computer</a>
          <a href="/contact" className="hover:text-blue-700">Contact Us</a>
        </div>

        {/* Right: Hamburger */}
        <div className="md:hidden bg-gray-100 p-2 rounded-xl cursor-pointer">
          <Menu className="h-5 w-5 text-gray-800" />
        </div>
      </div>
    </nav>
  );
}

'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Left: Text Logo */}
        <div className="flex items-center space-x-2 ml-[92px]">
          <span className="text-2xl font-bold text-[#111032]">Micro Hub Care</span>
        </div>

        {/* Center: Menu items (Desktop Only) */}
        <div className="hidden md:flex space-x-10 text-[16px] font-semibold text-[#111032]">
          <Link href="/#" className="hover:text-blue-700">Home</Link>
          <Link href="/about" className="hover:text-blue-700">About Us</Link>
          <Link href="/printer-solutions" className="hover:text-blue-700">Printer Solutions</Link>
          <Link href="/blogs" className="hover:text-blue-700">Blogs</Link>
          <Link href="/printer-computer" className="hover:text-blue-700">Printer / Computer</Link>
          <Link href="/contact" className="hover:text-blue-700">Contact Us</Link>
        </div>

        {/* Right: Hamburger (Mobile Only) */}
        <div
          className="md:hidden bg-gray-100 p-2 rounded-xl cursor-pointer ml-4"
          onClick={toggleMenu}
        >
          <Menu className="h-5 w-5 text-gray-800" />
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-bold text-[#111032]">Menu</span>
          <X
            className="h-6 w-6 text-gray-700 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <div className="flex flex-col space-y-6 p-6 text-[16px] font-semibold text-[#111032]">
          <Link href="/#" onClick={closeMenu} className="hover:text-blue-700">Home</Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-blue-700">About Us</Link>
          <Link href="/printer-solutions" onClick={closeMenu} className="hover:text-blue-700">Printer Solutions</Link>
          <Link href="/blogs" onClick={closeMenu} className="hover:text-blue-700">Blogs</Link>
          <Link href="/printer-computer" onClick={closeMenu} className="hover:text-blue-700">Printer / Computer</Link>
          <Link href="/contact" onClick={closeMenu} className="hover:text-blue-700">Contact Us</Link>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}


'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const PageFooter = () => {
  return (
    <footer className="bg-black text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand Name */}
          <div className="text-white font-bold">Hewlett Printers Solution</div>

          {/* Quick Links - Single Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/.." className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/service" className="hover:text-white transition-colors">Services</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/term" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Copyright - Tiny Text */}
        <div className="mt-4 pt-3 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()}Hewlett Printers Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;

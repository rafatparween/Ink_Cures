import { Mail, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        backgroundImage: "url('/footer.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-2xl font-bold tracking-tight">💠 INK CURES</div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            At Ink Cures, we simplify the way you handle printer problems. Our platform is built for everyday users who want quick, easy-to-follow solutions without the need for complicated tools or professional help.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-300">
        <li className="flex items-center gap-2">
          <ArrowRight size={14} />
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li className="flex items-center gap-2">
          <ArrowRight size={14} />
          <Link href="/about" className="hover:underline">About Us</Link>
        </li>
        <li className="flex items-center gap-2">
          <ArrowRight size={14} />
          <Link href="/printer-solutions" className="hover:underline">Printer Computer</Link>
        </li>
        <li className="flex items-center gap-2">
          <ArrowRight size={14} />
          <Link href="/blogs" className="hover:underline">Blogs</Link>
        </li>
        <li className="flex items-center gap-2">
          <ArrowRight size={14} />
          <Link href="/contact" className="hover:underline">Contact Us</Link>
        </li>
      </ul>
    </div>
          <div>
  <ul className="space-y-2 text-gray-300 pt-[33px]">
    <li className="flex items-center gap-2">
      <ArrowRight size={14} />
      <Link href="/" className="hover:text-white">FAQs</Link>
    </li>
    <li className="flex items-center gap-2">
      <ArrowRight size={14} />
      <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
    </li>
    <li className="flex items-center gap-2">
      <ArrowRight size={14} />
      <Link href="/#" className="hover:text-white">Cookie Policy</Link>
    </li>
    <li className="flex items-center gap-2">
      <ArrowRight size={14} />
      <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
    </li>
    <li className="flex items-center gap-2">
      <ArrowRight size={14} />
      <Link href="/terms-of-use" className="hover:text-white">Terms of Use</Link>
    </li>
  </ul>
</div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-700 p-2 rounded"><Mail size={16} /></div>
            <div>
              <p className="text-gray-300 text-sm font-medium">Work with us</p>
              <p className="text-gray-400 text-sm">info@inkcures.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-gray-700 p-2 rounded"><MapPin size={16} /></div>
            <div>
              <p className="text-gray-300 text-sm font-medium">Our Location</p>
              <p className="text-gray-400 text-sm">
                99 Wall Street #4790 New York,<br />
                NY 10005
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 text-gray-400 text-sm px-6 py-4 flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
        <p>Ink Cures – Copyright 2025. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

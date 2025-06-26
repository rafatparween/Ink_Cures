'use client'
import Image from 'next/image'

export default function Banner() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="w-full flex items-center px-4">
        {/* Left Text Content */}
        <div className="text-white ml-[92px] max-w-[1305px] space-y-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 2a1 1 0 00-.894.553l-4 8A1 1 0 001 11h3.382l-.723 2.447a1 1 0 001.894.606L6.618 11H10a1 1 0 00.894-1.447l-4-8A1 1 0 006 2z" />
              <path d="M13 16a1 1 0 011-1h3v-2a1 1 0 112 0v3a1 1 0 01-1 1h-4a1 1 0 01-1-1z" />
            </svg>
            <span className="text-[20px] font-medium">Built for Everyday Users</span>
          </div>

          <h1 className="text-[80px] font-bold leading-tight">
            Seamless Guidance <br /> for Printer Glitches
          </h1>
        <div className='w-[715px] mb-[53px]'>

          <p className="text-lg text-white/90">
            From paper jams to Wi-Fi glitches, Ink Cures offers clear, step-by-step guidance to help you get your printer back on track. No confusing jargon—just real solutions you can try at home.
          </p>
          </div>

          <div className="flex gap-6">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-[15px] hover:bg-[#20282D] hover:text-white transition">
              Explore Blogs
            </button>
            <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-[15px] hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
      </div>
    </div>
  )
}

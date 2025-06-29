'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Fix Printer Wi-Fi & Connection Issues at Home',
    image: '/blog1.jpg',
    category: 'Troubleshooting',
  },
  {
    id: 2,
    title: 'Fixing Faded, Blurry, or Patchy Prints—Made Easy',
    image: '/blog2.jpg',
    category: 'Print Quality',
  },
  {
    id: 3,
    title: 'Solving Ink Cartridge & Alignment Issues the DIY Way',
    image: '/blog3.jpg',
    category: 'Maintenance',
  },
  {
    id: 4,
    title: 'Best Printers for Students in 2025',
    image: '/blog4.jpg',
    category: 'Buying Guide',
  },
  {
    id: 5,
    title: 'How to Refill Ink Cartridges Without a Mess',
    image: '/blog5.jpg',
    category: 'Tips & Tricks',
  },
  {
    id: 6,
    title: 'Laser vs Inkjet: Which One is Right for You?',
    image: '/blog3.jpg',
    category: 'Comparison',
  },
];

export default function Blog() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let animationFrame;
    let offset = 0;

    const scroll = () => {
      if (track) {
        offset += 0.5;
        track.scrollLeft = offset;
        if (offset >= track.scrollWidth / 2) offset = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 px-4">
          <p className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">
            Knowledge Hub
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Printing Insights
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover expert tips, troubleshooting guides, and the latest trends in printing technology
          </p>
        </div>

        <div
          ref={trackRef}
          className="overflow-hidden whitespace-nowrap py-4"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <div className="flex gap-6 min-w-max px-4">
            {[...blogPosts, ...blogPosts].map((post, idx) => (
              <div
                key={idx}
                className="w-[300px] md:w-[340px] flex-shrink-0 bg-white p-5 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative rounded-xl overflow-hidden mb-5 aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold tracking-wider text-white bg-blue-600 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="flex items-center text-blue-600 font-medium group"
                  aria-label={`Read more about ${post.title}`}
                >
                  <span className="mr-2 group-hover:underline">Read Article</span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 px-4">
          <button className="px-6 py-2.5 md:px-8 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md transition-all duration-300 hover:shadow-lg text-sm md:text-base">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
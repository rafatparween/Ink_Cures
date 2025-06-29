'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  '/slider1.jpg',
  '/slider2.jpg',
  '/slider3.jpg',
  '/slider4.jpg',
  '/slider5.jpg',
  '/slider6.jpg',
  '/slider7.jpg',
  '/slider8.jpg',
  '/slider9.jpg',
   '/slider10.jpg',
  '/slider11.jpg',
  '/slider12.jpg',
  
];

export default function ImageSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? images.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 text-center">
      <p className="text-[18px] text-gray-500">Printers Power Every Space</p>
      <h2 className="text-[60px] font-bold text-gray-900 mt-2 mb-8">
        Across Homes, <br className="sm:hidden" />
        Offices & Beyond
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.slice(startIndex, startIndex + 3).map((img, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-sm"
          >
            <Image
              src={img}
              alt={`Slide ${idx + 1}`}
              width={500}
              height={350}
              className="object-cover w-full h-[350px]"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="p-2 border rounded-full hover:bg-gray-200"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="p-2 border rounded-full hover:bg-gray-200"
        >
          →
        </button>
      </div>
    </div>
  );
}

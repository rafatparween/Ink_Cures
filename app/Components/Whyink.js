import Image from 'next/image';

export default function Whyink() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <main className="flex items-center justify-between w-full max-w-6xl px-4 py-10">
        <div className="w-1/2">
          <Image src="/printer-image.jpg" alt="Printer" width={600} height={400} />
        </div>
        <div className="w-1/2 pl-10">
          <h1 className="text-lg font-medium text-gray-500">Why Ink Cures</h1>
          <h2 className="text-5xl font-bold text-gray-900 mt-2">Why Thousands Rely on Ink Cures</h2>
          <p className="text-gray-600 mt-4">— Ink Cures is your go-to guide for solving everyday printer problems on your own. We break down complex issues into simple, easy-to-understand steps. Whether it’s a blank page, paper jam, or slow printing, our guides are built for real users.</p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center bg-gray-100 rounded-full p-2">
              <span className="w-1/3 text-gray-600">MONTHLY VISITORS</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-6">
                <div className="bg-gray-300 h-6 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <span className="w-1/6 text-gray-600 ml-2">12,000+</span>
            </div>
            <div className="flex items-center bg-gray-100 rounded-full p-2">
              <span className="w-1/3 text-gray-600">ISSUES SOLVED BY READERS</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-6">
                <div className="bg-gray-300 h-6 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <span className="w-1/6 text-gray-600 ml-2">85%</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
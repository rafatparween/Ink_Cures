export default function FixItSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-24 px-6 md:px-16 flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-indigo-400 filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium shadow-sm">
            Printer Problem?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Ready to Fix It Yourself? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Just a Click Away
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Get instant access to our expert troubleshooting guides and fix your printer issues in minutes.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full">
          <div className="bg-white p-1 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <form className="flex flex-col sm:flex-row bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 text-white placeholder-blue-100 bg-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-semibold px-8 py-4 hover:bg-gray-50 transition-all duration-300 whitespace-nowrap flex items-center justify-center"
              >
                Connect With Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            We'll never share your email. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
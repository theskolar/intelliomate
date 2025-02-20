import React from "react";

const Awards = () => {
  return (
    <section className="bg-gradient-to-r from-black to-black text-white py-16 px-6 md:px-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-center text-[2rem]  font-Poppins text-[#473bf0]">
          🏆 Awards & Recognition
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Our excellence is recognized by the top industry leaders, ensuring
          that we deliver the best-in-class mobile and web development solutions
          globally.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
        {/* Clutch Card */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-1/2 border border-gray-700">
          <h3 className="text-2xl font-semibold mb-2">🌟 Clutch</h3>
          <p className="text-gray-400">
            Recognized for providing top technological support and cutting-edge
            solutions in mobile app development.
          </p>
          <button className="mt-5 px-5 py-2 text-sm font-medium rounded-lg bg-[#ffd700] text-black hover:bg-[#ffd700]">
            Learn More →
          </button>
        </div>

        {/* GoodFirms Card */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-1/2 border border-gray-700">
          <h3 className="text-2xl font-semibold mb-2">
            🏅 GoodFirms ⭐⭐⭐⭐⭐
          </h3>
          <p className="text-gray-400">
            Celebrated for outstanding and innovative mobile and web development
            solutions that enhance user experience.
          </p>
          <button className="mt-5 px-5 py-2 text-sm font-medium rounded-lg bg-white text-black hover:bg-white">
            Learn More →
          </button>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-12 overflow-hidden relative w-full h-16">
        <div className="absolute flex space-x-10 animate-marquee items-center">
          <img src="/designrush.png" alt="DesignRush" className="h-10" />
          <img src="/goodfirms.png" alt="GoodFirms" className="h-10" />
          <img src="/trustpilot.png" alt="TrustPilot" className="h-10" />
          <img src="/extract.png" alt="Extract" className="h-10" />
          {/* Duplicate for smooth scrolling */}
          <img src="/designrush.png" alt="DesignRush" className="h-10" />
          <img src="/goodfirms.png" alt="GoodFirms" className="h-10" />
          <img src="/trustpilot.png" alt="TrustPilot" className="h-10" />
          <img src="/extract.png" alt="Extract" className="h-10" />
        </div>
      </div>
    </section>
  );
};

export default Awards;

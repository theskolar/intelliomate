"use client";

import { Button } from "@/components/ui/button";

export default function Maintenance() {
    return (
        <>
            <div className="
        bg-background dark:bg-background-dark h-[80vh">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center space-x-6">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-box2 mt-6">GPS Tracking Software Development</h2>
            <p className="text-lg text-font dark:bg-background-dark mt-10">
            The intricacy of features, platform, and customization determines the cost of creating GPS tracking system software. While more sophisticated solutions with advanced features like real-time monitoring, artificial intelligence integration, and cloud support might cost $50,000 or more, a simple app can run anywhere from $10,000 to $30,000.
            </p>
            <Button
                // onClick={handleClick}
                variant="outline"
                size="lg"
                className="min-w-[140px] bg-[#ffd700] text-white hover:bg-[#ffd700] mt-8"
              >
                <a
                  href="tel:+919582929292"
                  className="text-font transition duration-300
dark:text-boxfont-dark
                  "
                >
                  Call now
                </a>
              </Button>          </div>
          <div className="w-80">
            <img
              src="/culture.png" // Add image URL here
              alt="Doctor with Prescription"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

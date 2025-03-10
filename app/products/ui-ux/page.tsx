"use client";

import { Button } from "@/components/ui/button";

export default function Maintenance() {
  return (
    <>
      <div
        className="
        bg-background dark:bg-background-dark h-[80vh]"
      >
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center space-x-6">
            <div className="w-80">
              <img
                src="/culture.png" // Add image URL here
                alt="Doctor with Prescription"
                className="w-full object-cover"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl font-bold text-box2 mt-6">
                GPS Tracking Software UX/UI{" "}
              </h2>
              <p className="text-lg text-font dark:bg-background-dark mt-10">
                Purchasing UX/UI design guarantees that your GPS tracking system
                is intuitive. Although UX/UI design expenses vary, depending on
                customization and the interface's complexity, you should spend
                between $5,000 to $15,000 for well-designed software.
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
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

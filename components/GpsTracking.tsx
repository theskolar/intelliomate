"use client";
import React from "react";
import { Button } from "./ui/button";

const GpsTracking = () => {
  return (
    <section
      className="relative overflow-hidden py-20 p-4 bg-background dark:bg-background-dark bg-none sm:bg-[url('/gpsmain.png')] sm:bg-no-repeat sm:bg-auto sm:bg-[550px] sm:bg-right-center"
    >
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 sm:grid-cols-1">
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight font-poppins text-boxfont dark:text-boxfont-dark sm:text-5xl lg:text-6xl">
              <span style={{
                color: '#50c878'
              }}>GPS Tracking </span> Software Development Company
            </h1>
            <p className="mb-8 text-lg dark:text-font  font-[550] font-poppins">
              GPS Tracking Software Development is changing how companies run,
              especially those that deal with shipping. Real-time location
              tracking, route optimization, and improved security let businesses
              effectively track workers, vehicles, and assets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                // onClick={handleClick}
                variant="outline"
                size="lg"
                className="min-w-[140px] bg-[#ffd700] text-white hover:bg-[#ffd700]"
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
      {/* <div className="absolute inset-0" /> */}
    </section>
  );
};

export default GpsTracking;

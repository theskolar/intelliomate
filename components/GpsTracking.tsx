"use client";
import React from "react";
import { Button } from "./ui/button";

const GpsTracking = () => {
  const handleClick = () => {
    // Replace with the phone number you want to call
    const phoneNumber = "ind:+919582929292";
    window.location.href = phoneNumber;
  };
  return (
    <section
      className="relative overflow-hidden py-20 p-4 bg-background dark:bg-background-dark"
      style={{
        backgroundImage: "url('/gpsmain.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto 550px',
        backgroundPosition: 'right center'
      }}
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
                onClick={handleClick}
                variant="outline"
                size="lg"
                className="min-w-[140px] bg-[#ffd700] text-white hover:bg-[#ffd700]"
              >
                Call now
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative z-10 rounded-3xl p-8">
              <div className="grid gap-6">
                {/* <Image
                src="#"
                alt="GPS Tracking App Interface"
                width={400}
                height={800}
                className="rounded-2xl shadow-2xl"
              /> */}
              </div>
            </div>
            <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded blur-3xl" />
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0" />
    </section>
  );
};

export default GpsTracking;

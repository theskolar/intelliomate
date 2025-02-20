"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
const testimonials = [
  {
    name: "Kaiyang Lin",
    role: "Ecommerce solutions",
    image: "https://via.placeholder.com/50",
    feedback:
      "TIMS have been reliable partner for our project both from an analysis perspective to development and roll-out. The team has great knowledge of the service they were delivering as well as good understanding of the requirements provided to them.",
  },
  {
    name: "Michelle Lim",
    role: "Elearning solutions",
    image: "https://via.placeholder.com/50",
    feedback:
      "TIMS is doing really great in E learning sector web & mobile app development for the better launch of your business into the global market is done very well by TIMS really appreciated.",
  },
  {
    name: "coder faraz",
    role: "Elearning solutions",
    image: "https://via.placeholder.com/50",
    feedback:
      "TIMS is doing really great in E learning sector web & mobile app development for the better launch of your business into the global market is done very well by TIMS really appreciated.",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-[#000000] text-white py-14 flex flex-col items-center">
      <h2 className="mb-2 text-center text-[2rem] font-bold font-Poppins text-[#473bf0]">
        Our Happy Clients
      </h2>
      <p className="text-sm text-gray-300 mt-2 text-center max-w-md">
        Discover why our satisfied clients keep coming back for our exceptional
        services. Join them today!
      </p>
      <div className="relative mt-6 flex items-center w-full max-w-4xl px-4">
        <button
          className="absolute left-0 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100 transition-all flex items-center justify-center"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex w-full justify-center">
          <div
            key={currentIndex}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex flex-col items-start max-w-md shadow-md transition-opacity duration-500 ease-in-out opacity-100"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-gray-400"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              {testimonials[currentIndex].feedback}
            </p>
            <div className="flex mt-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
          </div>
        </div>
        <button
          className="absolute right-0 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100 transition-all flex items-center justify-center"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

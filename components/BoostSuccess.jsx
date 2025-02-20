import React from "react";

const BoostSuccess = () => {
  const cards = [
    {
      title: "App Like Waze",
      icon: "/waza.webp", // Replace with actual icon
      description:
        "Real-time traffic updates, road conditions, and routes abound from Waze's community-based navigation app. Consumer data provides current information on traffic congestion, mishaps, and alternative routes...",
      borderColor: "border-purple-600",
      textColor: "text-[#F0F0F0]",
    },
    {
      title: "App Like Strava",
      icon: "/strava.webp", // Replace with actual icon
      description:
        "Strava is a software-based GPS tracking system fitness monitoring tool designed for athletes that logs running, cycling, and other activities...",
      borderColor: "border-orange-400",
      textColor: "text-[#F0F0F0]",
    },
    {
      title: "App Like Life360",
      icon: "/app-link.webp", // Replace with actual icon
      description:
        "Users of the family locator software Life360 may keep in touch with their loved ones using the best GPS tracking app for Android. Life360-style applications improve families' safety and peace of mind...",
      borderColor: "border-purple-400",
      textColor: "text-[#F0F0F0]",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container">
        <h2 className="mb-4 text-center text-[2rem] font-bold font-Poppins text-[#473bf0]">
          Boost Your Success on Your Path With Our GPS Tracking App
        </h2>
        <p className="mx-auto max-w-3xl font-semibold text-center text-lg font-Poppins text-black">
          Using our tailored GPS development tracking software practices, we
          personalize location tracking apps based on your business needs. Our
          applications tailored by expert Mobile app developers provide
          real-time optimization and increased security.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`h-[530px] rounded-2xl border-2 p-6 max-w-xs text-center shadow-md ${card.borderColor} sm:w-full md:w-1/3 lg:w-1/4`}
          >
            <div className="flex justify-center mb-4">
              <img src={card.icon} alt={card.title} className="w-16 h-16" />
            </div>
            <h2
              className={`text-2xl font-bold text-black font-poppins mt-10 ${card.textColor}`}
            >
              {card.title}
            </h2>
            <p className="mx-auto max-w-3xl font-semibold text-center text-md font-Poppins text-black mt-4 sm:mt-6">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoostSuccess;

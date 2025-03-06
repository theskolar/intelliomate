import React from "react";

const BoostSuccess = () => {
  const cards = [
    {
      title: "App Like Waze",
      icon: "/waza.webp", // Replace with actual icon
      description:
        "Real-time traffic updates, road conditions, and routes abound from Waze's community-based navigation app. Consumer data provides current information on traffic congestion, mishaps, and alternative routes...",
      gradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
    },
    {
      title: "App Like Strava",
      icon: "/strava.webp", // Replace with actual icon
      description:
        "Strava is a software-based GPS tracking system fitness monitoring tool designed for athletes that logs running, cycling, and other activities...",
      gradient: "bg-gradient-to-r from-orange-400 to-red-500",
    },
    {
      title: "App Like Life360",
      icon: "/app-link.webp", // Replace with actual icon
      description:
        "Users of the family locator software Life360 may keep in touch with their loved ones using the best GPS tracking app for Android. Life360-style applications improve families' safety and peace of mind...",
      gradient: "bg-gradient-to-r from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-background  dark:bg-background-dark">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-[500] text-boxfont dark:text-boxfont-dark font-poppins mb-4">
            Boost Your Success on Your Path With Our <span style={{color:'#50c878'}}>GPS Tracking App</span> 
          </h2>
          <p className="text-lg  text-font  max-w-2xl mx-auto font-[550] font-poppins">
            Using our tailored GPS development tracking software practices, we
            personalize location tracking apps based on your business needs. Our
            applications tailored by expert Mobile app developers provide
            real-time optimization and increased security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-box rounded-xl  hover:shadow-2xl transition-shadow duration-300 overflow-hidden shadow-[0_0_10px_#473bf0]"
            >
              <div className={`p-8  ${card.gradient}`}>
                <div className="w-16 h-16 mx-auto bg-white rounded-lg flex items-center justify-center shadow-md
                ">
                  <img src={card.icon} alt={card.title} className="w-10 h-10" />
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl  font-[550] font-poppins text-box3 mb-4">
                  {card.title}
                </h3>
                <p className="text-font  font-[500] font-poppins">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoostSuccess;
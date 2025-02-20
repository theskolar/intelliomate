"use client";
import React from "react";

const blogs = [
  {
    title: "Top 10 Taxi Booking Apps In The USA In 2025",
    description:
      "Want to ride comfortably in a cab? Download the top taxi app. We have listed the top 10 taxi booking apps based on popularity, features, and services.",
    image: "https://via.placeholder.com/400", // Replace with actual image URL
    link: "#",
  },
  {
    title: "Complete Guide to Custom eCommerce Website Development",
    description:
      "Master custom eCommerce development for online store success. Our comprehensive guide unlocks excellence, .",
    image: "https://via.placeholder.com/400", // Replace with actual image URL
    link: "#",
  },
  {
    title: "DoorDash vs Uber Eats: Which Food Delivery App is the Best?",
    description:
      "Two of the most well-known food delivery apps, DoorDash and Uber Eats, are compared to determine which is best for both customers & drivers.",
    image: "https://via.placeholder.com/400", // Replace with actual image URL
    link: "#",
  },
];
const handleClick = () => {
  // Replace with the phone number you want to call
  const phoneNumber = "ind:+919582929292";
  window.location.href = phoneNumber;
};

const RecentBlogs = () => {
  return (
    <div className="bg-black py-12 px-4">
      {/* <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#473bf0] mb-10">
          Recent Blogs
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover text-gray-400 rounded-t-lg"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {blog.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-blue-600 font-bold hover:text-blue-800 transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition">
          View All Blogs →
        </button>
      </div> */}

      <div className="mt-16 bg-gradient-to-r from-[#473bf0] to-purple-700 text-white py-10 px-8 rounded-lg text-center shadow-xl max-w-6xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <img
            src="/teamimage.png"
            alt="Team"
            className="w-32 h-32 rounded-full shadow-lg border-2 border-white object-cover"
          />
          <div>
            <h3 className="mb-6 text-center text-[2rem] font-bold font-Poppins">
              Hire the Best Website and Mobile App Developers!
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              See the latest projects on the TIMS website.
            </p>
            <button
              onClick={handleClick}
              className="px-5 py-2 bg-white text-[#473bf0] text-lg font-bold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Set Up A Call →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;

"use client";
import { useState } from "react";

export default function GpsTrackingPanels() {
  const [activeTab, setActiveTab] = useState("User Panel");

  return (
    <div className="bg-background  
dark:bg-background-dark
     w-full">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="mb-6 text-center text-[2rem]  font-[500]   font-Poppins text-boxfont 
dark:text-boxfont-dark
        ">
          Unique <span style={{color:'#50c878'}}> GPS Tracking</span> Software Panels
        </h2>
        <p className="text-center text-font font-poppins fontt-[400] mb-6">
          A good Grocery App Development company depends on the integration of
          necessary panels serving various user functions.
        </p>

        {/* Tabs */}
        <div className="flex justify-center border-b">
          {["User Panel", "Driver Panels", "Admin Panel"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium transition border-b-2 ${
                activeTab === tab
                  ? "border-[#50c878] text-[#50c878] font-poppins font-[400"
                  : "border-transparent text-gray-500 hover:text-box"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel Content */}
        {activeTab === "User Panel" && (
          <div className="flex flex-col md:flex-row items-center mt-6 p-4 shadow-[0_0_8px_#473bf0] rounded-lg  bg-background
dark:bg-background-dark
          ">
            <img
              src="/user-panel.webp"
              alt="GPS Tracking"
              className="w-48 h-auto rounded-lg shadow-md "
            />
            <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#50c878] font-[500] font-poppins">
                User Panel
              </h3>
              <p className="mt-2 text-md leading-relaxed text-font font-[400] font-poppins">
                The user panel tracks real-time, offers route information, and
                sends alerts. Users may examine travel history, track car or
                asset locations, and create geofencing alarms. The clear design
                guarantees simplicity of use, improving the whole tracking
                experience.
              </p>
            </div>
          </div>
        )}

        {activeTab === "Driver Panels" && (
          <div className="flex flex-col md:flex-row items-center mt-6 p-4 shadow-[0_0_8px_#473bf0] rounded-lg  bg-background
dark:bg-background-dark
          ">
            <img
              src="/driver-panel.webp"
              alt="Driver Panel"
              className="w-48 h-auto rounded-lg shadow-md border border-gray-300"
            />
            <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#50c878] font-[500] font-poppins">
                Driver Panel
              </h3>
              <p className="mt-2 text-md leading-relaxed font-[400] font-poppins text-font">
                The driver panel provides navigation assistance, trip history,
                and vehicle diagnostics. It enables communication with the
                control center and allows real-time location updates to ensure
                efficient route management and timely deliveries.
              </p>
            </div>
          </div>
        )}

        {activeTab === "Admin Panel" && (
          <div className="flex flex-col md:flex-row items-center mt-6 p-4 shadow-[0_0_8px_#473bf0] rounded-lg  bg-background
dark:bg-background-dark
          ">
            <img
              src="/admin-panel.webp"
              alt="Admin Panel"
              className="w-48 h-auto rounded-lg shadow-md border border-gray-300"
            />
            <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#50c878]">
                Admin Panel
              </h3>
              <p className="mt-2 text-md leading-relaxed font-[400] font-poppins text-font">
                The admin panel allows monitoring of all tracked vehicles,
                managing users, and setting up geofences. It provides analytics
                and reports to ensure fleet efficiency, security, and compliance
                with regulations.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="mb-6 text-center text-[2rem]  font-[500]   font-Poppins text-boxfont 
dark:text-boxfont-dark
        ">
         <span style={{color:'#50c878'}}>GPS Tracking</span>  Solutions Cost Estimation
        </h2>
        <p className="text-center font-[500] font-poppins text-font mb-8">
          With our special GPS tracking systems, discover the power of accuracy.
          Thinking about the expenses to create GPS tracking systems? Well,
          choose us for GPS track solutions and forget everything about your
          budget. Get realistic cost projections to guarantee that you maximize
          efficiency without draining your pocket book. Discover with us the
          direction GPS tracking systems will go, where price and quality will
          coexist together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-box text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
              src="/location-pin.png"
              alt="Expertise"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg  text-box3 font-[400] font-poppins">
              Expertise in GPS Development
            </h3>
            <p className="text-sm mt-2 font-[400] font-poppins text-font">
              Having years of GPS tracking software development expertise, we
              ensure our solutions are creative, dependable, and tailored to fit
              your company's requirements. Our staff is particularly adept in
              creating strong, scalable applications.
            </p>
          </div>

          <div className="bg-box p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img
              src="/selfie.png"
              alt="Latest Tech"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg  text-box3 font-[400] font-poppins">
              Use of Latest Technologies
            </h3>
            <p className="text-sm mt-2 font-[400] font-poppins text-font">
              Our GPS solutions include innovative technologies such as
              Blockchain, IoT, and artificial intelligence (AI), keeping ahead
              of the curve. These technologies enhance general user experience,
              security, and precision.
            </p>
          </div>

          <div className="bg-box  p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src="/hint.png" alt="End-to-End" className="w-12 h-12 mb-4" />
            <h3 className="text-lg  text-box3 font-[400] font-poppins">
              End-to-End Solutions
            </h3>
            <p className="text-sm mt-2  text-font font-[400] font-poppins">
              From idea to implementation, we provide end-to-end GPS tracking
              app creation services, support, and maintenance. Our solutions are
              meant to expand with your company and therefore guarantee
              long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

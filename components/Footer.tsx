import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background
dark:bg-background-dark
     text-boxfont py-12">
      <div className="container mx-auto px-6">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <img
              className="w-auto h-[25vh] sm:h-[25vh] md:h-[10vh] lg:h-[10vh] mx-auto"
              src="/mainlogo.jpg" // Assuming the image is in the public folder
              alt="logo"
            />
            {/* <p className="text-sm text-font">
              Telephonica Interactive Media Services
            </p> */}
            <div className="flex space-x-4"></div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-font 
dark:text-boxfont-dark
                 hover:text-white transition duration-300">
                  UI/UX Designing
                </a>
              </li>
              <li>
                <a className="text-font hover:text-white
dark:text-boxfont-dark
                 transition duration-300">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a className="text-font 
dark:text-boxfont-dark
                transition duration-300">
                  Website Development
                </a>
              </li>
              <li>
                <a className="text-font transition duration-300
dark:text-boxfont-dark
                ">
                  Ecommerce Development
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Offices */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Office</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-font 
dark:text-boxfont-dark
                ">
                  A-3 Street no 1 Madhuvihar 1, Delhi, India 110092
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:pattanaikarun@gmail.com"
                  className="text-font transition duration-300
dark:text-boxfont-dark
                  "
                >
                  pattanaikarun@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919582929292"
                  className="text-font transition duration-300
dark:text-boxfont-dark
                  "
                >
                  +919582929292
                </a>
              </li>
            </ul>
            <div className="flex space-x-4"></div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center
        ">
          <p className="text-sm text-font
dark:text-boxfont-dark
          ">
            © {new Date().getFullYear()} Telephonica Interactive Media Services.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

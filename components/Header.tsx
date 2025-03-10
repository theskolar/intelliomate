"use client";
import { SunMoon, ChevronDown } from "lucide-react"; // Import ChevronDown
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-black backdrop-blur">
      <div className="flex h-16 items-center justify-between w-full">
        <Link href="/">
          <img src="/mainlogo.jpg" alt="logo" className="w-auto h-16" />
        </Link>

        <div className="flex flex-row justify-between gap-7 px-5">
          {/* Product Dropdown with Chevron Icon */}
          <div className="relative" ref={dropdownRef}>
            <Button
              size="sm"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-font  bg-background dark:bg-background-dark flex items-center space-x-2 hover:bg-white dark:hover:bg-white hover:text-black hover:dark:text-black dark:text-white transition-colors duration-300"
            >
              <span>Products</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </Button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black   text-white border border-slate-700 rounded-md">
                <ul>
                  <Link href="/products/maintenance">
                    <li
                      className="px-4 py-2 hover:bg-slate-700 cursor-pointer"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                    >
                      Maintenance
                    </li>
                  </Link>
                  <Link href="/products/ui-ux">
                    <li
                      className="px-4 py-2 hover:bg-slate-700 cursor-pointer"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                    >
                      UI/UX
                    </li>
                  </Link>
                  <Link href="/products/development">
                    <li
                      className="px-4 py-2 hover:bg-slate-700 cursor-pointer"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                    >
                      Development
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>

          <Button
            size="sm"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            <SunMoon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

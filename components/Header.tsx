"use client"
import { SunMoon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-black  backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <img src="/mainlogo.jpg" alt="logo" className="w-auto h-16" />
        </Link>
        {/* <MainNav /> */}
        <Button
          size="sm"
          onClick={() => document.documentElement.classList.toggle("dark")}
        >
          <SunMoon className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

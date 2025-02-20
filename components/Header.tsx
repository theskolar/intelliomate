import { MainNav } from "@/app/main-nav";
import { MessageSquare } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-white  backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* <Link className="flex items-center gap-2"> */}
        {/* <img src="/logo3.jpg" alt="TIMS Logo" width={120} height={40} /> */}
        {/* </Link> */}
        <Link href="/">
          <img src="/mainlogo.jpg" alt="logo" width={80} height={80} />
        </Link>
        {/* <MainNav />
        <Button
          size="lg"
          className="hidden bg-blue-600 hover:bg-blue-700 lg:inline-flex"
        >
          REQUEST A FREE QUOTE
          <MessageSquare className="ml-2 h-4 w-4" />
        </Button> */}
      </div>
    </header>
  );
};

export default Header;

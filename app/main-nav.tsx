"use client";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MainNav() {
  return (
    <>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#473bf0]  hover:text-black  focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                ABOUT US
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#473bf0]  hover:text-black  focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              SERVICES
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4">
                <Link
                  href="/services/gps-tracking"
                  className="block space-y-1 rounded-md "
                >
                  <div className="font-medium text-[#473bf0]">GPS Tracking</div>
                  <div className="text-sm text-black">
                    Custom GPS tracking solutions for your business
                  </div>
                </Link>
                <Link
                  href="/services/fleet-management"
                  className="block space-y-1 rounded-md p-3 "
                >
                  <div className="font-medium text-[#473bf0]">
                    Fleet Management
                  </div>
                  <div className="text-sm text-black">
                    Comprehensive fleet tracking and management systems
                  </div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/portfolio" legacyBehavior passHref>
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#473bf0]  hover:text-black  focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                PORTFOLIO
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/career" legacyBehavior passHref>
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#473bf0]  hover:text-black  focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                CAREER
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        {/* <SheetContent side="right" className="w-80">
          <nav className="grid gap-4">
            <Link
              href="/about"
              className="text-lg font-medium hover:text-slate-300"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium hover:text-slate-300"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-lg font-medium hover:text-slate-300"
            >
              Portfolio
            </Link>
            <Link
              href="/career"
              className="text-lg font-medium hover:text-slate-300"
            >
              Career
            </Link>
            <Button
              size="lg"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
            >
              REQUEST A FREE QUOTE
            </Button>
          </nav>
        </SheetContent> */}
      </Sheet>
    </>
  );
}

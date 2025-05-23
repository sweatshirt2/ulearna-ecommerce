"use client";

import { headers } from "next/headers";
import UserProfile from "../user/UserProfile";
import { ModeToggle } from "../theme-toggle";
import UserCart from "../user/UserCart";
import HeaderItem from "./HeaderItem";
import { useState } from "react";
import { Sandwich } from "lucide-react";

const navLinks = [
  { label: "Home", href: "" },
  { label: "Catalogue", href: "/products" },
  { label: "Dashboard", href: "/dashboard" },
  // { label: "FAQ", href: "#" },
  // { label: "Contact", href: "#" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-black rounded-b-3xl shadow-md px-6 py-4 flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <div className="bg-black dark:bg-white text-white dark:text-black font-bold text-xl md:text-2xl px-4 py-2 rounded-lg tracking-widest">
          ULearna
        </div>
      </div>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-7 text-gray-500 dark:text-gray-200 font-medium">
          {navLinks.map((link, index) => (
            <HeaderItem
              key={`header-link-${index}`}
              label={link.label}
              href={link.href}
            />
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <Sandwich className="h-6 w-6" />
          </button>
        </div>
        <div className="text-black dark:text-white">
          <ModeToggle />
        </div>
        <UserProfile />
        <div className="text-black dark:text-white">
          <UserCart />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black shadow-md rounded-b-md z-10">
          <ul className="flex flex-col py-4 gap-3 items-center text-gray-500 dark:text-gray-200 font-medium">
            {navLinks.map((link, index) => (
              <HeaderItem
                key={`mobile-link-${index}`}
                label={link.label}
                href={link.href}
              />
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

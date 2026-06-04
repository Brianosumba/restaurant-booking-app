"use client";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 py-4 sticky top-0 z-50 bg-[#FFFCF8] border-b border-[#F1D8C8] sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl flex items-center justify-between">
        <Logo />
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          <a
            className="text-sm font-medium text-[#3A2418] hover:text-[#B65A3C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8] rounded-sm"
            href="/menu"
          >
            Menu
          </a>
          <a
            className="text-sm font-medium text-[#3A2418] hover:text-[#B65A3C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8] rounded-sm"
            href="/#about"
          >
            About
          </a>
          <a
            className="text-sm font-medium text-[#3A2418] hover:text-[#B65A3C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8] rounded-sm"
            href="/#contact"
          >
            Contact
          </a>
        </nav>
        <a
          href="/#booking"
          className="rounded-full bg-[#B65A3C] px-4 py-2 text-sm font-medium text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8] hidden md:inline-flex"
        >
          Book a Table
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="rounded-full border border-[#F1D8C8] px-3 py-2 text-sm font-medium text-[#3A2418] hover:bg-[#FFF8F1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className="mx-auto mt-4 flex w-full max-w-6xl flex-col gap-3 rounded-2xl border border-[#F1D8C8] bg-[#FFF8F1] p-4 md:hidden"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <a
            className="text-sm font-medium text-[#3A2418] hover:text-[#B65A3C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8] rounded-sm"
            href="/menu"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </a>
          <a
            className="text-sm font-medium text-[#3A2418] hover:text-[#B65A3C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8] rounded-sm"
            href="/#about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            className="text-sm font-medium text-[#3A2418] hover:text-[#B65A3C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFFCF8] rounded-sm"
            href="/#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            className="rounded-full bg-[#B65A3C] px-4 py-2 text-center text-sm font-semibold text-white hover:bg-[#A14A2A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D99A3D] focus:ring-offset-2 focus:ring-offset-[#FFF8F1]"
            href="/#booking"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Table
          </a>
        </nav>
      )}
    </header>
  );
}

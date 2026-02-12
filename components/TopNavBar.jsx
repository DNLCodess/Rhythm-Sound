"use client";

import { toSentenceCase } from "@/helpers";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LuMenu, LuX, LuMusic2, LuPhone } from "react-icons/lu";

const TopNavBar = ({ menuItems, position }) => {
  const navbarRef = useRef(null);
  const pathname = usePathname();
  const [activation, setActivation] = useState(menuItems[0]);
  const [hash, setHash] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll listener & sticky nav
  useEffect(() => {
    const handleScroll = () => {
      activeSection();
      if (navbarRef.current) {
        if (window.scrollY >= 80) navbarRef.current.classList.add("nav-sticky");
        else navbarRef.current.classList.remove("nav-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hash scroll on load
  useEffect(() => {
    setHash(window.location.hash);
    const timeout = setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "instant" });
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [hash]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Update active menu section
  const activeSection = () => {
    const scrollY = window.scrollY;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      const section = menuItems[i];
      const el = document.getElementById(section);
      if (el && el.offsetTop <= scrollY + 100) {
        setActivation(section);
        return;
      }
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        ref={navbarRef}
        id="navbar"
        className={cn(
          position,
          "inset-x-0 top-0 z-[60] w-full border-b border-transparent bg-white transition-all duration-300 dark:bg-default-50 lg:bg-transparent [&.nav-sticky]:bg-white/95 [&.nav-sticky]:shadow-lg [&.nav-sticky]:backdrop-blur-3xl dark:[&.nav-sticky]:bg-default-50/90",
        )}
      >
        <div className="px-4 md:px-6 lg:px-8 mx-auto max-w-8xl py-4">
          <nav className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
            <div className="flex w-full items-center justify-between lg:w-auto">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                  <LuMusic2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-default-950">
                    Rhythm & Sound
                  </h1>
                  <p className="text-xs text-default-600">Band</p>
                </div>
              </Link>

              {/* Mobile menu button */}
              <div className="flex items-center gap-2">
                <Link
                  href="tel:+2348068494766"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-white transition-all hover:bg-primary/90 lg:hidden"
                >
                  <LuPhone className="h-4 w-4" />
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="inline-block lg:hidden"
                  aria-label="Toggle mobile menu"
                >
                  <LuMenu className="h-7 w-7 text-default-600 hover:text-default-900" />
                </button>
              </div>
            </div>

            {/* Desktop menu */}
            <ul className="menu relative mx-auto hidden grow items-center justify-center lg:flex">
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "menu-item mx-2 text-default-800 transition-all duration-300 hover:text-primary [&.active]:text-primary",
                    activation === item && "active",
                  )}
                >
                  <Link
                    className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium capitalize lg:text-base"
                    href={`#${item}`}
                  >
                    {toSentenceCase(item)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact button desktop */}
            <div className="ms-auto hidden shrink gap-3 lg:inline-flex">
              <Link
                href="tel:+2348068494766"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                <LuPhone className="h-4 w-4" />
                <span>Call Us</span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-base font-semibold text-white transition-all hover:bg-primary/90 shadow-lg hover:shadow-xl"
              >
                <span>Book Now</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed bottom-0 left-0 top-0 z-[61] h-screen w-full max-w-[270px] border-r border-default-200 bg-white transition-transform duration-300 dark:bg-default-50 lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <LuMusic2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-default-950">
                Rhythm & Sound
              </h1>
              <p className="text-xs text-default-600">Band</p>
            </div>
          </Link>
          <button onClick={closeMobileMenu} aria-label="Close mobile menu">
            <LuX
              size={24}
              className="text-default-600 hover:text-default-900"
            />
          </button>
        </div>

        <div className="h-[calc(100%-4.625rem)] overflow-y-auto">
          <nav className="flex h-full w-full flex-col p-4">
            <ul className="space-y-1">
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "rounded text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary",
                    activation === item && "active",
                  )}
                >
                  <a
                    className="block w-full px-4 py-2.5"
                    href={`#${item}`}
                    onClick={closeMobileMenu}
                  >
                    {toSentenceCase(item)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA Buttons */}
            <div className="mt-auto space-y-3 pt-4 border-t border-default-200">
              <Link
                href="tel:+2348068494766"
                className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                onClick={closeMobileMenu}
              >
                <LuPhone className="h-4 w-4" />
                <span>Call Us</span>
              </Link>
              <Link
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-all hover:bg-primary/90"
                onClick={closeMobileMenu}
              >
                <span>Book Now</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;

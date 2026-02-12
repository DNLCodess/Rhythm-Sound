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
                  className="hs-collapse-toggle inline-block lg:hidden"
                  data-hs-overlay="#mobile-menu"
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

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[270px] -translate-x-full transform border-r border-default-200 bg-white transition-all [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 dark:bg-default-50"
        tabIndex={-1}
      >
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300">
          <Link href="/" className="flex items-center gap-2">
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
          <div data-hs-overlay="#mobile-menu" className="hs-collapse-toggle">
            <LuX size={24} />
          </div>
        </div>

        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          <nav className="hs-accordion-group flex h-full w-full flex-col flex-wrap p-4">
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
                    data-hs-overlay="#mobile-menu"
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
                data-hs-overlay="#mobile-menu"
              >
                <LuPhone className="h-4 w-4" />
                <span>Call Us</span>
              </Link>
              <Link
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-all hover:bg-primary/90"
                data-hs-overlay="#mobile-menu"
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

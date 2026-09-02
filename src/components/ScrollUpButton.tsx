"use client";

import { useEffect, useState } from "react";

export function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we are near the bottom of the page
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;
      
      // If we are within 150px of the bottom, show the button
      if (bottomPosition - scrollPosition < 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check in case the page is already at the bottom
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuItems = [
    { label: "Intro", href: "#intro" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Works", href: "#works" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
  ];

  return (
    <div 
      className={`fixed bottom-10 right-6 md:right-10 z-50 flex flex-col items-end group transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Popover Menu on Hover */}
      <div className="absolute bottom-full right-0 mb-4 bg-lightBg dark:bg-darkBg border border-lightBorder dark:border-darkBorder p-4 flex flex-col min-w-[160px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-xl">
        <div className="text-[9px] font-semibold tracking-[0.2em] text-lightMuted dark:text-darkMuted uppercase mb-3 pb-2 border-b border-lightBorder dark:border-darkBorder">
          Jump to section
        </div>
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-lightMain dark:text-darkMain transition-all duration-300 opacity-60 hover:opacity-100 hover:pl-2 py-1.5"
          >
            {item.label}
          </a>
        ))}
      </div>

      <button
        onClick={scrollToTop}
        className="w-12 h-12 border border-lightBorder dark:border-darkBorder bg-lightBg dark:bg-darkBg text-lightMain dark:text-darkMain hover:bg-lightMain hover:text-lightBg dark:hover:bg-darkMain dark:hover:text-darkBg transition-colors flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
    </div>
  );
}

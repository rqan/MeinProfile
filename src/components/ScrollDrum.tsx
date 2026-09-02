"use client";

import { useRef, WheelEvent } from "react";

export function ScrollDrum() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault(); // Mencegah scroll asli agar bisa diatur kecepatannya
    
    if (scrollRef.current) {
      // Kalikan delta scroll dengan 0.3 agar gerakannya 3x lebih lambat
      scrollRef.current.scrollTop += e.deltaY * 0.3;
    }
  };

  return (
    <div className="flex items-center mb-6">
      {/* Continuous Left Border */}
      <div className="h-[120px] w-[1px] bg-lightBorder dark:bg-darkBorder mr-4"></div>

      {/* Scroll Window */}
      <div 
        className="relative h-[120px] w-36 md:w-40 overflow-hidden text-left"
        onWheel={handleWheel}
      >
        {/* Top fade mask */}
        <div className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-b from-lightBg dark:from-darkBg to-transparent z-10 pointer-events-none"></div>

        <div 
          ref={scrollRef}
          className="h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar text-xs md:text-sm font-medium tracking-widest"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="h-[40px]"></div> {/* spacer */}
          <a href="#intro" className="block h-[40px] leading-[40px] snap-center hover:text-lightMain dark:hover:text-darkMain transition-all duration-300 opacity-60 hover:opacity-100 hover:pl-2">
            ↓ INTRO
          </a>
          <a href="#experience" className="block h-[40px] leading-[40px] snap-center hover:text-lightMain dark:hover:text-darkMain transition-all duration-300 opacity-60 hover:opacity-100 hover:pl-2">
            ↓ EXPERIENCE
          </a>
          <a href="#education" className="block h-[40px] leading-[40px] snap-center hover:text-lightMain dark:hover:text-darkMain transition-all duration-300 opacity-60 hover:opacity-100 hover:pl-2">
            ↓ EDUCATION
          </a>
          <a href="#works" className="block h-[40px] leading-[40px] snap-center hover:text-lightMain dark:hover:text-darkMain transition-all duration-300 opacity-60 hover:opacity-100 hover:pl-2">
            ↓ WORKS
          </a>
          <a href="#skills" className="block h-[40px] leading-[40px] snap-center hover:text-lightMain dark:hover:text-darkMain transition-all duration-300 opacity-60 hover:opacity-100 hover:pl-2">
            → SKILLS
          </a>
          <a href="#certificates" className="block h-[40px] leading-[40px] snap-center hover:text-lightMain dark:hover:text-darkMain transition-all duration-300 opacity-60 hover:opacity-100 hover:pl-2">
            → CERTIFICATES
          </a>
          <div className="h-[40px]"></div> {/* spacer */}
        </div>

        {/* Bottom fade mask */}
        <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-t from-lightBg dark:from-darkBg to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}

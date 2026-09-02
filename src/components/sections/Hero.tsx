import { ScrollDrum } from "@/components/ScrollDrum";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen w-full flex flex-col px-6 md:px-10 pt-3 md:pt-5 pb-10 relative border-b-minimal border-lightBorder dark:border-darkBorder">
      {/* Main Content (Huge Typography) */}
      <div className="flex-1 flex flex-col justify-center mt-0">
        <h1 className="display-font text-[25vw] md:text-[20vw] flex flex-col ml-0 md:ml-10 text-lightMain dark:text-darkMain">
          <span>REGAN</span>
          <span>DEWA</span>
        </h1>
      </div>

      {/* Bottom Navigation / Hero Info */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end text-[9px] md:text-[10px] font-semibold tracking-[0.15em] uppercase text-lightMuted dark:text-darkMuted gap-8 md:gap-0 relative z-10">
        <div className="flex flex-col gap-1 w-full md:w-auto">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=regandewad@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lightMain dark:hover:text-darkMain transition-colors flex items-center gap-1"
          >
            Email <span className="text-[8px] transform rotate-45">↑</span>
          </a>
          <a
            href="https://github.com/rqan"
            className="hover:text-lightMain dark:hover:text-darkMain transition-colors flex items-center gap-1"
          >
            Github <span className="text-[8px] transform rotate-45">↑</span>
          </a>
          <a
            href="https://www.linkedin.com/in/regan-dzulfikar-899a093a2/"
            className="hover:text-lightMain dark:hover:text-darkMain transition-colors flex items-center gap-1"
          >
            LinkedIn <span className="text-[8px] transform rotate-45">↑</span>
          </a>
          <a
            href="https://wa.me/6287777358853"
            className="hover:text-lightMain dark:hover:text-darkMain transition-colors flex items-center gap-1"
          >
            Whatsapp <span className="text-[8px] transform rotate-45">↑</span>
          </a>
          <a
            href="https://www.instagram.com/regandewad?igsi=MTl2OXZvZm1lMHBpbQ=="
            className="hover:text-lightMain dark:hover:text-darkMain transition-colors flex items-center gap-1"
          >
            Instagram <span className="text-[8px] transform rotate-45">↑</span>
          </a>

          <div className="mt-8">
            <p>INDEPENDENT DEVELOPER</p>
            <p>SCROLL TO EXPLORE ↓</p>
          </div>
        </div>
        

        <div className="hidden md:block absolute left-1/2 bottom-0 transform -translate-x-1/2 text-center pb-2">
          <p>PORTFOLIO & CURRICULUM VITAE</p>
        </div>

        {/* Scroll Drum Links & Rights */}
        <div className="text-right flex flex-col items-end w-full md:w-auto">
          <ScrollDrum />

          <p>ALL RIGHTS RESERVED</p>
          <p>REGANDEWA 2026©</p>
        </div>
      </div>
    </section>
  );
}

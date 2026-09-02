export function Skills() {
  return (
    <section id="skills" className="w-full px-6 md:px-20 py-32">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-32 items-start">
        <div className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-lightMuted dark:text-darkMuted w-32 shrink-0">
          (05) Skills
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Code Skills */}
          <div>
            <h3 className="text-2xl display-font text-lightMain dark:text-darkMain mb-10">
              CORE SKILLS
            </h3>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex justify-between items-center border-b-minimal border-lightBorder dark:border-darkBorder pb-4">
                <span className="text-lightMain dark:text-darkMain">
                  HTML, CSS & Vanilla
                </span>
                <span className="text-[10px] tracking-widest text-lightMuted dark:text-darkMuted">
                  85%
                </span>
              </li>
              <li className="flex justify-between items-center border-b-minimal border-lightBorder dark:border-darkBorder pb-4">
                <span className="text-lightMain dark:text-darkMain">
                 Framework Laravel, Codeigniter, MySQL
                </span>
                <span className="text-[10px] tracking-widest text-lightMuted dark:text-darkMuted">
                  72%
                </span>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl display-font text-lightMain dark:text-darkMain mb-10">
              LANGUAGES
            </h3>
            <div className="flex gap-8">
              {/* ID */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      className="text-lightBorder dark:text-darkBorder"
                    />
                    {/* Circumference = 2 * pi * 36 = 226 */}
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray="226"
                      strokeDashoffset="0"
                      className="text-lightMain dark:text-darkMain transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-lightMain dark:text-darkMain">
                    100%
                  </div>
                </div>
                <span className="mt-4 text-[10px] font-bold tracking-widest uppercase text-lightMuted dark:text-darkMuted">
                  Indonesia
                </span>
              </div>

              {/* EN */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      className="text-lightBorder dark:text-darkBorder"
                    />
                    {/* 85% of 226 = 192 -> offset = 226 - 192 = 34 */}
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray="226"
                      strokeDashoffset="34"
                      className="text-lightMain dark:text-darkMain transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-lightMain dark:text-darkMain">
                    89%
                  </div>
                </div>
                <span className="mt-4 text-[10px] font-bold tracking-widest uppercase text-lightMuted dark:text-darkMuted">
                  English
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

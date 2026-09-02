export function Education() {
  return (
    <section
      id="education"
      className="w-full px-6 md:px-20 py-32 border-b-minimal border-lightBorder dark:border-darkBorder"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-32 items-start">
        <div className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-lightMuted dark:text-darkMuted w-32 shrink-0">
          (03) Education
        </div>
        <div className="w-full flex flex-col">
          {/* Edu 1 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b-minimal border-lightBorder dark:border-darkBorder gap-4 md:gap-0 group cursor-pointer relative overflow-hidden">
            <div className="absolute left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out text-lightMain dark:text-darkMain hidden md:block">
              ⟶
            </div>
            
            <div className="flex flex-col transition-transform duration-500 ease-out md:group-hover:translate-x-8">
              <h3 className="text-3xl md:text-5xl display-font text-lightMain dark:text-darkMain mb-2">
                SMK NEGERI TAKERAN
              </h3>
              <p className="text-sm font-semibold tracking-widest text-lightMuted dark:text-darkMuted uppercase">
                Rekayasa Perangkat Lunak
              </p>
            </div>
            
            <div className="text-right flex flex-col md:items-end transition-transform duration-500 ease-out md:group-hover:-translate-x-4">
              <p className="text-lg md:text-xl font-medium text-lightMain dark:text-darkMain">
                2024 - Present
              </p>
              <p className="text-xs text-lightMuted dark:text-darkMuted max-w-xs mt-2 font-medium leading-relaxed md:text-right">
                Fokus pada pengembangan web dan rekayasa perangkat lunak.
              </p>
            </div>
          </div>
          {/* Edu 2 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b-minimal border-lightBorder dark:border-darkBorder gap-4 md:gap-0 group cursor-pointer relative overflow-hidden">
            <div className="absolute left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out text-lightMain dark:text-darkMain hidden md:block">
              ⟶
            </div>
            
            <div className="flex flex-col transition-transform duration-500 ease-out md:group-hover:translate-x-8">
              <h3 className="text-3xl md:text-5xl display-font text-lightMain dark:text-darkMain mb-2">
                SMP NEGERI 4 MAGETAN
              </h3>
              <p className="text-sm font-semibold tracking-widest text-lightMuted dark:text-darkMuted uppercase">
                IPA-IPS
              </p>
            </div>
            
            <div className="text-right flex flex-col md:items-end transition-transform duration-500 ease-out md:group-hover:-translate-x-4">
              <p className="text-lg md:text-xl font-medium text-lightMain dark:text-darkMain">
                2021 - 2024
              </p>
              <p className="text-xs text-lightMuted dark:text-darkMuted max-w-xs mt-2 font-medium leading-relaxed md:text-right">
                Mempelajari dasar-dasar problem solving dengan flowchart sederhana.
              </p>
            </div>
          </div>
          {/* Edu 3 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b-minimal border-lightBorder dark:border-darkBorder gap-4 md:gap-0 group cursor-pointer relative overflow-hidden">
            <div className="absolute left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out text-lightMain dark:text-darkMain hidden md:block">
              ⟶
            </div>
            
            <div className="flex flex-col transition-transform duration-500 ease-out md:group-hover:translate-x-8">
              <h3 className="text-3xl md:text-5xl display-font text-lightMain dark:text-darkMain mb-2">
                MI DARUL ULUM
              </h3>
              <p className="text-sm font-semibold tracking-widest text-lightMuted dark:text-darkMuted uppercase">
                AKIDAH & AKHLAQ
              </p>
            </div>
            
            <div className="text-right flex flex-col md:items-end transition-transform duration-500 ease-out md:group-hover:-translate-x-4">
              <p className="text-lg md:text-xl font-medium text-lightMain dark:text-darkMain">
                2019 - 2021
              </p>
              <p className="text-xs text-lightMuted dark:text-darkMuted max-w-xs mt-2 font-medium leading-relaxed md:text-right">
                Membangun pemahaman akademik yang komprehensif mengenai ilmu kalam, filsafat Islam, dan ajaran tasawuf.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

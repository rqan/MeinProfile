export function Intro() {
  return (
    <section
      id="intro"
      className="w-full px-6 md:px-20 py-32 border-b-minimal border-lightBorder dark:border-darkBorder"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        <div className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-lightMuted dark:text-darkMuted w-32 shrink-0">
          (01) Intro
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-16">
          {/* Summary */}
          <div className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-lightMain dark:text-darkMain tracking-tight flex-1">
            Saya adalah pengembang web yang berfokus pada{" "}
            <span className="text-lightMuted dark:text-darkMuted">
              solusi arsitektur modular
            </span>
            ,{" "}
            <span className="text-lightMuted dark:text-darkMuted">
              desain antarmuka minimalis
            </span>
            , dan{" "}
            <span className="text-lightMuted dark:text-darkMuted">
              otomatisasi alur kerja modern
            </span>
            .
          </div>

          {/* Data Diri */}
          <div className="w-full lg:w-[380px] shrink-0 flex flex-col text-sm font-medium text-lightMain dark:text-darkMain">
            {/* Header Data Diri */}
            <div className="flex justify-between items-baseline border-b-minimal border-lightBorder dark:border-darkBorder pb-4 mb-6">
              <h3 className="display-font text-3xl md:text-4xl text-lightMain dark:text-darkMain tracking-tight">
                DATA DIRI
              </h3>
              <span className="text-[9px] tracking-widest uppercase text-lightMuted dark:text-darkMuted font-mono">
                PROFILE // 2026
              </span>
            </div>

            {/* Pasfoto Brutalist (Compact Pasfoto Size) */}
            <div className="mb-6 flex justify-between items-end group cursor-default">
              <div className="relative w-28 h-36 md:w-32 md:h-40 overflow-hidden border border-lightBorder dark:border-darkBorder bg-lightBg dark:bg-darkBg p-1 transition-colors shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/uploads/profile.jpg"
                  alt="Foto Profil - Regan Dewa Dzulfikar"
                  className="w-full h-full object-cover object-top grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
                />
                {/* Overlay scanline effect */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-40 mix-blend-overlay pointer-events-none"></div>

                {/* Brutalist badge */}
                {/* <div className="absolute bottom-1.5 right-1.5 bg-lightMain dark:bg-darkMain text-lightBg dark:text-darkBg text-[7px] font-bold tracking-widest uppercase px-1.5 py-0.5 pointer-events-none">
                  FIG. 01
                </div> */}
              </div>

              <div className="text-right pb-1">
                <span className="text-[9px] font-mono tracking-widest uppercase text-lightMuted dark:text-darkMuted block">
                  PASFOTO 3×4
                </span>
                <span className="text-xs uppercase text-lightMain dark:text-darkMain font-mono">
                  VERIFIED // 2026
                </span>
              </div>
            </div>

            {/* List Detail */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between border-b-minimal border-lightBorder dark:border-darkBorder pb-2.5">
                <span className="text-lightMuted dark:text-darkMuted uppercase tracking-widest text-[10px]">
                  Nama
                </span>
                <span className="text-right">Regan Dewa Dzulfikar</span>
              </div>
              <div className="flex justify-between border-b-minimal border-lightBorder dark:border-darkBorder pb-2.5">
                <span className="text-lightMuted dark:text-darkMuted uppercase tracking-widest text-[10px]">
                  Lahir
                </span>
                <span className="text-right">Magetan, 22 Juli 2008</span>
              </div>
              <div className="flex justify-between border-b-minimal border-lightBorder dark:border-darkBorder pb-2.5">
                <span className="text-lightMuted dark:text-darkMuted uppercase tracking-widest text-[10px]">
                  Kelamin
                </span>
                <span>Laki-laki</span>
              </div>
              <div className="flex justify-between border-b-minimal border-lightBorder dark:border-darkBorder pb-2.5">
                <span className="text-lightMuted dark:text-darkMuted uppercase tracking-widest text-[10px]">
                  Hobi
                </span>
                <span>Touring</span>
              </div>
              <div className="flex justify-between border-b-minimal border-lightBorder dark:border-darkBorder pb-2.5">
                <span className="text-lightMuted dark:text-darkMuted uppercase tracking-widest text-[10px]">
                  Status
                </span>
                <span>Belum Menikah</span>
              </div>
              <div className="flex justify-between border-b-minimal border-lightBorder dark:border-darkBorder pb-2.5">
                <span className="text-lightMuted dark:text-darkMuted uppercase tracking-widest text-[10px]">
                  Warga
                </span>
                <span>Indonesia</span>
              </div>
              <div className="flex justify-between border-b-minimal border-lightBorder dark:border-darkBorder pb-2.5">
                <span className="text-lightMuted dark:text-darkMuted uppercase tracking-widest text-[10px]">
                  Alamat
                </span>
                <span className="text-right w-48">
                  Perum Puri Permata C-12 RT.012 RW.005 Tawanganom Magetan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

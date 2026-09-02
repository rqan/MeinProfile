export function Certificates() {
  return (
    <section
      id="certificates"
      className="w-full px-6 md:px-20 py-32 border-b-minimal border-lightBorder dark:border-darkBorder"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-32 items-start">
        <div className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-lightMuted dark:text-darkMuted w-32 shrink-0">
          (06) Certificates
        </div>

        <div className="w-full space-y-16">
          {/* Lomba / Competition */}
          <div>
            <h3 className="text-2xl display-font text-lightMain dark:text-darkMain mb-10">
              COMPETITION
            </h3>
            <div className="space-y-0">
              <div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b-minimal border-lightBorder dark:border-darkBorder cursor-pointer">
                <div className="transition-transform duration-500 ease-out md:group-hover:translate-x-4">
                  <h4 className="text-lg md:text-xl font-bold text-lightMain dark:text-darkMain">
                    IT Software Solutiuons for Business &#40; Tingkat Provinsi  &#41;
                  </h4>
                  <p className="text-xs text-lightMuted dark:text-darkMuted mt-1 font-medium">
                    Peserta
                  </p>
                </div>
                <p className="text-sm font-medium text-lightMuted dark:text-darkMuted mt-2 md:mt-0 transition-transform duration-500 ease-out md:group-hover:-translate-x-4">
                  2026
                </p>
              </div>
            </div>
          </div>

          {/* Webinar */}
          <div>
            <h3 className="text-2xl display-font text-lightMain dark:text-darkMain mb-10">
              WEBINAR
            </h3>
            <div className="space-y-0">
              <div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b-minimal border-lightBorder dark:border-darkBorder cursor-pointer">
                <div className="transition-transform duration-500 ease-out md:group-hover:translate-x-4">
                  <h4 className="text-lg md:text-xl font-bold text-lightMain dark:text-darkMain">
                    Judul Webinar
                  </h4>
                  <p className="text-xs text-lightMuted dark:text-darkMuted mt-1 font-medium">
                    Penyelenggara
                  </p>
                </div>
                <p className="text-sm font-medium text-lightMuted dark:text-darkMuted mt-2 md:mt-0 transition-transform duration-500 ease-out md:group-hover:-translate-x-4">
                  2025
                </p>
              </div>
            </div>
          </div>

          {/* Seminar */}
          <div>
            <h3 className="text-2xl display-font text-lightMain dark:text-darkMain mb-10">
              SEMINAR
            </h3>
            <div className="space-y-0">
              <div className="group flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b-minimal border-lightBorder dark:border-darkBorder cursor-pointer">
                <div className="transition-transform duration-500 ease-out md:group-hover:translate-x-4">
                  <h4 className="text-lg md:text-xl font-bold text-lightMain dark:text-darkMain">
                    Judul Seminar
                  </h4>
                  <p className="text-xs text-lightMuted dark:text-darkMuted mt-1 font-medium">
                    Penyelenggara
                  </p>
                </div>
                <p className="text-sm font-medium text-lightMuted dark:text-darkMuted mt-2 md:mt-0 transition-transform duration-500 ease-out md:group-hover:-translate-x-4">
                  2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

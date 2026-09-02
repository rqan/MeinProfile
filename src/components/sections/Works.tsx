export function Works() {
  return (
    <section
      id="works"
      className="w-full px-6 md:px-20 py-32 border-b-minimal border-lightBorder dark:border-darkBorder"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-32 items-start">
        <div className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-lightMuted dark:text-darkMuted w-32 shrink-0">
          (04) Works
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Project 1 */}
          <a href="https://github.com/rqan/mantapdeh" className="group block">
            <div className="w-full aspect-[4/3] bg-[#E5E5E5] dark:bg-[#1E1E1E] mb-6 overflow-hidden flex items-center justify-center p-8 transition-colors">
              <span className="display-font text-4xl text-lightBorder dark:text-darkBorder group-hover:scale-110 transition-transform duration-700">
                01
              </span>
            </div>
            <h4 className="text-xl font-bold text-lightMain dark:text-darkMain mb-2">
              Rumah Inovasi
            </h4>
            <p className="text-sm text-lightMuted dark:text-darkMuted font-medium">
              Website Pemerintah
            </p>
          </a>
          {/* Project 2 */}
          <a href="https://github.com/rqan/mantapdeh" className="group block">
            <div className="w-full aspect-[4/3] bg-[#E5E5E5] dark:bg-[#1E1E1E] mb-6 overflow-hidden flex items-center justify-center p-8 transition-colors">
              <span className="display-font text-4xl text-lightBorder dark:text-darkBorder group-hover:scale-110 transition-transform duration-700">
                02
              </span>
            </div>
            <h4 className="text-xl font-bold text-lightMain dark:text-darkMain mb-2">
              Toko Kulit
            </h4>
            <p className="text-sm text-lightMuted dark:text-darkMuted font-medium">
              Website Katalog UMKM
            </p>
          </a>
          {/* Project 3 */}
          <a href="https://github.com/rqan/Hotel-Management-System" className="group block">
            <div className="w-full aspect-[4/3] bg-[#E5E5E5] dark:bg-[#1E1E1E] mb-6 overflow-hidden flex items-center justify-center p-8 transition-colors">
              <span className="display-font text-4xl text-lightBorder dark:text-darkBorder group-hover:scale-110 transition-transform duration-700">
                03
              </span>
            </div>
            <h4 className="text-xl font-bold text-lightMain dark:text-darkMain mb-2">
              Hotel
            </h4>
            <p className="text-sm text-lightMuted dark:text-darkMuted font-medium">
              Website Manajemen Hotel
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

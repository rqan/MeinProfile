import Image from "next/image";

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
            <div className="w-full aspect-[4/3] bg-[#E5E5E5] dark:bg-[#1E1E1E] mb-6 overflow-hidden flex items-center justify-center relative transition-colors">
              <Image 
                src="/projects/rumah-inovasi.png" 
                alt="Rumah Inovasi"
                fill
                className="object-cover object-center scale-110 grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-125 transition-all duration-700"
              />
            </div>
            <h4 className="text-xl font-bold text-lightMain dark:text-darkMain mb-2">
              Rumah Inovasi
            </h4>
            <p className="text-sm text-lightMuted dark:text-darkMuted font-medium">
              Website Pemerintah
            </p>
          </a>
          {/* Project 2 */}
          <a href="https://toko-rafa.onrender.com/" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="w-full aspect-[4/3] bg-[#E5E5E5] dark:bg-[#1E1E1E] mb-6 overflow-hidden flex items-center justify-center relative transition-colors">
              <Image 
                src="/projects/toko-kulit.png" 
                alt="Toko Kulit"
                fill
                className="object-cover object-center scale-110 grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-125 transition-all duration-700"
              />
            </div>
            <h4 className="text-xl font-bold text-lightMain dark:text-darkMain mb-2">
              Toko Kulit
            </h4>
            <p className="text-sm text-lightMuted dark:text-darkMuted font-medium">
              Website Katalog UMKM
            </p>
          </a>
          {/* Project 3 */}
          <a href="https://github.com/rqan/MusiXoB" className="group block">
            <div className="w-full aspect-[4/3] bg-[#E5E5E5] dark:bg-[#1E1E1E] mb-6 overflow-hidden flex items-center justify-center relative transition-colors">
              <Image 
                src="/projects/musixob.png" 
                alt="MusiXoB"
                fill
                className="object-cover object-center scale-110 grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-125 transition-all duration-700"
              />
            </div>
            <h4 className="text-xl font-bold text-lightMain dark:text-darkMain mb-2">
              MusiXoB
            </h4>
            <p className="text-sm text-lightMuted dark:text-darkMuted font-medium">
              Aplikasi Pemutar Musik
            </p>
          </a>
          {/* Project 4 */}
          <a href="https://rdewarental.rf.gd/" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="w-full aspect-[4/3] bg-[#E5E5E5] dark:bg-[#1E1E1E] mb-6 overflow-hidden flex items-center justify-center relative transition-colors">
              <Image 
                src="/projects/rdewa-rental.png" 
                alt="RDewa Rental"
                fill
                className="object-cover object-center scale-110 grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-125 transition-all duration-700"
              />
            </div>
            <h4 className="text-xl font-bold text-lightMain dark:text-darkMain mb-2">
              RDewa Rental
            </h4>
            <p className="text-sm text-lightMuted dark:text-darkMuted font-medium">
              Website Rental
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

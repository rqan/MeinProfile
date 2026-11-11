import Link from "next/link";

const WA_LINK = "https://wa.me/6287777358853?text=Halo%20Regan%2C%20saya%20ingin%20mendiskusikan%20proyek%20digital.";

const services = [
  {
    id: "01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    label: "Website Development",
    title: "Pembuatan Website UMKM",
    description:
      "Pengembangan Landing Page dan Website Profil Bisnis yang responsif, modern, dan siap membantu digitalisasi usaha Anda.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "02",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    label: "Database Management",
    title: "Perancangan & Pengelolaan Database",
    description:
      "Desain arsitektur database yang efisien, aman, dan terstruktur menggunakan MySQL untuk performa aplikasi yang optimal.",
    tags: ["MySQL", "Normalisasi", "Indexing"],
  },
  {
    id: "03",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    label: "Automation & Scripting",
    title: "Automasi Web & Scripting",
    description:
      "Pembuatan script automasi dan web scraping menggunakan Python, Selenium, atau Playwright untuk mempercepat alur kerja digital Anda.",
    tags: ["Python", "Selenium", "Playwright"],
  },
];

export function Services() {
  return (
    <main className="w-full min-h-screen bg-lightBg dark:bg-darkBg text-lightMain dark:text-darkMain">
      {/* ── Top Nav Bar ── */}
      <nav className="w-full px-6 md:px-10 py-4 flex justify-between items-center border-b-minimal border-lightBorder dark:border-darkBorder">
        <Link
          href="/"
          className="display-font text-xl text-lightMain dark:text-darkMain hover:text-lightMuted dark:hover:text-darkMuted transition-colors"
        >
          REGAN DEWA
        </Link>
        <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.2em] uppercase text-lightMuted dark:text-darkMuted">
          Digital Solutions
        </span>
      </nav>

      {/* ── Header Section ── */}
      <header className="w-full px-6 md:px-20 pt-24 pb-20 border-b-minimal border-lightBorder dark:border-darkBorder">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-lightMuted dark:text-darkMuted mb-8">
            (00) Services
          </p>
          <h1 className="display-font text-[13vw] sm:text-[11vw] md:text-[8vw] lg:text-[6.5vw] leading-none text-lightMain dark:text-darkMain mb-8">
            DIGITAL
            <br />
            SOLUTIONS
            <br />& SERVICES
          </h1>
          <p className="text-base md:text-lg text-lightMuted dark:text-darkMuted font-medium max-w-xl leading-relaxed">
            Membantu mewujudkan kebutuhan digital Anda melalui solusi website,
            database, dan automasi.
          </p>
        </div>
      </header>

      {/* ── Service Cards Grid ── */}
      <section className="w-full px-6 md:px-20 py-24 border-b-minimal border-lightBorder dark:border-darkBorder">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, idx) => (
            <article
              key={service.id}
              className={`reveal-item flex flex-col p-8 md:p-10 border-lightBorder dark:border-darkBorder
                ${idx < services.length - 1 ? "border-b-minimal md:border-b-0 md:border-r-minimal" : ""}
                ${idx === services.length - 1 ? "border-b-0" : ""}
              `}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Icon + Label row */}
              <div className="flex items-center justify-between mb-10">
                <div className="text-lightMain dark:text-darkMain">
                  {service.icon}
                </div>
                <span className="display-font text-5xl md:text-6xl text-lightBorder dark:text-darkBorder">
                  {service.id}
                </span>
              </div>

              {/* Category label */}
              <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-lightMuted dark:text-darkMuted mb-3">
                {service.label}
              </p>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-lightMain dark:text-darkMain leading-snug mb-4">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-lightMuted dark:text-darkMuted font-medium leading-relaxed flex-1 mb-8">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 border border-lightBorder dark:border-darkBorder text-lightMuted dark:text-darkMuted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2 px-5 py-3 bg-lightMain dark:bg-darkMain text-lightBg dark:text-darkBg text-[9px] font-bold tracking-[0.2em] uppercase border border-lightMain dark:border-darkMain hover:bg-transparent hover:text-lightMain dark:hover:bg-transparent dark:hover:text-darkMain self-start"
              >
                Diskusi Proyek
                <span className="text-[11px]">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Global CTA ── */}
      <section className="w-full px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-lightMuted dark:text-darkMuted mb-4">
              Siap memulai?
            </p>
            <h2 className="display-font text-5xl md:text-7xl lg:text-8xl text-lightMain dark:text-darkMain leading-none">
              LET&apos;S
              <br />
              TALK.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-lightMain dark:bg-darkMain text-lightBg dark:text-darkBg text-[10px] font-bold tracking-[0.2em] uppercase border border-lightMain dark:border-darkMain hover:bg-transparent hover:text-lightMain dark:hover:bg-transparent dark:hover:text-darkMain"
            >
              WhatsApp ↗
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=regandewad@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-lightMain dark:text-darkMain text-[10px] font-bold tracking-[0.2em] uppercase border border-lightBorder dark:border-darkBorder hover:border-lightMain dark:hover:border-darkMain"
            >
              Email ↗
            </a>
            <Link
              href="/"
              className="btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-lightMuted dark:text-darkMuted text-[10px] font-bold tracking-[0.2em] uppercase border border-lightBorder dark:border-darkBorder hover:border-lightMain dark:hover:border-darkMain hover:text-lightMain dark:hover:text-darkMain"
            >
              ← Kembali
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full px-6 md:px-10 py-6 flex justify-between items-center border-t-minimal border-lightBorder dark:border-darkBorder">
        <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-lightMuted dark:text-darkMuted">
          REGANDEWA 2026©
        </span>
        <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-lightMuted dark:text-darkMuted">
          ALL RIGHTS RESERVED
        </span>
      </footer>
    </main>
  );
}

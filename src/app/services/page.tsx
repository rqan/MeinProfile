import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Digital Solutions & Services — Regan Dewa",
  description:
    "Layanan digital: pembuatan website UMKM, perancangan database MySQL, dan automasi web menggunakan Python, Selenium, Playwright.",
};

export default function ServicesPage() {
  return <Services />;
}

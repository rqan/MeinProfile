import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Works } from "@/components/sections/Works";
import { Skills } from "@/components/sections/Skills";
import { Certificates } from "@/components/sections/Certificates";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Experience />
      <Education />
      <Works />
      <Skills />
      <Certificates />
      <Footer />
    </>
  );
}

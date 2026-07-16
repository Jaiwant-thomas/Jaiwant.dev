import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

const Experience = dynamic(() =>
  import("@/components/sections/Experience").then((m) => m.Experience)
);
const Skills = dynamic(() => import("@/components/sections/Skills").then((m) => m.Skills));
const Stats = dynamic(() => import("@/components/sections/Stats").then((m) => m.Stats));
const Services = dynamic(() => import("@/components/sections/Services").then((m) => m.Services));
const WhyWorkWithMe = dynamic(() =>
  import("@/components/sections/WhyWorkWithMe").then((m) => m.WhyWorkWithMe)
);
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => m.Contact));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Stats />
      <Services />
      <WhyWorkWithMe />
      <Contact />
    </>
  );
}

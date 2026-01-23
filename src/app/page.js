"use client";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("@/components/Intro"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Education = dynamic(() => import("@/components/Education"), {
  ssr: false,
});
const Project = dynamic(() => import("@/components/Project"), { ssr: false });
const Touch = dynamic(() => import("@/components/Touch"), { ssr: false });

function page() {
  return (
    <div className="flex justify-center gap-2">
      <div className="w-full lg:w-1/2 h-auto p-2  space-y-1">
        <Intro />
        <About />
        <Skills />
        <Education />
        <Project />
        <Touch />
      </div>
    </div>
  );
}

export default page;





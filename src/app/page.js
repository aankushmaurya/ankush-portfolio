import AboutMeCode from "@/components/About";
import Educationclg from "@/components/Education";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Touch from "@/components/Touch";

function page() {
  return (
    <div className="flex justify-center gap-2">
      <div className="w-full lg:w-1/2 h-auto p-2  space-y-1">
        <Intro />
        <AboutMeCode />
        <Skills />
        <Educationclg />
        <Project />
        <Touch />
      </div>
    </div>
  );
}

export default page;





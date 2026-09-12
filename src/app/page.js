import AboutMeCode from "@/components/About";
import Educationclg from "@/components/Education";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Touch from "@/components/Touch";

// No client-component wrappers here — animations are driven by a global
// IntersectionObserver script in layout.js via plain CSS classes.
function page() {
  return (
    <div className="flex justify-center gap-2">
      <div className="w-full lg:w-1/2 h-auto p-2 space-y-1">
        <div className="animate-section anim-fadeUp"><Intro /></div>
        <div className="animate-section anim-fadeLeft"><AboutMeCode /></div>
        <div className="animate-section anim-fadeUp"><Skills /></div>
        <div className="animate-section anim-fadeRight"><Educationclg /></div>
        <div className="animate-section anim-fadeUp"><Project /></div>
        <div className="animate-section anim-fadeUp"><Touch /></div>
      </div>
    </div>
  );
}

export default page;

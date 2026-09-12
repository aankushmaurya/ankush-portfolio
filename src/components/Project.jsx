"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";

// Icon component map — avoids storing JSX in plain data objects (fixes SSR/prerender error)
const ICON_MAP = {
  NextJS: <SiNextdotjs className="text-white text-lg" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400 text-lg" />,
  MongoDB: <SiMongodb className="text-emerald-400 text-lg" />,
  HTML: <FaHtml5 className="text-orange-500 text-lg" />,
  JavaScript: <SiJavascript className="text-yellow-300 text-lg" />,
};

function Project() {
  const projects = [
    {
      id: "01",
      title: "Healthcare Platform",
      highlight: "Live Client Project",
      description:
        "Developed a full-featured hospital booking website for a live client using Next.js and MongoDB. The platform includes seamless online appointment scheduling, doctor listings, and a responsive UI — enabling patients to book consultations without phone calls.",
      image: "p1.png",
      altText:
        "Healthcare Platform – Hospital Booking Website built with Next.js, TailwindCSS and MongoDB",
      liveLink: "https://www.shivamakshayvat.in/",
      techStack: ["NextJS", "TailwindCSS", "MongoDB"],
    },
    {
      id: "02",
      title: "ResumeIQ",
      description:
        "An AI-powered ATS Resume Analyzer that parses resumes, matches them against job descriptions, and generates topic-wise interview questions. Built with vanilla HTML and JavaScript, it helps job seekers identify skill gaps and improve resume relevance for applicant tracking systems.",
      image: "p3.png",
      altText:
        "ResumeIQ – AI-powered ATS Resume Analyzer built with HTML and JavaScript",
      liveLink: "https://resume-iq-one-xi.vercel.app/",
      techStack: ["HTML", "JavaScript"],
    },
    {
      id: "03",
      title: "TryOnAI",
      description:
        "An AI-powered clothing visualization platform that generates realistic fashion models from product images. Built with Next.js and MongoDB, it allows clothing brands to visualize outfits on AI models — eliminating the need for expensive traditional photoshoots and accelerating product listings.",
      image: "p2.png",
      altText:
        "TryOnAI – AI Fashion Model Generator App built with Next.js, TailwindCSS and MongoDB",
      liveLink: "https://ai-cloth-model.vercel.app/",
      techStack: ["NextJS", "TailwindCSS", "MongoDB"],
    },
  ];

  return (
    <section
      id="projects"
      className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]/90 p-5 md:p-8 shadow-2xl"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-300 tracking-wide">Browse My Recent</p>
        <h2 className="text-4xl md:text-4xl font-extrabold text-pink-500 mt-2">
          Projects
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-pink-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Projects */}
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:p-6 shadow-lg hover:shadow-pink-500/10 transition duration-300"
          >
            <div
              className={`flex flex-col gap-6 md:gap-10 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-3">
                  <img
                    src={project.image}
                    alt={project.altText || project.title}
                    className="w-full h-64 sm:h-72 md:h-80 object-contain transition duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute top-4 left-4 px-4 py-1 rounded-full bg-black/60 border border-white/10 text-pink-400 font-bold text-sm">
                    {project.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-1">
                  {project.title}
                </h3>

                {project.highlight && (
                  <p className="text-sm md:text-base text-pink-300 font-medium mb-3">
                    {project.highlight}
                  </p>
                )}

                <p className="text-gray-300 leading-7 mb-5">
                  {project.description}
                </p>

                {/* Live Demo Button */}
                <div className="mb-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold hover:scale-105 transition duration-300 shadow-md"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((techName) => (
                    <div
                      key={techName}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-black/20 text-gray-200 hover:bg-white/10 transition duration-300"
                    >
                      {ICON_MAP[techName]}
                      <span className="text-sm font-semibold">{techName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
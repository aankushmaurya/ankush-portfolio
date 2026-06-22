import { FaExternalLinkAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiMongodb, SiTailwindcss, SiNextdotjs } from "react-icons/si";

function Project() {
  const projects = [
    {
      id: "01",
      title: "Healthcare Platform",
      highlight: "Live Client Project",
      description:
        "Developed a public-facing hospital website with seamless online appointment booking.",
      image: "p1.png",
      liveLink: "https://www.shivamakshayvat.in/",
      techStack: [
        { name: "NextJS", icon: <SiNextdotjs className="text-white text-lg" /> },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-sky-400 text-lg" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-emerald-400 text-lg" />,
        },
      ],
    },
    {
      id: "02",
      title: "TryOnAI",
      description:
        "AI-powered platform that generates realistic fashion models from clothing images, helping brands visualize outfits without traditional photoshoots.",
      image: "p2.png",
      liveLink: "https://ai-cloth-model.vercel.app/",
      techStack: [
        { name: "NextJS", icon: <SiNextdotjs className="text-white text-lg" /> },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className="text-sky-400 text-lg" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-emerald-400 text-lg" />,
        },
      ],
    },
    {
      id: "03",
      title: "QR Code Generator",
      description:
        "A QR Code Generator that converts text, URLs, and other information into scannable QR codes instantly.",
      image: "p3.png",
      liveLink: "https://your-project-link-2.com",
      techStack: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-lg" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-300 text-lg" />,
        },
      ],
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
        <h1 className="text-4xl md:text-4xl font-extrabold text-pink-500 mt-2">
          Projects
        </h1>
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
              className={`flex flex-col gap-6 md:gap-10 items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-72 md:h-80 object-contain transition duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute top-4 left-4 px-4 py-1 rounded-full bg-black/60 border border-white/10 text-pink-400 font-bold text-sm">
                    {project.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-1">
                  {project.title}
                </h2>

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
                  {project.techStack.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-black/20 text-gray-200 hover:bg-white/10 transition duration-300"
                    >
                      {tech.icon}
                      <span className="text-sm font-semibold">{tech.name}</span>
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
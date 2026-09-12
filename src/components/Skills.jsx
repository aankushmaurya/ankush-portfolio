"use client";

import { useEffect, useRef } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiExpress,
  SiDjango,
  SiSelenium,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiPrisma,
  SiCanva,
  SiPostman,
  SiShadcnui,
  SiSemrush,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandSocketIo, TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";

const skills = [
  { name: "JavaScript",  icon: IoLogoJavascript, color: "text-yellow-400" },
  { name: "TypeScript",  icon: SiTypescript,     color: "text-blue-500"   },
  { name: "React",       icon: FaReact,          color: "text-cyan-400"   },
  { name: "Next.js",     icon: TbBrandNextjs,    color: "text-white"      },
  { name: "Node.js",     icon: FaNodeJs,         color: "text-green-500"  },
  { name: "Express.js",  icon: SiExpress,        color: "text-gray-300"   },
  { name: "Python",      icon: FaPython,         color: "text-blue-400"   },
  { name: "MongoDB",     icon: SiMongodb,        color: "text-green-400"  },
  { name: "SQLite",      icon: SiSqlite,         color: "text-indigo-400" },
  { name: "Prisma",      icon: SiPrisma,         color: "text-fuchsia-400"},
  { name: "Tailwind",    icon: RiTailwindCssLine, color: "text-cyan-300"  },
  { name: "Shadcn UI",   icon: SiShadcnui,       color: "text-white"      },
  { name: "Docker",      icon: FaDocker,         color: "text-sky-400"    },
  { name: "AWS",         icon: FaAws,            color: "text-orange-400" },
  { name: "Postman",     icon: SiPostman,        color: "text-orange-500" },
  { name: "Git",         icon: FaGitAlt,         color: "text-orange-500" },
  { name: "GitHub",      icon: FaGithub,         color: "text-gray-100"   },
  { name: "C++",         icon: TbBrandCpp,       color: "text-blue-700"   },
  { name: "SEMrush",     icon: SiSemrush,        color: "text-orange-400" },
  { name: "Canva",       icon: SiCanva,          color: "text-pink-400"   },
];

export default function Skills() {
  const gridRef = useRef(null);

  // Stagger animate each skill item when grid comes into view
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = grid.querySelectorAll(".skill-grid-item");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add("skill-visible");
            }, i * 55); // 55ms stagger between each skill
          });
          observer.unobserve(grid);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-[#020617] to-[#020617]/60 p-6 sm:p-10 shadow-xl">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 mb-1">Explore my</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-500">Skills</h2>
        <div className="section-accent-line w-20 mx-auto mt-3 rounded-full" />
      </div>

      {/* SKILLS GRID */}
      <div
        ref={gridRef}
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-6 place-items-center"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="skill-grid-item skill-card flex flex-col items-center gap-2 text-[11px] sm:text-xs text-gray-300 p-3 rounded-xl border border-white/5 bg-white/[0.02] w-full"
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <Icon className={skill.color} size={30} />
              <span className="text-center leading-tight font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

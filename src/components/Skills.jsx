"use client";

import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiSelenium } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { SiCanva } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "React Native", icon: FaReact, color: "text-sky-400" },
  { name: "Nextjs", icon: TbBrandNextjs, color: "text-white" },
  { name: "NodeJs", icon: FaNodeJs, color: "text-green-500" },
  { name: "ExpressJs", icon: SiExpress, color: "text-gray-300" },
  { name: "Socket.io", icon: TbBrandSocketIo, color: "text-indigo-400" },
  { name: "Django", icon: SiDjango, color: "text-emerald-600" },
  { name: "Python", icon: FaPython, color: "text-blue-400" },
  { name: "Selenium", icon: SiSelenium, color: "text-purple-400" },
  { name: "Mongodb", icon: SiMongodb, color: "text-green-400" },
  { name: "Postgresql", icon: SiPostgresql, color: "text-sky-500" },
  { name: "Sqlite", icon: SiSqlite, color: "text-indigo-400" },
  { name: "Tailwind CSS", icon: RiTailwindCssLine, color: "text-cyan-300" },
  { name: "Prisma", icon: SiPrisma, color: "text-fuchsia-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-600" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Github", icon: FaGithub, color: "text-gray-100" },
  { name: "C++", icon: TbBrandCpp, color: "text-blue-700" },
  { name: "Canva", icon: SiCanva, color: "text-pink-400" },
];

export default function Skills() {
  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-[#020617] to-[#020617]/60 p-10 shadow-xl">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400">Explore my</p>
        <h2 className="text-4xl font-bold text-pink-500">Skills</h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 place-items-center">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-sm text-gray-200 hover:scale-105 transition-transform duration-200"
            >
              <Icon size={48} className={skill.color} />
              <span className="text-center">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

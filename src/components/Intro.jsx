"use client";
import { MapPin } from "lucide-react";
import TopBar from "./Topbar";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Intro() {
  return (
<section
  className="
    relative
    rounded-2xl
    border border-white/10
    bg-linear-to-br from-[#020617] via-[#050b1d] to-black
    p-5 shadow-xl
    overflow-hidden
  "
>

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full" />
      </div>

      <TopBar />

      <div className="relative max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-16">
        {/* PROFILE IMAGE */}
        <div className="shrink-0">
          <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-[#3b557d]">
            <img
              src="/me.jpeg"
              alt="Portrait of Ankush Maurya"
              width={224}
              height={224}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-gray-400 mb-2">hey, this is</p>

          <h1
            id="intro-heading"
            className="text-5xl font-bold mb-2 text-pink-500"
          >
            Ankush Maurya
          </h1>

          <p className="text-purple-300 mb-6">@a.mauryaankush</p>

          {/* BIO */}
          <div className="text-gray-100 max-w-xl leading-relaxed space-y-4 mb-6">
            <p>
              One who knows frontend is a frontend developer, one who knows
              backend is a backend developer and one who doesn&apos;t know both
              is a full stack developer.{" "}
              <span className="text-gray-400">– JK</span>
            </p>

            <p>
              Hi there! 👋 I&apos;m a full-stack developer who enjoys dabbling
              in both frontend and backend, but let&apos;s be real — the backend
              is where the magic (and my heart) truly resides.
            </p>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <MapPin className="size-4 animate-pulse " aria-hidden="true" />
            <span>Lucknow, India</span>
          </div>

          {/* AVAILABILITY */}
          <div className="  flex items-center gap-2 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className=" text-gray-400 ">
              Available for new projects
            </span>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-5 text-xl text-gray-300">
            <a
              href="https://www.linkedin.com/in/ankush-maurya-0841b3265/"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              aria-label="Instagram profile"
              className=" hover:text-pink-500 transition"
            >
              <LuInstagram />
            </a>

            <a
              href="https://x.com/Ankush666914"
              aria-label="Twitter profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <BsTwitterX />
            </a>

            <a
              href="https://github.com/ankushmaurya8840"
              aria-label="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ankushmaurya406@gmail.com"
              aria-label="Send email"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

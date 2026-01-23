"use client";
import { Mail, Phone, Copy, MessageCircle } from "lucide-react";
import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function ContactInfo() {
  const [copied, setCopied] = useState("");

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-[#020617] to-[#020617]/60 p-5 shadow-xl">
      {/* HEADER */}
      <div className="w-full flex justify-center">
        <div className="inline-flex flex-col items-center gap-1 mb-6">
          <span className="px-6 py-2 rounded-full text-white font-medium bg-linear-to-r from-pink-500 to-orange-400">
            Get in touch
          </span>
          <span className="text-sm text-gray-400">With Me</span>
        </div>
      </div>

      <p className="text-gray-400 mb-10 leading-relaxed text-center sm:text-left">
        What's next? Feel free to reach out me if you're looking for a developer,
        have a query, or simply want to connect.
      </p>

      {/* EMAIL */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-white/10">
        <Mail className="text-white shrink-0" size={28} />

        <div className="flex-1 space-y-3 w-full">
          {["a.mauryaankush@gmail.com", "ankushmaurya406@gmail.com"].map(
            (email) => (
              <div
                key={email}
                className="flex items-center justify-between gap-3"
              >
                <a
                  href={`mailto:${email}`}
                  className="text-white text-sm sm:text-lg font-semibold break-all"
                >
                  {email}
                </a>

                <button
                  onClick={() => copyText(email)}
                  className="text-gray-400 hover:text-white transition shrink-0"
                >
                  <Copy size={18} />
                </button>
              </div>
            )
          )}

          {copied && (
            <span className="text-sm text-green-400">
              Copied to clipboard ✓
            </span>
          )}
        </div>
      </div>

      {/* PHONE */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6">
        <Phone className="text-white shrink-0" size={28} />

        <a
          href="tel:+916393450671"
          className="text-white text-sm sm:text-lg font-semibold tracking-wide"
        >
          +91 6393450671
        </a>

        <div className="flex gap-3 sm:ml-auto mt-2 sm:mt-0">
          <a
            href="tel:+916393450671"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            title="Call"
          >
            📞
          </a>

          <a
            href="https://wa.me/916393450671"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition"
            title="WhatsApp"
          >
            <MessageCircle size={18} className="text-green-400" />
          </a>

          <button
            onClick={() => copyText("+916393450671")}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            title="Copy number"
          >
            <Copy size={18} className="text-gray-300" />
          </button>
        </div>
      </div>

      <div className="my-8 border-t border-white/10"></div>

      {/* SOCIALS */}
      <div className="mt-5 flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-5 text-xl text-gray-400">
          <a
            href="https://www.linkedin.com/in/ankush-maurya-0841b3265/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaLinkedinIn />
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            <LuInstagram />
          </a>

          <a
            href="https://x.com/Ankush666914"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <BsTwitterX />
          </a>

          <a
            href="https://github.com/ankushmaurya8840"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ankushmaurya406@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <SiGmail />
          </a>
        </div>

        <span className="text-xs text-gray-400 text-center">
          © 2025–2026 | a.mauryaankush
        </span>
      </div>
    </div>
  );
}

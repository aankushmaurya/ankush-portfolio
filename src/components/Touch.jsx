"use client";
import { Mail, Phone, Copy, Check, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { SiGmail, SiWhatsapp } from "react-icons/si";

export default function Touch() {
  const [copied, setCopied] = useState("");

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-linear-to-br from-[#020617] to-[#020617]/60 p-4 sm:p-5 shadow-xl relative overflow-hidden">
      {/* Background glow for premium feel */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/20 blur-[100px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="w-full flex justify-center">
        <div className="inline-flex flex-col items-center gap-1.5 mb-4">
          <span className="px-5 py-1.5 rounded-full text-white font-medium bg-linear-to-r from-pink-500 to-orange-400 shadow-lg shadow-pink-500/20 text-sm">
            Get in touch
          </span>
          <span className="text-xs sm:text-sm text-gray-400">With Me</span>
        </div>
      </div>

      <p className="text-gray-400 mb-5 leading-relaxed text-center sm:text-left text-xs sm:text-sm">
        What's next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>

      <div className="space-y-4">
        {/* EMAIL SECTION */}
        <div className="flex flex-col gap-2.5 pb-4 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-pink-400 shadow-inner">
              <Mail size={18} />
            </div>
            <h3 className="text-white font-medium text-base tracking-wide">Email</h3>
          </div>

          <div className="flex flex-col gap-2 sm:pl-[2.75rem]">
            {["a.mauryaankush@gmail.com", "ankushmaurya406@gmail.com"].map(
              (email) => (
                <div
                  key={email}
                  className="group flex flex-row items-center justify-between gap-2 p-2 sm:p-2.5 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                >
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-300 text-xs sm:text-sm font-medium truncate flex-1 hover:text-pink-400 transition-colors"
                  >
                    {email}
                  </a>

                  <button
                    onClick={() => copyText(email)}
                    className="flex items-center justify-center p-1.5 rounded-md bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 transition-all shrink-0"
                    title="Copy Email"
                  >
                    {copied === email ? (
                      <CheckCircle2 size={16} className="text-green-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* PHONE SECTION */}
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-orange-400 shadow-inner">
              <Phone size={18} />
            </div>
            <h3 className="text-white font-medium text-base tracking-wide">Phone</h3>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-2 sm:p-2.5 bg-white/5 border border-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 sm:ml-[2.75rem]">
            <a
              href="tel:+916393450671"
              className="text-gray-300 text-xs sm:text-sm font-medium tracking-wider hover:text-orange-400 transition-colors"
            >
              +91 6393450671
            </a>

            <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end pt-1.5 sm:pt-0 border-t border-white/5 sm:border-none mt-1 sm:mt-0">
              <a
                href="tel:+916393450671"
                className="p-1.5 rounded-md bg-black/40 text-gray-400 hover:text-blue-400 hover:bg-black/60 transition-all"
                title="Call"
              >
                <Phone size={16} />
              </a>

              <a
                href="https://wa.me/916393450671"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md bg-black/40 text-green-500 hover:text-green-400 hover:bg-black/60 transition-all"
                title="WhatsApp"
              >
                <SiWhatsapp size={16} />
              </a>

              <button
                onClick={() => copyText("+916393450671")}
                className="p-1.5 rounded-md bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 transition-all"
                title="Copy Number"
              >
                {copied === "+916393450671" ? (
                  <CheckCircle2 size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 border-t border-white/5"></div>

      {/* SOCIALS */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-lg text-gray-400">
          <a
            href="https://www.linkedin.com/in/mauryaankush"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-pink-500 hover:scale-110 transition-all"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="https://www.instagram.com/mr.unstopable0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-pink-500 hover:scale-110 transition-all"
          >
            <LuInstagram size={18} />
          </a>

          <a
            href="https://github.com/aankushmaurya"
            aria-label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-pink-500 hover:scale-110 transition-all"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=a.mauryaankush@gmail.com"
            aria-label="Send email"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-pink-500 hover:scale-110 transition-all"
          >
            <SiGmail size={18} />
          </a>
        </div>

        <span className="text-[10px] font-mono tracking-wider text-gray-500 text-center mt-1">
          © 2025–2026 | a.mauryaankush
        </span>
      </div>
    </div>
  );
}

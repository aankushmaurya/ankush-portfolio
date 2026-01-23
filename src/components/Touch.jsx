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
    <div
      className="rounded-2xl
    border border-white/10
    bg-linear-to-br from-[#020617] to-[#020617]/60 p-5 shadow-xl"
    >
      <div className="w-full flex justify-center">
        <div className="inline-flex flex-col items-center gap-1 mb-6">
          <span
            className="px-6 py-2 rounded-full text-white font-medium
        bg-linear-to-r from-pink-500 to-orange-400"
          >
            Get in touch
          </span>
          <span className="text-sm text-gray-400">With Me</span>
        </div>
      </div>

      <p className="text-gray-400 mb-10 leading-relaxed">
        What's next? Feel free to reach out me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>

      {/* EMAILS */}
      <div className="flex items-start gap-6 pb-6 border-b border-white/10">
        <Mail className="text-white mt-5" size={30} />

        <div className="flex-1 space-y-3">
          {["a.mauryaankush@gmail.com", "ankushmaurya406@gmail.com"].map(
            (email) => (
              <div
                key={email}
                className="flex items-center justify-between group"
              >
                <a
                  href={`mailto:${email}`}
                  className="text-white text-lg font-semibold tracking-wide"
                >
                  {email}
                </a>

                <button
                  onClick={() => copyText(email)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <Copy size={18} />
                </button>
              </div>
            ),
          )}

          {copied && (
            <span className="text-sm text-green-400">
              Copied to clipboard ✓
            </span>
          )}
        </div>
      </div>

      {/* PHONE */}
      <div className="flex items-center gap-6 pt-6">
        <Phone className="text-white" size={30} />

        <a
          href="tel:+916393450671"
          className="text-white text-lg font-semibold tracking-wide"
        >
          +91 6393450671
        </a>

        {/* ACTION ICONS */}
        <div className="flex gap-4 ml-auto">
          {/* CALL */}
          <a
            href="tel:+916393450671"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            title="Call"
          >
            📞
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/916393450671"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition"
            title="Message on WhatsApp"
          >
            <MessageCircle size={18} className="text-green-400" />
          </a>

          {/* COPY */}
          <button
            onClick={() => copyText("+916393450671")}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
            title="Copy number"
          >
            <Copy size={18} className="text-gray-300" />
          </button>
        </div>
      </div>
      {/* DIVIDER */}
      <div className="my-8 border-t border-white/10"></div>

      <div className="mt-5 flex flex-col items-center gap-3">
        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-5 text-xl text-gray-300">
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
            className="hover:text-pink-500 transition"
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
        <span className="text-xs text-gray-400 text-center gap-3">
          © 2025–2026 | a.mauryaankush
        </span>
      </div>
    </div>
  );
}

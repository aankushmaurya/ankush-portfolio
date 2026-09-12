"use client";
import { Mail, Phone, Copy, Check, CheckCircle2, ExternalLink, Send } from "lucide-react";
import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { SiGmail, SiWhatsapp } from "react-icons/si";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mauryaankush",
    icon: FaLinkedinIn,
    color: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mr.unstopable0/",
    icon: LuInstagram,
    color: "hover:text-pink-400 hover:bg-pink-400/10 hover:border-pink-400/30",
  },
  {
    label: "GitHub",
    href: "https://github.com/aankushmaurya",
    icon: FaGithub,
    color: "hover:text-white hover:bg-white/10 hover:border-white/30",
  },
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=a.mauryaankush@gmail.com",
    icon: SiGmail,
    color: "hover:text-red-400 hover:bg-red-400/10 hover:border-red-400/30",
  },
];

export default function Touch() {
  const [copied, setCopied] = useState("");

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-linear-to-br from-[#020617] to-[#0a0f1e] p-5 sm:p-6 shadow-xl overflow-hidden">

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-pink-500/10 blur-[80px] rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-blue-500/8 blur-[70px] rounded-full" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-6">
        <p className="text-sm text-gray-400 mb-1">Let&apos;s work together</p>
        <h2 className="text-3xl font-bold text-pink-500">Get In Touch</h2>
        <div className="section-accent-line w-20 mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 text-sm leading-relaxed mt-4 max-w-xs mx-auto">
          Looking for a developer, have a query, or simply want to connect? I&apos;m always open to new opportunities.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="relative space-y-3 mb-5">

        {/* Email Card */}
        <div className="contact-card rounded-xl border border-white/8 bg-white/[0.03] p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20">
              <Mail size={18} className="text-pink-400" />
            </div>
            <h3 className="text-base font-semibold text-gray-100">Email</h3>
          </div>
          <div className="space-y-2">
            {["a.mauryaankush@gmail.com", "ankushmaurya406@gmail.com"].map((email) => (
              <div
                key={email}
                className="group flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-black/20 border border-white/5 hover:border-white/10 hover:bg-black/30 transition-all duration-200"
              >
                <a
                  href={`mailto:${email}`}
                  className="text-gray-200 text-sm font-mono truncate flex-1 hover:text-pink-400 transition-colors"
                >
                  {email}
                </a>
                <button
                  onClick={() => copyText(email)}
                  className="btn-press shrink-0 p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  title="Copy Email"
                  aria-label={`Copy ${email}`}
                >
                  {copied === email ? (
                    <CheckCircle2 size={17} className="text-green-400" />
                  ) : (
                    <Copy size={17} />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Phone Card */}
        <div className="contact-card rounded-xl border border-white/8 bg-white/[0.03] p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <Phone size={18} className="text-orange-400" />
            </div>
            <h3 className="text-base font-semibold text-gray-100">Phone</h3>
          </div>
          <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-black/20 border border-white/5 hover:border-white/10 hover:bg-black/30 transition-all duration-200">
            <a
              href="tel:+916393450671"
              className="text-gray-200 text-sm font-mono tracking-wider hover:text-orange-400 transition-colors"
            >
              +91 6393450671
            </a>
            <div className="flex items-center gap-1.5">
              <a
                href="https://wa.me/916393450671"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press p-1.5 rounded-md text-green-500 hover:bg-green-500/10 transition-all"
                title="WhatsApp"
                aria-label="Contact on WhatsApp"
              >
                <SiWhatsapp size={17} />
              </a>
              <button
                onClick={() => copyText("+916393450671")}
                className="btn-press p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                title="Copy Number"
                aria-label="Copy phone number"
              >
                {copied === "+916393450671" ? (
                  <CheckCircle2 size={17} className="text-green-400" />
                ) : (
                  <Copy size={17} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative section-accent-line mb-5" />

      {/* Social Links */}
      <div className="relative">
        <p className="text-center text-xs text-gray-500 mb-3 uppercase tracking-widest">Find me on</p>
        <div className="flex justify-center gap-3 flex-wrap">
          {socials.map(({ label, href, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`btn-press flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-gray-400 text-sm font-medium transition-all duration-250 ${color}`}
            >
              <Icon size={15} />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="relative text-center text-[10px] font-mono tracking-widest text-gray-600 mt-6">
        © 2025–2026 · Ankush Maurya · All rights reserved
      </p>
    </div>
  );
}

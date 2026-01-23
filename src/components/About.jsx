"use client";

import { FiFolder } from "react-icons/fi";
import { BsPlayFill } from "react-icons/bs";
import { X, Minus } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutMeCode() {
  const fullOutput = ` Hey, this is Ankush 👋

Location: Lucknow, India
Role: Full-Stack Developer

I enjoy building scalable backend systems
and crafting smooth, responsive frontends.

I believe clean architecture, performance,
and reliability define great software.

Status: Open to exciting opportunities 🚀
`;

  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [compiling, setCompiling] = useState(false);
  const [showOutput, setShowOutput] = useState(true);

  useEffect(() => {
    if (!running) return;

    setOutput("");
    setShowOutput(true);
    setCompiling(true);
    const compileTimeout = setTimeout(() => {
      setCompiling(false);

      let index = 0;
      const interval = setInterval(() => {
        setOutput((prev) => prev + fullOutput[index]);
        index++;

        if (index >= fullOutput.length) {
          clearInterval(interval);
          setRunning(false);
        }
      }, 22);
    }, 1200);

    return () => clearTimeout(compileTimeout);
  }, [running]);

  return (
    <div className="flex justify-center gap-1 px-2">
      <div className="w-full  rounded-2xl overflow-hidden border border-white/10 shadow-xl">
      
        <div
          className="flex items-center justify-between px-6 py-3
          bg-linear-to-br from-[#020617] via-[#050b1d] to-black
          border-b border-white/10"
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />

            <div className="flex items-center gap-2 text-sm text-white font-medium">
              <FiFolder className="text-yellow-300" />
              About_Me.py
            </div>
          </div>

          <button
            onClick={() => setRunning(true)}
            disabled={running}
            className="flex items-center gap-1 px-4 py-1.5
              border border-white/20 rounded-lg text-sm text-white
              hover:bg-white hover:text-black transition disabled:opacity-50"
          >
            <BsPlayFill /> RUN
          </button>
        </div>

        {/* CODE AREA (BIGGER + JELLYFISH FEEL) */}
        <pre className="p-8 text-sm md:text-[15px] font-mono leading-relaxed bg-[#0d111a] text-[#adbac7]">
          <span className="text-purple-400">class</span>{" "}
          <span className="text-cyan-300">Freelancer</span>:{"\n"}{" "}
          <span className="text-purple-400">def</span>{" "}
          <span className="text-yellow-300">__init__</span>(self):
          {"\n"} self.name = <span className="text-green-400">"Ankush"</span>
          {"\n"} self.location ={" "}
          <span className="text-green-400">"Lucknow, India"</span>
          {"\n"} self.role ={" "}
          <span className="text-green-400">"Full-Stack Developer"</span>
          {"\n\n"} <span className="text-purple-400">def</span>{" "}
          <span className="text-yellow-300">display_profile</span>(self):
          {"\n"} <span className="text-blue-400">print</span>(f"Hey, this is{" "}
          {self.name}")
          {"\n"} <span className="text-blue-400">print</span>(self.location)
          {"\n"} <span className="text-blue-400">print</span>(self.role)
          {"\n\n"}freelancer = <span className="text-cyan-300">Freelancer</span>
          ()
          {"\n"}freelancer.
          <span className="text-yellow-300">display_profile</span>()
        </pre>

        {/* OUTPUT */}
        {(output || compiling) && showOutput && (
          <div className="border-t border-white/10 bg-[#0d111a]">
            {/* OUTPUT HEADER */}
            <div className="flex justify-between items-center px-4 py-2 text-xs text-gray-400">
              <span>Program Output</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowOutput(false)}
                  className="hover:text-white"
                  title="Minimize"
                >
                  <Minus size={14} />
                </button>
                <button
                  onClick={() => setOutput("")}
                  className="hover:text-white"
                  title="Close"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            <pre className="px-6 pb-6 text-sm font-mono text-green-400 whitespace-pre-wrap">
              {compiling ? "Compiling program...\n\n" : output}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

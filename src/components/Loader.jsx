"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const duration = 1500; // 1.5 seconds
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        // Start fade out animation
        setFadeOut(true);
        // Remove from DOM after fade out completes
        setTimeout(() => setLoading(false), 500);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo container with a subtle pulse effect */}
        <div className="relative w-28 h-28 mb-8 overflow-hidden rounded-full animate-pulse shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <Image
            src="/Mylogo.jpeg"
            alt="Ankush Maurya Logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Premium Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gray-500 via-white to-gray-500 transition-all duration-[30ms] ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading text */}
        <p className="mt-4 text-xs tracking-[0.2em] text-gray-400 uppercase font-mono">
          {progress === 100 ? "Ready" : "Loading"}
        </p>
      </div>
    </div>
  );
}

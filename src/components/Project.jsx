import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

function Project() {
  return (
    <section
      className="
        rounded-2xl
        border border-white/10
        bg-linear-to-br from-[#020617] to-[#020617]/60
        p-5 shadow-xl
      "
    >
      {/* Heading */}
      <div className="text-center mb-6">
        <p className="text-gray-100">Browse My Recents</p>
        <h1 className="text-4xl font-bold text-pink-500">
          Projects
        </h1>
      </div>

      {/* Image + Content */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        
        {/* Image */}
        <div className="flex-1 order-1 md:order-0">
          <img
            src="p1.png"
            alt="project"
            className="w-full h-full object-cover rounded-lg border-4 border-blue-900"
          />
        </div>

        {/* Content */}
        <div className="flex-1 order-2 md:order-0">
          <h1 className="text-3xl font-bold text-orange-500 mb-2">
            MovementMeter
          </h1>

          <p className="text-gray-400 mb-3">
            “Track your movement journey with real-time countdowns and
            goal-focused progress insights.”
          </p>

          <a
            className="text-gray-100 flex items-center gap-2
            hover:text-blue-800 hover:underline underline-offset-1"
            target="_blank"
            href="https://movement-meter.vercel.app/"
          >
            https://movement-meter.vercel.app/
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* 🔥 Tech Stack (Always below, centered) */}
      <div className="flex justify-center gap-3 flex-wrap">
        
        <div className="flex items-center gap-1 px-4 py-2
          rounded-lg border border-white/10 bg-black/5
          hover:bg-white/10 transition">
          <FaNodeJs className="text-green-500" />
          <span className="text-sm font-bold text-gray-200">NodeJS</span>
        </div>

        <div className="flex items-center gap-1 px-4 py-2
          rounded-lg border border-white/10 bg-black/5
          hover:bg-white/10 transition">
          <SiExpress className="text-gray-200" />
          <span className="text-sm font-bold text-gray-200">ExpressJS</span>
        </div>

        <div className="flex items-center gap-1 px-4 py-2
          rounded-lg border border-white/10 bg-black/5
          hover:bg-white/10 transition">
          <SiMongodb className="text-green-400" />
          <span className="text-sm font-bold text-gray-200">MongoDB</span>
        </div>

      </div>
    </section>
  );
}

export default Project;

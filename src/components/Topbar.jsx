
export default function TopBar() {
  return (
    <>
      <header className="w-full">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center shrink-0">
            <img
              src="/Mylogo.jpeg"
              alt="Logo"
              className="h-10 md:h-12 w-auto object-contain rounded-full shadow-lg border border-white/10"
            />
          </div>
          <nav className="flex items-center gap-4 sm:gap-6 text-sm text-gray-100">
            <a
              href="#projects"
              className="hover:text-white transition whitespace-nowrap"
            >
              Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1-H80ITJ8vih9htlEa77gGTMQH5hKDdYL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
    px-3 py-2 sm:px-4
    rounded-md 
    bg-white/5
    border border-white/10
    hover:border-pink-500 
    hover:text-white 
    transition
    whitespace-nowrap
  "
            >
              Download CV
            </a>
          </nav>
        </div>
      </header>

      {/* DIVIDER like reference image */}
      <div className="h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
    </>
  );
}

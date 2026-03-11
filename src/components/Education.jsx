function Education() {
  return <div>Education</div>;
}

export default function Educationclg() {
  return (
    <section
      className="
    rounded-2xl
    border border-white/10
    bg-linear-to-br from-[#020617] to-[#020617]/60 p-5 shadow-xl "
    >
      <h1 className="text-center text-4xl font-bold text-pink-500 mb-5">
        Education
      </h1>
       {/* <div className="w-40  h-1 bg-linear-to-r from-pink-500 to-blue-500 mx-auto mt-4 rounded-full"></div> */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="shrink-0">
          <img
            src="clg.jpeg"
            alt="Institute of Engineering & Technology, Lucknow"
            className="
          w-20 h-20
          rounded-full
          border border-gray-400
          object-cover
        "
          />
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-gray-100">
            BN College of Engineering & Technology, Lucknow - 226201
          </h3>

          <p className="text-gray-300">
            Bachelor of Technology – B.Tech, Computer Science & Engineering
          </p>

          <p className="text-sm text-gray-300 mt-1">Nov 2022 – Sep 2026</p>
        </div>
      </div>
    </section>
  );
}

// @flow strict
"use client";

const certificates = [
  {
    id: 1,
    title: "How to Read Statistics as a PRO",
    image: "/certificate/cert1.png",
    issuer: "Big Data Institute",
    date: "April 2026",
  },
  {
    id: 2,
    title: "AI Tools for Tourism",
    image: "/certificate/cert2.png",
    issuer: "Big Data Institute",
    date: "March 2026",
  },
  {
    id: 3,
    title: "UX/UI Design",
    image: "/certificate/cert3.png",
    issuer: "Burapha University",
    date: "February 2023",
  },
  {
    id: 4,
    title: "Microsoft Excel Techniques",
    image: "/certificate/cert4.png",
    issuer: "Burapha University",
    date: "November 2022",
  },
  {
    id: 5,
    title: "Python Programming",
    image: "/certificate/cert5.png",
    issuer: "Olanlab",
    date: "January 2022",
  },
];

function Certificate() {
  // duplicate list เพื่อให้ loop ต่อเนื่อง
  const doubled = [...certificates, ...certificates];

  return (
    <div id="certificate" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Auto-scroll container */}
      <div className="overflow-hidden relative">
        {/* fade ซ้าย-ขวา */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#0a1f0e] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0a1f0e] to-transparent z-10 pointer-events-none"></div>

        <div
          className="flex gap-6 w-max"
          style={{
            animation: "scrollLeft 20s linear infinite",
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
        >
          {doubled.map((cert, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-64 lg:w-72 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:z-10"
            >
              <div className="rounded-xl overflow-hidden border border-[#2d2d6b] bg-[#0d1224] shadow-lg group-hover:shadow-violet-500/30 group-hover:border-violet-500 transition-all duration-300">
                <div className="w-full h-44 lg:h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 lg:p-4">
                  <p className="text-[#16f2b3] font-semibold text-sm lg:text-base line-clamp-2">
                    {cert.title}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default Certificate;

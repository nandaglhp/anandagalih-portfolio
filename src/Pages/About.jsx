import React, { useEffect, memo, useMemo } from "react";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f9a8d4] to-[#fbcfe8]" data-aos="zoom-in-up" data-aos-duration="600">
        About Me
      </h2>
    </div>
    <p className="mt-2 text-pink-200/70 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2" data-aos="zoom-in-up" data-aos-duration="800">
      <Sparkles className="w-5 h-5 text-pink-300" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-pink-300" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-pink-300 via-pink-400 to-pink-500 rounded-full blur-2xl animate-pulse-slow opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(249,168,212,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 via-transparent to-pink-300/20 z-10 transition-opacity duration-700 group-hover:opacity-100" />
          <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-[#4b3339]/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-pink-100" />
        </div>
        <span className="text-4xl font-bold text-white">{value}</span>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wider text-pink-200 mb-2">{label}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-pink-100/70">{description}</p>
          <ArrowUpRight className="w-4 h-4 text-pink-200/50 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");

    const startDate = new Date("2021-11-06");
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() - (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience,
    };
  }, []);

  useEffect(() => {
    const initAOS = () => AOS.init({ once: false });
    initAOS();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const statsData = useMemo(
    () => [
      {
        icon: Code,
        color: "from-[#f9a8d4] to-[#fbcfe8]",
        value: totalProjects,
        label: "Total Projects",
        description: "Innovative web solutions crafted",
        animation: "fade-right",
      },
      {
        icon: Award,
        color: "from-[#fbcfe8] to-[#f9a8d4]",
        value: totalCertificates,
        label: "Certificates",
        description: "Professional skills validated",
        animation: "fade-up",
      },
      {
        icon: Globe,
        color: "from-[#f9a8d4] to-[#fbcfe8]",
        value: YearExperience,
        label: "Years of Experience",
        description: "Continuous learning journey",
        animation: "fade-left",
      },
    ],
    [totalProjects, totalCertificates, YearExperience]
  );

  return (
    <div className="min-h-screen bg-[#3a2a31] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] text-white py-16 relative" id="About">
      {/* background glow lembut */}
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/10 rounded-full blur-[160px]"></div>

      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* TEXT */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" data-aos="fade-right" data-aos-duration="1000">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9a8d4] to-[#fbcfe8]">Hello, I'm</span>
              <span className="block mt-2 text-pink-100">Ananda Galih Pratiwi</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-pink-100/80 leading-relaxed text-justify pb-4 sm:pb-0" data-aos="fade-right" data-aos-duration="1500">
              Certified Data Analyst with one year of experience in real-world data projects and internships. Passionate about transforming raw data into meaningful insights and creating visually engaging dashboards for decision-making.
            </p>

            <div className="relative bg-pink-100/5 border border-pink-200/20 rounded-2xl p-4 my-6 backdrop-blur-md shadow-lg overflow-hidden" data-aos="fade-up" data-aos-duration="1700">
              <blockquote className="text-pink-100/80 italic font-medium text-sm text-center lg:text-left">“Empowering business decisions through data-driven insights.”</blockquote>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4">
              <a href="https://drive.google.com/drive/folders/1BOm51Grsabb3zj6Xk27K-iRwI1zITcpo" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#f9a8d4] to-[#fbcfe8] text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/30 flex items-center gap-2">
                  <FileText className="w-5 h-5" /> Download CV
                </button>
              </a>

              <a href="#Portofolio">
                <button className="px-6 py-3 rounded-lg border border-pink-200/40 text-pink-200 font-medium transition-all duration-300 hover:scale-105 hover:bg-pink-200/10 flex items-center gap-2">
                  <Code className="w-5 h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <ProfileImage />
        </div>

        {/* STAT CARDS */}
        <a href="#Portofolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes spin-slower {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);

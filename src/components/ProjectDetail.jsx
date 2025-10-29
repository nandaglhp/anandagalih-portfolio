import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Code2, Star, ChevronRight, Layers, Layout, Globe, Package, Cpu, Code } from "lucide-react";
import Swal from "sweetalert2";
import CardProject from "../components/CardProject";

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];

  return (
    <div
      className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 
      bg-gradient-to-r from-pink-200/10 to-rose-200/10 
      rounded-xl border border-pink-300/20 
      hover:border-pink-400/40 
      transition-all duration-300 cursor-default"
    >
      <div
        className="absolute inset-0 
        bg-gradient-to-r from-pink-300/0 to-rose-300/0 
        group-hover:from-pink-300/10 group-hover:to-rose-300/10 
        transition-all duration-500"
      />

      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-pink-400 group-hover:text-pink-300 transition-colors" />
        <span className="text-xs md:text-sm font-medium text-rose-200/90 group-hover:text-white transition-colors">{tech}</span>
      </div>
    </div>
  );
};

const FeatureItem = ({ feature }) => {
  return (
    <li
      className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl 
      hover:bg-white/10 transition-all duration-300 
      border border-transparent hover:border-pink-300/20"
    >
      {/* Bullet Icon */}
      <div className="relative mt-2">
        {/* Glow effect */}
        <div
          className="absolute -inset-1 bg-gradient-to-r 
          from-pink-300/20 to-rose-300/20 
          rounded-full blur 
          group-hover:opacity-100 opacity-0 
          transition-opacity duration-300"
        />

        {/* Core dot */}
        <div
          className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full 
          bg-gradient-to-r from-pink-400 to-rose-400 
          group-hover:scale-125 transition-transform duration-300"
        />
      </div>

      {/* Text */}
      <span className="text-sm md:text-base text-rose-100/80 group-hover:text-white transition-colors">{feature}</span>
    </li>
  );
};

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/10 via-rose-300/5 to-purple-200/10 opacity-60 blur-2xl z-0" />

      {/* Tech Stack Card */}
      <div
        className="relative z-10 flex items-center space-x-2 md:space-x-3 
        bg-white/5 p-2 md:p-3 rounded-lg border border-pink-400/20 
        transition-all duration-300 hover:scale-105 
        hover:border-pink-400/50 hover:shadow-[0_0_20px_rgba(255,192,203,0.2)]"
      >
        <div className="bg-pink-400/20 p-1.5 md:p-2 rounded-full">
          <Code2 className="text-pink-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-pink-200">{techStackCount}</div>
          <div className="text-[10px] md:text-xs text-rose-200/70">Total Teknologi</div>
        </div>
      </div>

      {/* Features Card */}
      <div
        className="relative z-10 flex items-center space-x-2 md:space-x-3 
        bg-white/5 p-2 md:p-3 rounded-lg border border-rose-400/20 
        transition-all duration-300 hover:scale-105 
        hover:border-rose-400/50 hover:shadow-[0_0_20px_rgba(255,182,193,0.2)]"
      >
        <div className="bg-rose-400/20 p-1.5 md:p-2 rounded-full">
          <Layers className="text-rose-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-rose-200">{featuresCount}</div>
          <div className="text-[10px] md:text-xs text-rose-200/70">Fitur Utama</div>
        </div>
      </div>
    </div>
  );
};

const handleGithubClick = (githubLink) => {
  if (githubLink === "Private") {
    Swal.fire({
      icon: "info",
      title: "Source Code Private",
      text: "Maaf, source code untuk proyek ini bersifat privat.",
      confirmButtonText: "Mengerti",
      confirmButtonColor: "#f9a8d4", // soft pink
      background: "#fff0f6", // pastel pink-white background
      color: "#4b4453", // elegant dark text
      iconColor: "#f472b6", // pink accent
      customClass: {
        popup: "rounded-2xl shadow-lg border border-pink-200",
        confirmButton: "rounded-lg px-4 py-2 font-medium",
        title: "font-semibold text-lg",
      },
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const selectedProject = storedProjects.find((p) => String(p.id) === id);

    if (selectedProject) {
      const enhancedProject = {
        ...selectedProject,
        Features: selectedProject.Features || [],
        TechStack: selectedProject.TechStack || [],
        Github: selectedProject.Github || "https://github.com/ANANDA GALIH",
      };
      setProject(enhancedProject);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-white">Loading Project...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#3a2a31] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] text-white relative">
      <div className="absolute -inset-[10px] opacity-20">
        <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          {/* Breadcrumb + Back */}
          <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/70 hover:bg-white text-[#4b4453] transition-all duration-300 rounded-xl border border-pink-200 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-gray-500">
              <span>Projects</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="font-medium truncate">{project.Title}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-[#f9a8d4] via-[#f472b6] to-[#d946ef] bg-clip-text text-transparent leading-tight">{project.Title}</h1>
                <div className="relative h-1 w-16 md:w-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f9a8d4] to-[#f472b6] rounded-full animate-pulse" />
                </div>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-[#4b4453]/80">{project.Description}</p>

              <ProjectStats project={project} />

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-100 to-pink-200 text-[#4b4453] rounded-xl border border-pink-300 hover:shadow-md hover:shadow-pink-100 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform text-pink-500" />
                  <span className="font-medium">Live Demo</span>
                </a>

                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => !handleGithubClick(project.Github) && e.preventDefault()}
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-100 to-fuchsia-100 text-[#4b4453] rounded-xl border border-pink-300 hover:shadow-md hover:shadow-pink-100 transition-all duration-300"
                >
                  <Github className="w-4 h-4 group-hover:rotate-12 transition-transform text-pink-500" />
                  <span className="font-medium">Github</span>
                </a>
              </div>

              {/* Technologies */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2 text-[#4b4453]">
                  <Code2 className="w-4 h-4 text-pink-500" />
                  Technologies Used
                </h3>
                {project.TechStack.length > 0 ? (
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.TechStack.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 opacity-70">No technologies added.</p>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 md:space-y-10 animate-slideInRight">
              <div className="relative rounded-2xl overflow-hidden border border-pink-200 shadow-xl group bg-white/70">
                <img src={`/${project.Img}`} alt={project.Title} className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105" onLoad={() => setIsImageLoaded(true)} />
              </div>
              {/* Key Features */}
              <div className=" backdrop-blur-xl rounded-2xl p-8 border border-pink-200 space-y-6 hover:shadow-lg hover:shadow-pink-100 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#4b4453] flex items-center gap-3">
                  <Star className="w-5 h-5 text-pink-400" />
                  Key Features
                </h3>
                {project.Features.length > 0 ? (
                  <ul className="list-none space-y-2">
                    {project.Features.map((feature, index) => (
                      <FeatureItem key={index} feature={feature} />
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 opacity-70">No features added.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;

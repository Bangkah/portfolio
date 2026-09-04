import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  Star,
  ChevronRight,
  Layers,
  Layout,
  Globe,
  Package,
  Cpu,
  Code,
} from "lucide-react";
import Swal from "sweetalert2";
import { toSlug } from "../utils/slug";

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
    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#ffcf33] text-[#111111] font-bold text-xs uppercase border-2 border-[#111111] shadow-[2px_2px_0px_#111111] rounded-sm">
      <Icon className="w-4 h-4 stroke-[2.5]" />
      <span>{tech}</span>
    </div>
  );
};

const FeatureItem = ({ feature }) => {
  return (
    <li className="flex items-start space-x-3 p-3 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] rounded-sm font-semibold text-sm text-[#111111]">
      <div className="mt-1 w-2.5 h-2.5 bg-[#ff5c58] border border-[#111111] shrink-0" />
      <span>{feature}</span>
    </li>
  );
};

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white border-3 border-[#111111] shadow-[5px_5px_0px_#111111] rounded-sm">
      <div className="flex items-center space-x-3 bg-[#f4f0e6] p-3 border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
        <div className="bg-[#ffcf33] p-2 border border-[#111111]">
          <Code2 className="text-[#111111] w-5 h-5 stroke-[2.5]" />
        </div>
        <div>
          <div className="text-xl font-black text-[#111111] leading-none">
            {techStackCount}
          </div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#111111]/70 mt-1">
            Total Teknologi
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 bg-[#f4f0e6] p-3 border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
        <div className="bg-[#4fc3f7] p-2 border border-[#111111]">
          <Layers className="text-[#111111] w-5 h-5 stroke-[2.5]" />
        </div>
        <div>
          <div className="text-xl font-black text-[#111111] leading-none">
            {featuresCount}
          </div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#111111]/70 mt-1">
            Fitur Utama
          </div>
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
      confirmButtonColor: "#ffcf33",
      background: "#ffffff",
      color: "#111111",
      customClass: {
        popup: "border-4 border-[#111111] shadow-[8px_8px_0px_#111111] rounded-none",
        confirmButton: "border-2 border-[#111111] text-[#111111] font-bold shadow-[2px_2px_0px_#111111]",
      },
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isActive = true;
    window.scrollTo(0, 0);

    const normalizeProject = (item) => ({
      ...item,
      Title: item.Title || item.title,
      Description: item.Description || item.description,
      Img: item.Img || item.img,
      Features: item.Features || item.features || [],
      TechStack: item.TechStack || item.tech_stack || [],
      Link: item.Link || item.link || "",
      Github: item.Github || item.github || "",
    });

    const loadProject = async () => {
      let selectedProject;
      try {
        const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
        selectedProject = storedProjects.map(normalizeProject).find((item) => toSlug(item.Title) === slug);
      } catch (error) {
        console.warn("Failed to read cached projects:", error);
      }

      if (!isActive) return;
      if (selectedProject) setProject(selectedProject);
      else setNotFound(true);
    };

    loadProject();
    return () => { isActive = false; };
  }, [slug]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-[#f4f0e6] flex items-center justify-center px-6 text-center">
        <div className="bg-white border-4 border-[#111111] shadow-[8px_8px_0px_#111111] p-8 space-y-4 max-w-sm">
          <h2 className="text-2xl font-black uppercase text-[#111111]">Project Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-[#ffcf33] text-[#111111] border-2 border-[#111111] font-bold uppercase text-xs shadow-[3px_3px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            Back to portfolio
          </button>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f4f0e6] flex items-center justify-center">
        <div className="text-center space-y-4 bg-white p-8 border-4 border-[#111111] shadow-[8px_8px_0px_#111111]">
          <div className="w-12 h-12 mx-auto bg-[#ffcf33] border-4 border-[#111111] animate-spin" />
          <h2 className="text-xl font-black uppercase text-[#111111]">Loading Project...</h2>
        </div>
      </div>
    );
  }

  const projectUrl = `https://mdhiyaulatha.me/project/${toSlug(project.Title)}`;

  return (
    <>
      <Helmet>
        <title>{project.Title} — Muhammad Dhiyaul atha</title>
        <meta
          name="description"
          content={
            project.Description
              ? project.Description.slice(0, 155)
              : `Project ${project.Title} oleh Muhammad Dhiyaul atha — Fullstack Developer & DevOps.`
          }
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={projectUrl} />
      </Helmet>

      <div className="min-h-screen bg-[#f4f0e6] text-[#111111] relative overflow-hidden py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Top Nav / Breadcrumbs Neo-Brutalist */}
          <div className="flex items-center space-x-2 md:space-x-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white border-2 border-[#111111] shadow-[3px_3px_0px_#111111] font-extrabold uppercase text-xs hover:bg-[#ffcf33] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <ArrowLeft className="w-4 h-4 stroke-[3]" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#111111]/70">
              <span>Projects</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
              <span className="text-[#111111] truncate bg-[#ffcf33] px-2 py-0.5 border border-[#111111]">
                {project.Title}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Details */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#111111]">
                  {project.Title}
                </h1>
                <div className="h-2 w-24 bg-[#ff5c58] border-2 border-[#111111] shadow-[2px_2px_0px_#111111]" />
              </div>

              <div className="bg-white p-5 border-3 border-[#111111] shadow-[5px_5px_0px_#111111] rounded-sm">
                <p className="text-sm md:text-base font-semibold leading-relaxed text-[#111111]">
                  {project.Description}
                </p>
              </div>

              <ProjectStats project={project} />

              {/* Action Links */}
              <div className="flex flex-wrap gap-4">
                {project.Link && (
                  <a
                    href={project.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffcf33] text-[#111111] font-black uppercase text-xs border-3 border-[#111111] shadow-[4px_4px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                  >
                    <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.Github && (
                  <a
                    href={project.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white font-black uppercase text-xs border-3 border-[#111111] shadow-[4px_4px_0px_#ff5c58] hover:bg-[#ff5c58] hover:text-[#111111] hover:shadow-[4px_4px_0px_#111111] transition-all"
                    onClick={(e) =>
                      !handleGithubClick(project.Github) && e.preventDefault()
                    }
                  >
                    <Github className="w-4 h-4 stroke-[2.5]" />
                    <span>Github</span>
                  </a>
                )}
              </div>

              {/* Technologies Used */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase tracking-wider text-[#111111] flex items-center gap-2">
                  <Code2 className="w-5 h-5 stroke-[2.5]" />
                  Technologies Used
                </h3>
                {project.TechStack.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {project.TechStack.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
                    ))}
                  </div>
                ) : (
                  <p className="text-xs font-bold uppercase text-[#111111]/50">
                    No technologies added.
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Image & Features */}
            <div className="space-y-6 md:space-y-8">
              {/* Image Frame */}
              <div className="bg-white border-4 border-[#111111] shadow-[8px_8px_0px_#111111] p-2 rounded-sm overflow-hidden">
                <img
                  src={project.Img}
                  alt={project.Title}
                  className="w-full h-auto object-cover border-2 border-[#111111] aspect-[16/10]"
                />
              </div>

              {/* Key Features */}
              <div className="bg-white border-3 border-[#111111] shadow-[5px_5px_0px_#111111] p-6 space-y-4 rounded-sm">
                <h3 className="text-lg font-black uppercase tracking-wider text-[#111111] flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#ffcf33] stroke-[2.5] fill-[#ffcf33]" />
                  Key Features
                </h3>
                {project.Features.length > 0 ? (
                  <ul className="space-y-3">
                    {project.Features.map((feature, index) => (
                      <FeatureItem key={index} feature={feature} />
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs font-bold uppercase text-[#111111]/50">
                    No features added.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
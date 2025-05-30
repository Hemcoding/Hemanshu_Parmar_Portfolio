import React, { useState } from "react";
import {
  Github,
  Eye,
  Play,
  TabletSmartphone,
  X,
  MonitorSmartphone,
} from "lucide-react";
import { Box, IconButton, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  width: "90%",
  maxWidth: "800px",
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "BarberQueue",
      description:
        "A full-stack dashboard for managing barber shop appointments, staff, earnings, and services.",
      longDescription:
        "BarberQueue is a smart appointment management app designed for barbershops. It streamlines booking, tracks earnings, manages staff and services, and keeps customers updated with real-time notifications — all in one easy-to-use dashboard.",
      image: "src/assets/braberqueue.png",
      technologies: ["React Native", "NodeJS", "MongoDB", "ExpressJS"],
      categories: ["Full Stack", "Frontend", "Backend"],
      videoUrl: "src/assets/BarberQueue_vdo.mp4",
      color: "from-orange-400 to-orange-500",
      icon: <TabletSmartphone className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern developer portfolio showcasing creativity, code, and craftsmanship.",
      longDescription:
        "My portfolio website reflects my journey as a full-stack developer, combining clean UI with powerful functionality. Built with React, it features dark mode, project showcases, and a dynamic contact form to connect with potential collaborators and recruiters.",
      image: "src/assets/portfolio.png",
      technologies: ["ReactJS", "Tailwind", "EmailJS", "Shadcn-UI"],
      categories: ["Frontend"],
      liveUrl: "https://Hemanshu_Parmar_Portfolio.netlify.app",
      githubUrl: "https://github.com/Hemcoding/Hemanshu_Parmar_Portfolio",
      color: "from-orange-400 to-orange-500",
      icon: <MonitorSmartphone className="w-6 h-6" />,
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Design"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [videoLink, setVideoLink] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const getFilteredProjects = () => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((project) =>
      project.categories.includes(selectedCategory)
    );
  };

  const filteredProjects = getFilteredProjects();

  const handleVideo = (url) => {
    setVideoLink(url);
    setShowVideo(true);
  };

  return (
    <section className="w-full bg-white dark:bg-gray-700 pb-20 ">
      <div className="container mx-auto w-3/4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 pt-10 leading-tight">
            Creative Work
          </h2>
          <p className="text-gray-500 dark:text-gray-400 sm:w-3/4 lg:w-3/5 mx-auto leading-relaxed">
            Crafting digital experiences through innovative solutions and
            thoughtful design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
                selectedCategory === category
                  ? "text-white"
                  : "text-gray-700 dark:text-white hover:text-orange-400 dark:hover:text-orange-400 "
              }`}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-400 opacity-100"
                    : "border-1 border-orange-400 opacity-0 group-hover:opacity-20 group-hover:bg-orange-400"
                }`}
              />
              <span className="relative z-10 flex items-center gap-2">
                {category}
                {category !== "All" && (
                  <span className="text-xs text-orange-400 dark:text-orange-400 dark:bg-white bg-gray-100 px-2 py-1 rounded-full">
                    {
                      projects.filter((p) => p.categories.includes(category))
                        .length
                    }
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-white dark:bg-gray-800 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-gray-100 dark:hover:shadow-orange-400/20 group-hover:transform group-hover:scale-[1.02] border border-gray-200 dark:border-gray-700 group-hover:border-orange-400/30">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute top-4 left-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        {project.icon}
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      {project.liveUrl ? (
                        <div className="flex items-center gap-1 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-500 px-3 py-1 rounded-full text-xs font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          Live
                        </div>
                      ) : project.githubUrl ? (
                        <div className="flex items-center gap-1 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-500 px-3 py-1 rounded-full text-xs font-medium">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          Code
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 bg-slate-500/20 backdrop-blur-sm border border-slate-400/30 text-slate-500 px-3 py-1 rounded-full text-xs font-medium">
                          <div className="w-2 h-2 bg-slate-500 rounded-full" />
                          Private
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.categories.map((category, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-2 py-1 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-700/50"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {hoveredCard === project.id
                        ? project.longDescription
                        : project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700/30 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${project.color} text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-105 active:scale-95`}
                        >
                          <Eye className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                      {project.videoUrl && (
                        <a
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${project.color} text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-105 active:scale-95 cursor-pointer`}
                          onClick={() => handleVideo(project.videoUrl)}
                        >
                          <Play className="w-4 h-4" />
                          Watch Video
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-transparent hover:bg-orange-400 text-orange-400 hover:text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 border border-orange-400 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-400/30"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-300 py-12">
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p>Try selecting a different category.</p>
          </div>
        )}

        <Modal open={showVideo} onClose={() => setShowVideo(false)}>
          <Box sx={style}>
            <div className="flex w-full justify-end">
              <IconButton onClick={() => setShowVideo(false)} sx={{}}>
                <X />
              </IconButton>
            </div>

            <Box sx={{ position: "relative", pt: "56.25%" /* 16:9 ratio */ }}>
              <iframe
                src={videoLink}
                title="Project Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  borderRadius: 20,
                }}
              />
            </Box>
          </Box>
        </Modal>
      </div>
    </section>
  );
};

export default ProjectsSection;

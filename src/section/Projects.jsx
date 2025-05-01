import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import portfolioImage from "../assets/The_Portfolio.png";
import proxyImage from "../assets/The_Proxy.png";
import fileManagerImage from "../assets/FMS_Portfolio.png";


const projects = [
    {
        name: "My Portfolio",
        image: portfolioImage,
        description: "Designed and developed a responsive personal portfolio website showcasing projects, skills, and experience. Features smooth scroll-triggered animations, interactive UI, and a functional contact form for direct communication. Optimized for performance and accessibility across all devices.",
        tech: ["React.js", "Tailwind CSS", "Framer-Motion", "JavaScript", "Node.js"],
        github: "https://github.com/yourname/weather-app",
        demo: "https://weatherapp-demo.vercel.app",
    },
    {
        name: "The Proxy",
        image: proxyImage,
        description: "A lightweight proxy server handling HTTP/HTTPS requests, with SSL/TLS support, request logging, and configurable ports, implemented for both Linux and Windows.",
        tech: ["C", "Socket Programming", "File Operations", "OpenSSL", "System Calls"],
        github: "https://github.com/yourname/portfolio",
        demo: "https://yourportfolio.vercel.app",
    },
    {
        name: "File Management System",
        image: fileManagerImage,
        description: " Built a terminal-based file manager with a color-coded interface to navigate, search, and manage files and directories. Included features like file operations (copy, move, delete), system information display, and search functionality, optimized for performance on both Windows and Linux environments.",
        tech: ["C", "Standard C libraries", "Terminal UI"],
        github: "https://github.com/yourname/chat-app",
        demo: "https://chatapp-demo.vercel.app",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 bg-gradient-to-br from-[#2C3E50] to-[#34495E] overflow-hidden text-white"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#3498DB]/30 rounded-full blur-[60px] animate-pulse z-0" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F1C40F]/20 rounded-full blur-[50px] animate-pulse z-0" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3498DB]/30 rounded-full blur-[60px] animate-pulse z-0" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#F1C40F]/20 rounded-full blur-[50px] animate-pulse z-0" />

            <div className="z-10 w-full flex justify-center">
                <h2 className="glass-heading-project text-3xl md:text-4xl font-bold text-center text-[#00f6ff] mb-12 bounce-element">
                    &lt;Projects /&gt;
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card bg-[#1F2937]/50 border border-cyan-300/30 rounded-xl backdrop-blur-md p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_#00f6ff] hover:border-cyan-400 group bounce-element"
                    >
                        <img
                            src={project.image}
                            alt={`${project.name} preview`}
                            className="h-36 w-full object-cover rounded-md mb-4 shadow-inner shadow-yellow-300/30"
                        />

                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:glow-animate-card-title">
                            {project.name}
                        </h3>

                        <p className="text-sm text-gray-300 mb-2">{project.description}</p>

                        <p className="text-sm text-gray-400 italic mb-4">
                            <span className="text-cyan-400 font-medium">Tech Stack:</span>{" "}
                            {project.tech.join(", ")}
                        </p>

                        <div className="flex gap-3 flex-wrap mt-auto">
                            {/* GitHub and Demo buttons... */}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Projects;

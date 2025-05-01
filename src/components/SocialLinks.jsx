import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialIcon = ({ href, icon, hoverColor, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-all duration-300 transform hover:scale-125 ${hoverColor}`}
        aria-label={label}
    >
        {icon}
    </a>
);

const SocialLinks = () => {
    return (
        <div
            className="
        fixed top-1/2 left-2 
        flex flex-col items-center 
        gap-4 p-3 
        bg-white/10 backdrop-blur-md border border-white/20 shadow-lg 
        rounded-r-xl transition-all duration-300 z-50

        md:left-2 md:p-4 md:gap-5 md:top-1/3
      "
        >
            <SocialIcon
                href="#"
                icon={<FaGithub className="text-lg md:text-2xl text-white" />}
                hoverColor="hover:text-[#F1C40F]"
                label="GitHub"
            />
            <SocialIcon
                href="#"
                icon={<FaLinkedin className="text-lg md:text-2xl text-white" />}
                hoverColor="hover:text-[#3498DB]"
                label="LinkedIn"
            />
            <SocialIcon
                href="#"
                icon={<FaSquareXTwitter className="text-lg md:text-2xl text-white" />}
                hoverColor="hover:text-[#1DA1F2]"
                label="Twitter (X)"
            />
        </div>
    );
};

export default SocialLinks;


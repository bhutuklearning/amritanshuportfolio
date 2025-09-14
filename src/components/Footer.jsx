
import React from "react";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full bg-[#2C3E50] text-white pt-5 pb-4 mt-0 border-t border-white/20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left: Name & Tagline */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold italic underline decoration-[#3498DB]">Amritanshu.</h2>
                    <p className="text-sm mt-1 text-[#F1C40F]">Made with 💖 and in hurry.</p>
                </div>

                {/* Center: Social Icons */}
                <div className="flex gap-6 text-2xl">
                    <a
                        href="https://github.com/bhutuklearning"
                        target="_blank"
                        className="hover:text-[#F1C40F] transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/amritanshu-goutam/"
                        target="_blank"
                        className="hover:text-[#3498DB] transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://x.com/Amritanshutwt"
                        target="_blank"
                        className="hover:text-[#F1C40F] transition-all duration-300"
                        aria-label="Twitter"
                    >
                        <FaSquareXTwitter />
                    </a>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-6 text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Amritanshu. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

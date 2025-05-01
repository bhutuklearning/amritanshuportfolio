import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/image.png"; // ✅ Update the path if needed

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuItems = [
        { label: "Home", link: "home" },
        { label: "About", link: "about" },
        { label: "Projects", link: "projects" },
        { label: "Contact", link: "contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 shadow-[0_0_10px_#F1C40F] transition-all duration-300 ${isScrolled
                ? "bg-white/10 backdrop-blur-md shadow-md border-b border-white/20"
                : "bg-gradient-to-r from-[#2C3E50] to-[#34495E]"
                }`}
        >
            <div className="flex justify-between items-center px-6 py-2 max-w-7xl mx-auto ">
                {/* Logo (click to scroll to home) */}
                <div
                    className="cursor-pointer flex-shrink-0"
                    onClick={() => {
                        const section = document.getElementById("home");
                        section?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-10 w-10 md:h-14 md:w-14 object-contain hover:scale-105 transition-transform duration-300 rounded-full"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-white font-semibold text-xl">
                    {menuItems.map(({ label, link }) => (
                        <li
                            key={label}
                            className="hover:text-yellow-400 cursor-pointer"
                            onClick={() => {
                                const section = document.getElementById(link);
                                section?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {label}
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div
                    className={`md:hidden p-2 rounded-md border-2 border-yellow-400 bg-[#1b2b3a] text-yellow-300 text-2xl cursor-pointer hover:scale-105 hover:bg-yellow-300 hover:text-[#1b2b3a] transition-all duration-300 font-['Press_Start_2P'] shadow-[0_0_10px_#F1C40F]`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#2C3E50] border-t border-white/20">
                    <ul className="flex flex-col items-center gap-4 py-4 text-white font-semibold text-lg">
                        {menuItems.map(({ label, link }) => (
                            <li
                                key={label}
                                className="hover:text-yellow-400 cursor-pointer"
                                onClick={() => {
                                    setIsOpen(false);
                                    const section = document.getElementById(link);
                                    section?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

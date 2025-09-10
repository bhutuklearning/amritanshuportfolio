import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa6";


const Home = () => {
    const messages = ["Fullstack Developer", "AI Explorer", "Curious Engineer"];
    const [displayText, setDisplayText] = useState("");
    const [msgIndex, setMsgIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const controls = useAnimation();
    const particlesRef = useRef([]);
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: false, amount: 0.3 });

    useEffect(() => {
        particlesRef.current = Array.from({ length: 40 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 8 + 1,
            duration: Math.random() * 25 + 15,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.1 + 0.05,
            speed: Math.random() * 0.5 + 0.5,
        }));
    }, []);

    useEffect(() => {
        const currentMsg = messages[msgIndex];
        const timeout = setTimeout(
            () => {
                if (!deleting && charIndex < currentMsg.length) {
                    setDisplayText(currentMsg.slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else if (!deleting && charIndex === currentMsg.length) {
                    setTimeout(() => setDeleting(true), 1500);
                } else if (deleting && charIndex > 0) {
                    setDisplayText(currentMsg.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else if (deleting && charIndex === 0) {
                    setDeleting(false);
                    setMsgIndex((msgIndex + 1) % messages.length);
                }
            },
            deleting ? 30 : 75
        );
        return () => clearTimeout(timeout);
    }, [charIndex, msgIndex, deleting]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const moveX = e.clientX / window.innerWidth - 0.5;
            const moveY = e.clientY / window.innerHeight - 0.5;
            controls.start({
                x: moveX * 20,
                y: moveY * 20,
                transition: { type: "spring", damping: 50 },
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [controls]);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section
            id="home"
            className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden bg-gradient-to-br from-[#2C3E50] to-[#34495E]"
        >
            {particlesRef.current.map((particle, index) => (
                <motion.div
                    key={index}
                    animate={controls}
                    className="absolute rounded-full bg-white opacity-10"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                    }}
                    initial={{ opacity: 0 }}
                    variants={{
                        animate: {
                            opacity: [0.05, 0.15, 0.05],
                            scale: [1, 1.3, 1],
                            x: [0, -15, 0, 15, 0],
                            y: [0, 15, 0, -15, 0],
                        }
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                />
            ))}

            {/* Decorative Glows */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#3498DB]/30 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F1C40F]/20 rounded-full blur-[70px] animate-pulse" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3498DB]/30 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#F1C40F]/20 rounded-full blur-[70px] animate-pulse" />

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-['Cinzel'] tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F1C40F] via-white to-[#3498DB]"
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.4, delay: 0.5 }}
                >
                    Amritanshu
                </motion.h1>

                <motion.div
                    className="h-16 md:h-20 mb-8 flex justify-center items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 1 }}
                >
                    <h2 className="text-2xl md:text-4xl font-light text-[#0bf7f7] tracking-wide font-['Raleway']">
                        {displayText}
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="inline-block w-1 ml-1 bg-[#F1C40F]"
                        ></motion.span>
                    </h2>
                </motion.div>

                <motion.div
                    ref={textRef}
                    className="text-base md:text-xl text-[#ECF0F1] max-w-2xl mx-auto mb-12 font-['Cormorant_Garamond'] italic"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    Architecting{" "}
                    <span className="text-[#F1C40F] font-medium">
                        digital masterpieces
                    </span>{" "}
                    where <span className="text-[#3498DB] font-medium">elegance</span>{" "}
                    meets{" "}
                    <span className="text-[#F1C40F] font-medium">functionality</span>.
                    Transforming complex challenges into seamless experiences with a focus
                    on <span className="text-[#3498DB] font-medium">innovation</span> and{" "}
                    <span className="text-[#F1C40F] font-medium">precision</span>.
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                >
                    <motion.a
                        href="https://drive.google.com/file/d/1RClc1ZT4ivcT4n-OGXpYaCDG4X_HqXar/view?usp=drive_link"
                        className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-md border border-yellow-400 hover:bg-yellow-300 transition duration-300 font-['Press_Start_2P'] text-xs sm:text-sm flex items-center gap-2"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        target="_blank"
                    >
                        Resume <FaArrowRight className="text-sm" />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="px-6 py-3 text-white font-bold border border-white rounded-md hover:bg-white hover:text-[#1b2b3a] transition duration-300 font-['Press_Start_2P'] text-xs sm:text-sm flex items-center gap-2"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>Let's Connect</span>
                        <FaArrowRight />
                    </motion.a>

                </motion.div>

                {/* <motion.div
                    className="mt-12 flex justify-center gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 2.3 }}
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-2xl text-white hover:text-[#3498DB] transition-colors" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-2xl text-white hover:text-[#3498DB] transition-colors" />
                    </a>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Home;

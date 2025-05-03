import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const greetings = [
    { text: "Welcome", color: "#FFD700" },
    { text: "सुस्वागतम्🙏", color: "#38BDF8" },
    // { text: "अभिनंदन", color: "#ffffff" }
];

const Preloader = ({ onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [fullTextIndex, setFullTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (charIndex < greetings[fullTextIndex].text.length) {
            const typingTimer = setTimeout(() => {
                setDisplayedText(prev => prev + greetings[fullTextIndex].text[charIndex]);
                setCharIndex(prev => prev + 1);
            }, 72);
            return () => clearTimeout(typingTimer);
        } else {
            const pauseTimer = setTimeout(() => {
                setDisplayedText('');
                setCharIndex(0);
                setFullTextIndex((prev) => (prev + 1) % greetings.length);
            }, 1400);
            return () => clearTimeout(pauseTimer);
        }
    }, [charIndex, fullTextIndex]);

    useEffect(() => {
        const endTimer = setTimeout(() => {
            setShow(false);
            if (onComplete) onComplete();
        }, 5400);
        return () => clearTimeout(endTimer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="text-3xl md:text-6xl font-bold font-orbitron glowing-text terminal-text"
                        style={{ color: greetings[fullTextIndex].color }}
                    >
                        {displayedText}
                        <span className="terminal-cursor">|</span>
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;

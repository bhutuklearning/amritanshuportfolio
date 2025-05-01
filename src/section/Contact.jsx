
import React, { useState } from "react";
import {
    UserIcon,
    EnvelopeIcon,
    ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [form, setForm] = useState({
        from_name: "",
        from_email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send("service_pftxlce", "template_hhkhww8", form, "Vu7EUakBOgYELHdMn")
            .then(() => {
                console.log("Success!");
                toast.success("Message sent successfully");
                setForm({ from_name: "", from_email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error:", error);
                toast.error("Something went wrong. Try again later.");
            });
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen flex items-center justify-center px-4 py-16 text-white bg-gradient-to-br from-[#2C3E50] to-[#34495E]"
        >
            {/* Glow Backgrounds */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#3498DB]/30 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F1C40F]/20 rounded-full blur-[70px] animate-pulse" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3498DB]/30 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#F1C40F]/20 rounded-full blur-[70px] animate-pulse" />

            <form
                onSubmit={handleSubmit}
                className="relative z-10 bg-[#1c2938]/80 backdrop-blur-sm p-8 rounded-lg w-full max-w-md space-y-6 shadow-2xl"
            >
                <div className="flex justify-center">
                    <EnvelopeIcon className="h-16 w-16 text-yellow-400 mb-4 animate-bounce" />
                </div>

                <div className="flex items-center bg-[#101b2a] px-3 py-2 rounded">
                    <UserIcon className="w-5 h-5 text-yellow-500 mr-2" />
                    <input
                        type="text"
                        name="from_name"
                        value={form.from_name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-transparent text-white w-full focus:outline-none"
                    />
                </div>

                <div className="flex items-center bg-[#101b2a] px-3 py-2 rounded">
                    <EnvelopeIcon className="w-5 h-5 text-yellow-500 mr-2" />
                    <input
                        type="email"
                        name="from_email"
                        value={form.from_email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className="bg-transparent text-white w-full focus:outline-none"
                    />
                </div>

                <div className="flex items-start bg-[#101b2a] px-3 py-2 rounded">
                    <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-yellow-500 mt-1 mr-2" />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        rows="4"
                        className="bg-transparent text-white w-full resize-none focus:outline-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-yellow-400 border-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-md transition duration-300 font-['Press_Start_2P'] text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                    <span>Send Message</span>
                    <FaArrowRight />
                </button>
            </form>

            {/* Toast Notification Container */}
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="colored"
                transition:Bounce
            />

        </section>
    );
};

export default Contact;


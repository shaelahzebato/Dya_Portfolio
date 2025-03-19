"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="">
            <nav className='max-sm:hidden w-full h-14 flex items-center justify-between px-3 bg-gray-50 text-gray-800'>
                <Link href="/" className="text-sm">
                    Curriculum Vitae
                </Link>
                <ul className="flex items-center gap-6 text-xs">
                    <li>
                        <button onClick={() => scrollToSection("about")} className="uppercase hover:text-purple-300 transition">
                        À propos de moi
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("cv")} className="uppercase hover:text-purple-300 transition">
                        CV
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("projects")} className="uppercase hover:text-purple-300 transition">
                        Projets
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("contact")} className="uppercase hover:text-purple-300 transition">
                        Contact
                        </button>
                    </li>
                </ul>
            </nav>

            <nav className="min-sm:hidden w-full h-14 flex items-center justify-between bg-gray-50 text-gray-800">
                <Link href="/" className="text-sm">
                    Curriculum Vitae
                </Link>
                <ul className="flex items-center gap-6 text-xs">
                    <li>
                        <button onClick={() => setIsOpen(!isOpen)} className="uppercase hover:text-purple-300 transition">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </li>
                </ul>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} className="fixed top-14 right-0 w-[95%] z-50 h-screen bg-gray-100 shadow-lg flex flex-col items-center gap-6 py-10 md:hidden" >
                        {["about", "cv", "projects", "contact"].map((section) => (
                            <button key={section} onClick={() => scrollToSection(section)} className="uppercase text-xs hover:text-purple-500 transition" >
                                {section === "about" ? "À propos de moi" : section.toUpperCase()}
                            </button>
                        ))}
                    </motion.div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
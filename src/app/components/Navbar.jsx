"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Fonction pour fermer le menu après un clic sur un lien
    const closeMenu = () => {
        setIsOpen(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            closeMenu();
        } else {
            console.warn(`L'élément avec l'ID "${id}" n'existe pas.`);
        }
    };
    

    return (
        <>
            {/* Grand écran */}
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

            {/* Pétit écran */}
            <nav className="min-sm:hidden w-full h-14 flex items-center justify-between bg-gray-50 text-gray-800">
                <Link href="/" className="text-sm font-poppins">
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
        </>
    )
}

export default Navbar;
"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Introducing from "./components/Introducing";
import AboutMe from "./components/AboutMe";
import Cv from "./components/Cv";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";


export default function Home() {
    const [navShadow, setNavShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setNavShadow(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /**
     * 
        const [navShadow, setNavShadow] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
            setNavShadow(window.scrollY > 50);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        <nav
            className={`fixed top-0 w-full z-50 transition-all ${
            navShadow ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <Navbar />
        </nav>

        {[
            { id: "about", component: <AboutMe /> },
            { id: "cv", component: <Cv /> },
            { id: "projects", component: <Projects /> },
            { id: "contact", component: <Contact /> },
          ].map(({ id, component }) => (
            <motion.section
              key={id}
              id={id}
              className="h-screen flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {component}
            </motion.section>
          ))}
     */
    return (
        <main className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
            <div className="w-[90%] container mx-auto flex flex-col  gap-6 py-6 px-6">
                <Navbar/>
                <div className="mt-28">
                    <Introducing/>
                </div>
                <div>
                    <motion.section
                        id="about"
                        className="h-screen flex items-center justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <AboutMe/>
                    </motion.section>

                    <motion.section
                        id="cv"
                        className="h-screen flex items-center justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Cv/>
                    </motion.section>

                    <motion.section
                        id="projects"
                        className="h-screen flex items-center justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Projects/>
                    </motion.section>

                    <motion.section
                        id="contact"
                        className="h-screen flex items-center justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Contact/>
                    </motion.section>
                </div>
                <Footer/>
            </div>
            <div className="sticky top-0 h-screen flex items-center justify-center bg-purple-300">
                <div className="relative flex flex-col items-center space-y-6">
                    <a 
                    href="/Shaélah_ZEBATO_CV2025.pdf" 
                    download 
                    className="absolute -right-20 -top-20 bg-purple-950 text-purple-400 text-lg py-3 px-6 rounded-lg shadow-lg transition-all hover:bg-purple-800 hover:text-white hover:scale-105"
                    >
                    Télécharger
                    </a>

                    <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] overflow-hidden shadow-xl transition-transform hover:scale-105">
                        <Image
                            src="/moi.JPG"
                            alt="Picture of me"
                            width={450}
                            height={450}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
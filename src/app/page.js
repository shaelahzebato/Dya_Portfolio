"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Introducing from "./components/Introducing";
import AboutMe from "./components/AboutMe";
import Cv from "./components/Cv";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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

    
    return (
        <>
            {/* Petit écran */}
            <main className="min-sm:hidden w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
                <div className="flex flex-col">
                    <div className="px-6">
                        <Navbar/>
                    </div>
                    <div className="h-[50%] py-56 flex items-center justify-center bg-purple-300">
                        <div className="relative flex flex-col items-center">
                            <a href="/Shaélah_ZEBATO_CV2025.pdf" download className="absolute md:-right-20 -top-16 bg-purple-950 text-purple-400 text-sm py-3 px-6 rounded-lg shadow-lg transition-all hover:bg-purple-800 hover:text-white hover:scale-105">
                                Télécharger Cv
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
                </div>
                
                <div className="w-[90%] container mx-auto flex flex-col gap-6 py-3 px-6">
                    <Introducing/>
                    <motion.section id="about" className="h-screen flex items-center justify-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                        <AboutMe/>
                    </motion.section>
                    <Cv/>
                    <motion.section id="projects" className="h-screen flex items-center justify-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                        <Projects/>
                    </motion.section>
                    <motion.section id="contact" className="h-screen flex items-center justify-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                        <Contact/>
                    </motion.section>
                    <Footer/>
                </div>
            </main>

            {/* Grand écran */}
            <main className="max-sm:hidden w-full min-h-screen grid grid-cols-1 md:grid-cols-2 md:grid-flow-row grid-flow-dense bg-gray-50">
                {/* Partie gauche */}
                <div className="w-[90%] container mx-auto flex flex-col gap-6 py-3 px-6">
                    <Navbar/>
                    <div className="w-[80%] container mx-auto">
                        <Introducing/>
                        {/* <motion.section id="about" className="h-screen flex items-center justify-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}> */}
                            <AboutMe/>
                        {/* </motion.section> */}
                        <Cv/>
                        {/* <motion.section id="projects" className="h-screen flex items-center justify-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}> */}
                            <Projects/>
                        {/* </motion.section> */}
                        {/* <motion.section id="contact" className="h-screen flex items-center justify-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}> */}
                            <Contact/>
                        {/* </motion.section> */}
                    </div>
                    <Footer/>
                </div>

                {/* Partie droite */}
                <div className="sticky top-0 h-screen flex items-center justify-center bg-purple-300">
                    <div className="relative flex flex-col items-center space-y-6">
                        <a href="/Shaélah_ZEBATO_CV2025.pdf" download className="absolute md:-right-20 -top-20 bg-purple-950 text-purple-400 text-lg py-3 px-6 rounded-lg shadow-lg transition-all hover:bg-purple-800 hover:text-white hover:scale-105">
                            Télécharger Cv
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
        </>
    );
}







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
    *
 */
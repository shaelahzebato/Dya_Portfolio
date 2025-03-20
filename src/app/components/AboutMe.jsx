import React from 'react'
import { motion } from "framer-motion";


function AboutMe() {
    return (
        <motion.section id="about" className="h-screen flex items-center justify-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <section className="w-full flex flex-col gap-10 text-gray-800">
                <div className="flex items-center space-x-4 max-sm:flex-col max-sm:justify-center">
                    <span className="text-lg font-semibold tracking-[0.4em] uppercase">
                        À PROPOS
                    </span>
                    <div className="w-full max-w-xs h-[2px] bg-gray-800"></div>
                </div>
                <p className='text-base/8'>
                    Développeuse d’applications web, passionnée par la création d'interfaces modernes et performantes. Forte d’une expérience de 2 ans dans le développement web, j’ai acquis une expertise en NextJS, ReactJS, JavaScript et TailwindCSS. J’ai travaillé sur plusieurs projets allant de la refonte d’interfaces à la création d’applications interactives, ce qui m’a permis d’affiner mes compétences en UI/UX, optimisation des performances et consommation d’API RESTful.
                </p>
            </section>
        </motion.section>
    )
}
export default AboutMe;
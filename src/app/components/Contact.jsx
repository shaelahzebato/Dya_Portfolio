import Link from 'next/link'
import { Phone, Mail, MapIcon } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.section id="contact" className="h-screen flex items-center justify-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <section className="w-full flex flex-col gap-10 text-gray-800 max-sm:text-sm">
                <div className="flex items-center space-x-4 max-sm:flex-col max-sm:justify-center">
                    <span className="text-lg font-semibold tracking-[0.4em] uppercase">
                        Contact
                    </span>
                    <div className="w-full max-w-xs h-[2px] bg-gray-800"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center space-x-2">
                        <strong className='max-sm:hidden'>Tél : </strong>
                        <strong className='min-sm:hidden'><Phone className="w-6 h-6 text-purple-300" /></strong>
                        <span>07 89 80 74 98</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <strong className='max-sm:hidden'>E-mail : </strong>
                        <strong className='min-sm:hidden'><Mail className="w-6 h-6 text-purple-300" /></strong>
                        <span>nadiakareneshaelah@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <strong className='max-sm:hidden'>Adresse : </strong>
                        <strong className='min-sm:hidden'><MapIcon className="w-6 h-6 text-purple-300" /></strong>
                        <span>Abidjan, Côte D'Ivoire</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Link href="https://www.linkedin.com" className="underline">LinkedIn</Link>
                        <Link href="https://github.com/" className="underline">Github</Link>
                        <Link href="https://www.facebook.com" className="underline">Facebook</Link>
                    </div>
                </div>
            </section>
        </motion.section>
    )
}

export default Contact
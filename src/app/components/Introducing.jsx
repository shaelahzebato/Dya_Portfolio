"use client"
import { Typewriter, Cursor } from "react-simple-typewriter";
import { Phone, Mail, LocateFixed } from "lucide-react";
import Link from "next/link";


function Introducing() {
    return (
        <section className="mt-24 text-gray-800">
            <div className="flex flex-col gap-4">
                <p className="text-lg text-gray-500">Hi, je suis</p>
                <h1 className="text-6xl font-bold text-purple-950 tracking-wider font-poppins">
                    <Typewriter typeSpeed={50} words={["Nadia", "Karène", "Shaélah", "ZÉBATO"]} loop={0}/>
                    <span><Cursor/></span>
                </h1>
                <p className="text-xl text-gray-500 tracking-widest">Développeuse Web</p>
            </div>
            <div className="mt-20 flex flex-col gap-2">
                <div className="flex items-center space-x-2 text-base max-sm:text-sm max-sm:justify-center">
                    <strong>Tél</strong>
                    <span>07 89 80 74 98</span>
                </div>
                <div className="flex items-center space-x-2 text-base max-sm:text-sm max-sm:justify-center">
                    <strong>Email</strong>
                    <span>nadiakareneshaelah@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-base max-sm:text-sm max-sm:justify-center">
                    <strong>Adresse</strong>
                    <span><span className='max-sm:hidden'>Abidjan</span><span className='min-sm:hidden'>Abj</span>, Côte D'Ivoire</span>
                </div>
                <div className="flex items-center space-x-2 text-base max-sm:mt-8 max-sm:text-sm max-sm:justify-center">
                    <Link href="https://www.linkedin.com" className="underline">LinkedIn</Link>
                    <span>•</span>
                    <Link href="https://github.com/" className="underline">Github</Link>
                    <span>•</span>
                    <Link href="https://www.facebook.com" className="underline">Facebook</Link>
                </div>
            </div>
        </section>
    )
}

export default Introducing;
"use client"
import Link from "next/link";

function Navbar() {

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className='w-full h-14 flex items-center justify-between text-gray-800'>
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
    )
}

export default Navbar
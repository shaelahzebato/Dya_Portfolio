import Link from 'next/link'
import React from 'react'

function Contact() {
    return (
        <section className="w-full flex flex-col gap-10 text-gray-800">
            <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold tracking-[0.4em] uppercase">
                    Contact
                </span>
                <div className="w-[300px] h-[2px] bg-gray-800"></div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                    <strong>Tél : </strong>
                    <span>07 89 80 74 98</span>
                </div>
                <div className="flex items-center space-x-2">
                    <strong>E-mail : </strong>
                    <span>nadiakareneshaelah@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <strong>Adresse : </strong>
                    <span>Abidjan, Côte D'Ivoire</span>
                </div>
                <div className="flex flex-col space-y-2">
                    <Link href="https://www.linkedin.com" className="underline">LinkedIn</Link>
                    <Link href="https://github.com/" className="underline">Github</Link>
                    <Link href="https://www.facebook.com" className="underline">Facebook</Link>
                </div>
            </div>
        </section>
    )
}

export default Contact
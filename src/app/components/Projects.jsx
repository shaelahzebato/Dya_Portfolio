import React from 'react'
import Link from 'next/link'

function Projects() {
    return (
        <section className='w-full flex flex-col gap-10 text-gray-800'>
            <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold tracking-[0.4em] uppercase">
                    Projets
                </span>
                <div className="w-[300px] h-[2px] bg-gray-800"></div>
            </div>
            <ul className="flex flex-col gap-6">
                <li className="py-4 border-b border-purple-950">
                    <h2 className='text-xs uppercase'>Projet 1</h2>
                    <Link href="/https://movies-search-project-nine.vercel.app/" className='mt-6'>Concerne un site pour la recherche de films.</Link>
                </li>
                <li className="py-4 border-b border-purple-950">
                    <h2 className='text-xs uppercase'>Projet 2</h2>
                    <Link href="/https://github.com/shaelahzebato/Movies-app-api" className='mt-6'>API adonisjs pour le backend du projet 1.</Link>
                </li>
                <li className="py-4 border-b border-purple-950">
                    <h2 className='text-xs uppercase'>Projet 3</h2>
                    <Link href="/budget-planning-app.vercel.app" className='mt-6'>Maquette d'une application de planification budgétaire.</Link>
                </li>
            </ul>
        </section>
    )
}

export default Projects
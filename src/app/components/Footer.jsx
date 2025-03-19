import React from 'react'

function Footer() {
    return (
        <section className='flex flex-col space-y-4 text-gray-400 text-xs'>
            <ul className='flex max-sm:flex-col max-sm:gap-2 items-center justify-center gap-4'>
                <li>Politique de cookies</li>
                <li>Politique de confidentialité</li>
                <li>Mentions légales</li>
            </ul>
            <p className='text-center'>© 2025 par Nadia Karène Shaélah. Créé avec Nextjs, Reactjs et Tailwindcss.</p>
        </section>
    )
}

export default Footer
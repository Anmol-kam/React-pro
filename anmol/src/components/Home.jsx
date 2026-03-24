import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import a1 from "../image/bg12.png"


export default function Home() {
    const menu = [
        { href: "/", Name: "Home" },
        { href: "/", Name: "About" },
        { href: "/", Name: "Resume" },
        { href: "/", Name: "Portfolio" }
    ]

    return (
        <>
            <nav className="bg-linear-to-r from-black via-gray-900 to-black/80 backdrop-blur-md text-white  flex items-center justify-between 
                h-16 px-6 md:px-10 
                shadow-lg border-b border-white/10">

                <ul className='flex items-center gap-10 '>
                    {
                        menu.map((v, i) => (
                            <li key={i}><a href={v.href}>{v.Name}</a></li>
                        ))
                    }
                </ul>

                <button className='flex items-center gap-1.5'><FaMobileAlt /> 716-666-67435</button>

            </nav>

            <div className="relative w-full h-screen overflow-hidden">

                <img
                    src={a1}
                    className="w-full h-full object-cover object-center contrast-110 brightness-105 saturate-110  [image-rendering:auto]"
                    alt="background"
                />

                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>


                <div className="absolute top-1/2 left-20 transform -translate-y-1/2 text-white">
                    <h1 className="text-7xl font-semibold">ANMOL</h1>
                    <p className="text-3xl tracking-widest mt-2">Web Developer</p>

                    <div className="mt-10 flex gap-10">
                        <button className="border rounded-2xl px-5 py-1 text-xl  transition-all duration-300 hover:ring-2 hover:ring-blue-500 hover:border-transparent">
                            Resume
                        </button>

                        <button className="border rounded-2xl px-5 py-1 text-xl transition-all duration-300 hover:ring-2 hover:ring-blue-500 hover:border-transparent">
                            Portfolio
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

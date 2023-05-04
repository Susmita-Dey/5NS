import React, { useState } from "react";
import darkIcon from "/toggle-icon-dark.svg"
import lightIcon from "/toggle-icon-light.svg"
import Logo from "/5ns.svg"

export default function Navbar(props) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <nav className="container py-2 mx-auto flex flex-row justify-around items-center md:px-12 font-['Satoshi'] dark:text-white dark:bg-black">
            <div className="flex flex-row">
                <img src={Logo} alt="logo" className="w-20" />
                <div className="flex flex-col py-2">
                    <h3 className="font-bold md:text-3xl text-xl">5NS</h3>
                    <p className="font-normal text-base">5ire Naming Service</p>
                </div>
            </div>
            <section className="MOBILE-MENU flex lg:hidden">
                <div
                    className="HAMBURGER-ICON space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span className="block h-1 rounded w-10 animate-pulse bg-gray-600"></span>
                    <span className="block h-1 rounded w-10 animate-pulse bg-gray-600"></span>
                    <span className="block h-1 rounded w-10 animate-pulse bg-gray-600"></span>
                </div>

                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                        className="absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)}
                    >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                    <div className="flex flex-row">
                        <img src={Logo} alt="logo" className="w-20" />
                        <div className="flex flex-col py-2">
                            <h3 className="font-bold md:text-3xl text-xl">
                                <a href='/'>5NS</a>
                            </h3>
                            <p className="font-normal text-base">5ire Naming Service</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <ul className="flex flex-col list-none gap-2 text-lg cursor-pointer">
                            <li className="font-semibold">Home</li>
                            <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">Docs</li>
                            <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">About</li>
                            <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">Developers</li>
                        </ul>
                    </div>
                    <div className='flex rounded-xl shadow-xl shadow-sky-700'>
                        <button className="px-6 py-2 rounded-xl text-white bg-[#285684] shadow-md shadow-sky-500 hover:bg-blue-900">Launch App</button>
                    </div>
                </div>
            </section>
            <div className="flex flex-row">
                <ul className="list-none gap-6 text-lg cursor-pointer DESKTOP-MENU hidden space-x-8 lg:flex">
                    <li className="font-semibold hover:underline hover:underline-offset-4">
                        <a href="/">Home</a>
                    </li>
                    <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">
                        <a href="#">Docs</a>
                    </li>
                    <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">
                        <a href="#">About</a>
                    </li>
                    <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">
                        <a href="#">Developers</a>
                    </li>
                </ul>
            </div>
            {/* <div className='flex rounded-xl shadow-xl shadow-sky-700'>
                <button className="px-6 py-2 rounded-xl text-white bg-[#285684] shadow-md shadow-sky-500 hover:bg-blue-900">Launch App</button>
            </div> */}
        </nav>
    )
}
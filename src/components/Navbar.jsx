import React from "react";
import darkIcon from "/toggle-icon-dark.svg"
import lightIcon from "/toggle-icon-light.svg"
import Logo from "/5ns.svg"

export default function Navbar(props) {
    return (
        <nav className="container mx-auto flex flex-row justify-between items-center px-12">
            <div className="flex flex-row">
                <img src={Logo} alt="logo" className="w-20" />
                <div className="flex flex-col py-2">
                    <h3 className="font-bold text-3xl">5NS</h3>
                    <p className="font-normal text-sm">5ire Naming Service</p>
                </div>
            </div>
            <div className="flex flex-row">
                <ul className="flex list-none gap-6 font-lg">
                    <li className="text-black font-semibold">Home</li>
                    <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">Docs</li>
                    <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">About</li>
                    <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">Developers</li>
                </ul>
            </div>
            <button className="px-6 py-2 rounded-xl ring-1 ring-yellow-900/5 border-2 border-sky-700 text-white">Launch App</button>
        </nav>
    )
}
        // <nav className="grid grid-cols-2 w-full place-content-between items-center">
        //     <h4>Resume</h4>
        //     <img onClick={props.toggleDarkMode}
        //         className="self-left justify-self-end" src={props.darkMode ? darkIcon : lightIcon} />
        // </nav>
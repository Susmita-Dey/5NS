import React from "react";
import darkIcon from "/toggle-icon-dark.svg"
import lightIcon from "/toggle-icon-light.svg"
import Logo from "/5ns.svg"

export default function Navbar(props) {
    return (
        <nav className="container py-2 mx-auto flex md:flex-row flex-col justify-around items-center md:px-12 font-['Satoshi']">
            <div className="flex flex-row">
                <img src={Logo} alt="logo" className="w-20" />
                <div className="flex flex-col py-2">
                    <h3 className="font-bold md:text-3xl text-xl">5NS</h3>
                    <p className="font-normal text-base">5ire Naming Service</p>
                </div>
            </div>
            <div className="flex flex-row">
                <ul className="flex list-none gap-6 text-lg cursor-pointer">
                    <li className="text-black font-semibold">Home</li>
                    <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">Docs</li>
                    <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">About</li>
                    <li className="text-gray-500 font-semibold hover:underline hover:underline-offset-4">Developers</li>
                </ul>
            </div>
            <div className='flex rounded-xl shadow-xl shadow-sky-700'>
                <button className="px-6 py-2 rounded-xl text-white bg-[#285684] shadow-md shadow-sky-500">Launch App</button>
            </div>
        </nav>
    )
}
        // <nav className="grid grid-cols-2 w-full place-content-between items-center">
        //     <h4>Resume</h4>
        //     <img onClick={props.toggleDarkMode}
        //         className="self-left justify-self-end" src={props.darkMode ? darkIcon : lightIcon} />
        // </nav>
import React from 'react'
import Logo from "/5ns.svg"
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className='container mx-auto py-12 md:px-32 bg-black bg-cover overflow-hidden mt-5 text-white font-["Satoshi"]'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <img src={Logo} alt="logo" className="w-20" />
                    <div className="flex flex-col p-2">
                        <div className="flex flex-col py-2">
                            <h3 className="font-bold md:text-3xl text-xl">5NS</h3>
                            <p className="font-normal text-base">5ire Naming Service</p>
                        </div>
                        <div className="flex flex-row px-2 text-lg gap-2">
                            <a href='https://t.me/Official5irenames' target="_blank">
                                <FaTelegramPlane />
                            </a>
                            <a href='https://twitter.com/5NS_io' target="_blank">
                                <FaTwitter />
                            </a>
                            <a href='https://www.instagram.com/5NS_io' target="_blank">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="flex flex-row list-none gap-6 text-lg cursor-pointer">
                        <li className="font-semibold">Home</li>
                        <li className="text-gray-500 font-semibold">Docs</li>
                        <li className="text-gray-500 font-semibold">About</li>
                        <li className="text-gray-500 font-semibold">Developers</li>
                    </ul>
                    <ul className="flex flex-row list-none mt-2 text-lg cursor-pointer">
                        <li className="font-semibold">Terms {"&"} Conditions&nbsp;&nbsp; | &nbsp;&nbsp;</li>
                        <li className="font-semibold">Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

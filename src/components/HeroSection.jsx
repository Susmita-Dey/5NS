import React from 'react'
import heroImg from "../assets/hero-image.png"

export default function HeroSection() {
    return (
        <section className='container mx-auto'>
            <div className='flex md:flex-row flex-col justify-center items-center gap-5'>
                <div className='flex'>
                    <img src={heroImg} alt="heroImg" className='md:-ml-20' />
                </div>
                <div className='flex flex-col gap-4 md:-ml-20 font-["Satoshi"]'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='md:text-5xl text-3xl font-semibold'>Enhance your <br />
                            5ire experience with <br />
                            <span className='text-violet-700'> .5ire domains.</span>
                        </h2>
                        <p className='text-gray-700'>Transition from 0x4523s4U8…xbY37bs7 <br />
                            to a unique on-chain profile.
                        </p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <input type="search" name="search" id="search" className='bg-white shadow-lg px-4 py-3 w-full md:w-72' placeholder='mydomain.com' />
                        <button className='px-6 py-2 rounded-md shadow-inner shadow-sky-500 text-white bg-blue-700/90'>Search</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

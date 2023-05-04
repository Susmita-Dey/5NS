import React from 'react'
import heroImg from "/Vector.svg"

export default function HeroSection() {
    return (
        <section className='container mx-auto px-5'>
            <div className='flex md:flex-row flex-col justify-center items-center gap-5'>
                <div className='flex'>
                    <img src={heroImg} alt="heroImg" className='md:-ml-20' />
                </div>
                <div className='flex flex-col gap-4 md:-ml-20 '>
                    <div className='flex flex-col gap-4'>
                        <h2 className='md:text-5xl text-3xl dont-semibold change-bold'>Enhance your <br />
                            5ire experience with <br />
                            <span className='text-violet-700'> .5ire domains.</span>
                        </h2>
                        <p className='text-lg text-gray-700 dark:text-gray-400'>Transition from 0x4523s4U8…xbY37bs7 <br />
                            to a unique on-chain profile.
                        </p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <input type="search" name="search" id="search" className='bg-white rounded-md shadow-lg text-lg px-4 py-3 w-full md:w-72' placeholder='yourname.5ire' />
                        <button className='px-6 py-3 rounded-md shadow-inner shadow-sky-500 text-white bg-blue-600/90 hover:bg-blue-800/90'>Search</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

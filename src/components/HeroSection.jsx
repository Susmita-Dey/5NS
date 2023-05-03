import React from 'react'
import heroImg from "../assets/hero-image.png"

export default function HeroSection() {
    return (
        <section className='container mx-auto'>
            <div className='flex flex-row gap-4'>
                <div className='flex'>
                    <img src={heroImg} alt="heroImg" className='' />
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='md:text-4xl text-2xl'>Enhance your
                        5ire experience with
                        <span className='text-violet-700'>.5ire domains.</span>
                    </h2>
                    <p className='text-gray-700'>Transition from 0x4523s4U8…xbY37bs7
                        to a unique on-chain profile.
                    </p>
                </div>
            </div>
        </section>
    )
}

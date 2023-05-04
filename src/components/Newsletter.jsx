import React from 'react'

export default function Newsletter() {
    return (
        <section className='container mx-auto my-12 md:my-4 py-10 font-["Satoshi"]'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h2 className='md:text-3xl text-2xl'>Subscribe to our <span className='font-semibold'>Newsletter</span></h2>
                <div className='flex flex-row gap-2 justify-center items-center py-5'>
                    <input type="search" name="search" id="search" className='bg-white shadow-lg px-4 py-3 w-full md:w-80' placeholder='youremail@gmail.com' />
                    <button className='px-6 py-2 rounded-md shadow-inner shadow-sky-500 text-white bg-blue-700/90'>Search</button>
                </div>
            </div>
        </section>
    )
}

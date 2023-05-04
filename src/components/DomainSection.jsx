import React from 'react'
import Domain from '../assets/domain.png'

export default function DomainSection() {
    return (
        <section className='container mx-auto'>
            <div className='flex flex-col md:flex-row justify-center items-center py-5 px-10 gap-12 '>
                <div className='flex flex-col justify-center items-center gap-6 order-2 md:order-1 md:mr-32'>
                    <div className='flex flex-col gap-2'>
                        <h2 className="md:text-3xl text-2xl dont-semibold change-bold dark:text-white text-[#161C2D]">Own Your Web3 Username</h2>
                        <p className='text-lg text-gray-500 dark:text-gray-400'>No more complicated and lengthy address. <br /> Own your .5ire Name, showcase your unique web3 Name and avatar,<br /> which contain your personal on-chain and off-chain information.
                        </p>
                    </div>
                    <div className='flex justify-start items-start md:-ml-96 lg:-ml-72 rounded-xl shadow-xl shadow-sky-700'>
                        <button className="px-6 py-2 rounded-xl text-white bg-[#285684] shadow-md shadow-sky-500 hover:bg-blue-900">Launch App</button>
                    </div>
                </div>
                <div className='flex order-1 md:order-2 w-96 md:ml-16'>
                    <img src={Domain} alt='domain-illustration' className='' />
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { TbArrowsRightLeft } from "react-icons/tb"

export default function Features() {
    return (
        <section className='container mx-auto my-12 md:my-4 gradient md:px-auto px-10 text-white min-h-max py-12 md:rounded-tr-[5rem] md:rounded-tl-[5rem] overflow-hidden'>
            <div className='flex justify-center items-center font-["Satoshi"]'>
                <div className='flex flex-row flex-wrap gap-10 justify-center items-center'>
                    <div className='flex flex-col text-center flex-wrap md:p-3 px-10 gap-4'>
                        <img src='/tick-mark.svg' alt='icon' className='' />
                        <div className='w-96'>
                            <p className='text-xl font-sans font-semibold my-2'>Sharing Made Easy</p>
                            <p className='text-lg px-10'>Say goodbye to long and unreadable 5ire addresses. Share your .5ire names with a click.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center flex-wrap md:p-3 px-10 gap-4'>
                        {/* <TbArrowsRightLeft className='md:text-white text-4xl' /> */}
                        <img src='/arrows.svg' alt='icon' className='' />
                        <div className='w-96'>
                            <p className='text-xl font-sans font-semibold my-2'>Hassle-free Transactions</p>
                            <p className='text-lg px-10'>Sending and receiving payments just got easier, .5ire names enable hassle-free transactions.</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center flex-wrap md:p-3 px-10 gap-4'>
                        <img src='/game.svg' alt='icon' className='' />
                        <div className='w-96'>
                            <p className='text-xl font-sans font-semibold my-2'>Gamification Done Right</p>
                            <p className='text-lg px-10'>Create engaging and rewarding experiences leveraging 5NS gamification mechanisms.</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center flex-wrap md:p-3 px-10 gap-4'>
                        <img src='/files.svg' alt='icon' className='' />
                        <div className='w-96'>
                            <p className='text-xl font-sans font-semibold my-2'>Decentralized And Secure</p>
                            <p className='text-lg px-10'>Your keys, Your .5ire Names. Have true ownership of your NFT&apos;s just like owning your cryptocurrencies.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center flex-wrap md:p-3 px-10 mt-12'>
                        <img src='/people.svg' alt='icon' className='' />
                        <div className='w-96'>
                            <p className='text-xl font-sans font-semibold my-2 py-2'>Open Sourced and 5ire Oriented</p>
                            <p className='text-lg px-10'>.5ire names are stored on the 5ire chain network. Audited, open source smart contracts ensure that sending funds to a .5ire name is as secure as sending to a regular address.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

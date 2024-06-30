import React from 'react'
import BgGridDark from "@/public/bgGridGrey.svg"
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='bg-white min-h-[100svh] relative z-0 overflow-hidden  flex pt-60 text-black px-[10%] gap-16 min-w-full bg-accent'>
            <div className='flex flex-col gap-16'>
                <div className=''>
                    <div className='bg-gradient-to-br from-primary to-purple-500 bg-clip-text'>
                        <h1 className='text-[6vmax] font-bold w-[40rem] text-transparent'>MedSafe</h1>
                    </div>
                    <h2 className='text-lg font-medium text-wrap w-[50%] md:w-[80%]'>Transforming Healthcare with Decentralized Information Exchange.</h2>
                </div>
                <a href='#description' className='w-fit rounded-lg bg-gradient-to-br from-primary to-purple-500 p-[0.18rem] group'>
                    <h1 className='w-full px-8 py-2 bg-white text-black rounded-md text-base md:text-lg font-semibold group-hover:bg-white/60 duration-200'>Explore</h1>
                </a>
            </div>
            <Image src={'/lottie/journey.svg'} width={803} height={746} alt='hero' className="w-[30rem] drop-shadow-lg hidden md:block"/>
            <BgGridDark className=' absolute -z-[1] bottom-0 scale-[5] sm:scale-[4]  xl:scale-[2] -translate-y-10 md:-translate-y-4 lg:translate-y-16 ' />
        </div>
    )
}

export default Hero
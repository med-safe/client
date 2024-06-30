import Image from 'next/image'
import React from 'react'

const DescriptionCard = ({...props}:{title:string,img:string}) => {
    return (
        <div className='w-[60%] flex md:flex-row flex-col gap-5 md:gap-8 md:odd:flex-row-reverse items-center'>
            <Image src={props.img} width={350} height={250} alt='cases' className='w-full md:w-52'></Image>
            <div className='flex  justify-center w-full lg:px-10 flex-col gap-6 md:gap-10 md:items-start items-center'>
                <div className='space-y-2 text-center md:text-left'>
                    <h1 className='font-medium text-lg'>{props.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default DescriptionCard
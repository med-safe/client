"use client"
import React, { useState } from 'react'
import LoginCitizen from '@/components/citizen/LoginCitizen'
import LoginOrg from '@/components/org/LoginOrg'


const page = () => {
    const [type, setType] = useState(true)
    
    const handleClick = (type: boolean) => {
        setType(type)
    }
    return (
        <main className='pt-20 flex flex-col items-center min-h-svh justify-center'>
            <div className='flex gap-8'>
                <button onClick={() => handleClick(true)}>Citizen</button>
                <button onClick={() => handleClick(false)}>Medical Organisation</button>
            </div>
            <div>
                {
                    type ?
                        <LoginCitizen />
                        :
                        <LoginOrg/>
                }
            </div>
        </main>
    )
}

export default page
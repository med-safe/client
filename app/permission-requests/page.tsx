"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { request } from '@/lib/api'
import { useAuthStore } from '@/lib/store'
import AllPermissions from '@/components/permissionpage/AllPermissions'
import { useEffect } from 'react'

const data = [
    {
        title: "Apollo glenegals hospital"
    },
    {
        title: "Nightingle hospital"
    },
    {
        title: "Woodlands hospital"
    },
    {
        title: "Chennai central hospital"
    },
]

const page = () => {
    const router = useRouter()
    const [data, setData] = useState<any[]>([])

    const token = useAuthStore((state) => state.token) || ""
    useEffect(() => {
        request(token)
            .then((res: any) => {

                if (res.data.ok) {
                    setData([...res.data.data])
                }

            })
            .catch(err => console.log(err));
    }, [token])

    useEffect(() => console.log(data), [data])



    return (
        <div className='px-[10%] min-h-svh flex flex-col justify-center gap-16 pt-20'>
            {token &&
                <>
                    <div className='flex gap-4'>
                        <h1 className='text-lg md:text-2xl font-bold'>List of organisations asking for permission</h1>
                        <div className='w-fit relative right-0 top-0 p-3 sm:p-4 rounded-full border flex items-center justify-center group h-fit'>
                            <h1 className='absolute text-sm'>?</h1>
                            <div className='w-60  px-5 py-4 border bg-white/60 backdrop-blur-md border-slate-200 rounded-2xl absolute top-10 -left-[13.5rem] sm:left-10 scale-0 group-hover:scale-100 duration-300 origin-top-left'>
                                <h1 className='text-slate-500'>! These are the list of medical organisation bodies which are having the permission to access your medical records !</h1>
                            </div>
                        </div>
                    </div>
                    <AllPermissions data={data} />
                </>
            }

        </div>
    )
}

export default page
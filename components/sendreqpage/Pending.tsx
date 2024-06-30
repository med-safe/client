"use client"
import React, { useEffect, useState } from 'react'
import { pendingRequest} from '@/lib/api'
import { useAuthStore } from '@/lib/store'

const Pending = () => {
    const [data, setData] = useState<any[]>([])
    const token = useAuthStore((state)=>state.token)||""
    useEffect(()=>{
        pendingRequest(token)
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <div className=''>
        <h1 className='text-4xl font-bold'>
            Pending requests
        </h1>
        {

        }

    </div>
  )
}

export default Pending
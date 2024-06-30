import { useAuthStore } from '@/lib/store'
import React, { useEffect } from 'react'
import { ownRecords } from '@/lib/api'


const page = () => {
    const token = useAuthStore((state)=>state.token)||""
    useEffect(()=>{
        ownRecords(token)
        .then(response=>{
            console.log(response);
            
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div className=''>

    </div>
  )
}

export default page
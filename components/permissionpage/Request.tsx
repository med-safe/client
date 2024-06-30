import React from 'react'
import { Button } from '../ui/button'
import { useAuthStore } from '@/lib/store'
import { acceptDecline } from '@/lib/api'

const Request = ({ title,reqId }: { title: string,reqId:string }) => {
    const token = useAuthStore((state) => state.token) || ""

    const handleClick = async(action:string)=>{
        if(!token){return}
        try {
            // console.log(reqId,action,token);
            
            const res = acceptDecline(reqId,action,token)
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div className="pt-6 pb-4 sm:px-6 flex sm:flex-row flex-col justify-between gap-4">
            <h1><span className='font-bold'>{title}</span> wants to access your medical information.</h1>
            <h1 className='text-neutral-400'>Would you give permission?</h1>
            <div className='flex gap-4'>
                <Button onClick={()=>handleClick("decline")} variant={"outline"} className=''>Decline</Button>
                <Button onClick={()=>handleClick("accept")} variant={"default"}>Accept</Button>
            </div>
        </div>
    )
}

export default Request
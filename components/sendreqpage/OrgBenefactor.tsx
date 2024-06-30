
"use client"
import { useAuthStore } from '@/lib/store'
import React, { useEffect, useState } from 'react'
import { benefactorAll } from '@/lib/api';


const OrgBenefactor = () => {
  const [data, setData] = useState<any[]>([])
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (!token) { return }
    benefactorAll(token)
      .then((response: any) => {
        setData([...response.data.data])
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
  }, [token])
  const date = new Date()
  return (
    <div className='flex flex-col pt-10'>
      {
        data.map((item, idx) => (
          <div key={idx} className='border-b border-neutral-200 flex justify-between items-center'>
            <div>
              <h1 className='pt-3 pb-2 text-xl font-semibold'>
                {item.citizen.name}
              </h1>
              <h2>Rregistered on {date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()}</h2>
            </div>
            <div className='flex gap-4 py-4 items-center'>
              <button className='rounded-md border px-4 py-3'>View details</button>
              <button className='rounded-md bg-primary text-white px-4 py-3'>Update Details</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default OrgBenefactor
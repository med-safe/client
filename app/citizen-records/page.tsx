"use client"
import React from 'react'
import OrgBenefactor from '@/components/sendreqpage/OrgBenefactor'
import { useAuthStore } from '@/lib/store'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
 
  return (
    <div className='px-[10%] min-h-svh pt-28'>
      <h1 className='text-3xl font-bold'>List of benefactors</h1>
        <OrgBenefactor/>
    </div>
  )
}

export default page
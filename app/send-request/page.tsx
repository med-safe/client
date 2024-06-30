"use client"
import React, { useEffect } from 'react'
import Form from '@/components/sendreqpage/Form'
import Pending from '@/components/sendreqpage/Pending'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/store'

const page = () => {
  return (
    <div className='min-h-svh pt-20 px-[15%] space-y-16'>
      <Form />
      <Pending />
    </div>
  )
}

export default page
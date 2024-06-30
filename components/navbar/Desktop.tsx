"use client"
import Logo from '@/public/lottie/logo.svg'
import MobileLogo from '@/public/lottie/mobileLogo.svg'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useAuthStore } from '@/lib/store'
import { useRouter } from 'next/navigation'


const Desktop = () => {
    const router = useRouter()

    const type = useAuthStore(state => state.type) || ""
    const token = useAuthStore(state => state.token) || undefined
    const setToken = useAuthStore(state => state.setToken) || undefined
    const setType = useAuthStore(state => state.setType) || undefined
    const firstLetter = useAuthStore((state) => state.firstLetter)
    const logOut = () => {
        localStorage.clear()
        setToken("")
        setType("")
        router.push("/")
    }
    return (
        <div className='flex justify-between px-10 py-4 items-center border-b fixed top-0 w-full bg-white/20 backdrop-blur-lg z-50'>
            <Link href={"/"}>
                <Logo className="w-48 hidden md:block" />
                <MobileLogo className="w-12 md:hidden" />
            </Link>
            {
                !token &&
                <div className='gap-4 flex'>
                    <Link href="/login">
                        <Button variant="outline" className=''>Login</Button>
                    </Link>
                    <Link href="/signup">
                        <Button variant="default">Register</Button>
                    </Link>
                </div>
            }
            {
                type === "citizen" &&
                <>
                    <div className='gap-8  md:flex-row items-center hidden lg:flex'>
                        <a href="/permission-requests" className='text-neutral-500 hover:text-neutral-950 duration-300'>Permission requests</a>
                        <a href="/approved-organisations" className='text-neutral-500 hover:text-neutral-950 duration-300'>Approved organisations</a>
                        <a href="/own-records" className='text-neutral-500 hover:text-neutral-950 duration-300'>Own records</a>
                        <div className='bg-primary size-10 text-2xl relative flex justify-center items-center rounded-full text-white group cursor-pointer'>
                            <h1 className='absolute'>{firstLetter}</h1>
                            <div className='absolute rounded-xl bg-white/60 backdrop-blur-2xl px-6 py-6 top-[110%] text-black right-0 text-lg scale-0 group-hover:scale-100 duration-300 shadow-md'>
                                <button onClick={logOut} className='bg-red-400 px-3 py-2 rounded-md z-10 relative text-sm md:text-base'>Logout</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:hidden'>
                        <div className='bg-primary size-10 text-2xl relative flex justify-center items-center rounded-full text-white group cursor-pointer'>
                            <h1 className='absolute'>{firstLetter}</h1>
                            <div className='absolute rounded-xl bg-white/60 backdrop-blur-2xl px-6 py-6 top-[110%] text-black right-0 text-lg scale-0 group-hover:scale-100 duration-300 shadow-md'>
                                <button onClick={logOut} className='bg-red-400 px-3 py-2 rounded-md z-10 relative'>Logout</button>
                            </div>
                        </div>
                    </div>
                </>
            }
            {
                type === "Org" &&
                <div className='flex gap-8 items-center'>
                    <a href="/send-request" className=' text-neutral-500 hover:text-neutral-950 duration-300'>Send requests</a>
                    <a href="/citizen-records" className=' text-neutral-500 hover:text-neutral-950 duration-300'>Citizen&apos;s records</a>
                    <div className='bg-primary cursor-pointer size-10 text-2xl relative flex justify-center items-center rounded-full text-white group'>
                        <h1 className='absolute '>{firstLetter}</h1>
                        <div className='absolute rounded-xl bg-white/60 backdrop-blur-2xl px-6 py-6 top-[110%] text-black right-0 text-lg scale-0 group-hover:scale-100 duration-300 shadow-md'>
                            <button onClick={logOut} className='bg-red-400 px-3 py-2 rounded-md z-10 relative drop-shadow-md'>Logout</button>
                        </div>
                    </div>
                </div>
            }



        </div>
    )
}

export default Desktop
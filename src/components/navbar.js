'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {

    localStorage.removeItem("authorization");
    console.log("button Clicked");
    router.push('/login');
  };

  return (
    <div className='flex flex-row justify-center gap-4 text-2xl'>
      <div className='flex flex-col gap-6'>

        <div className='jutify-center items-center flex mb-20 font-extrabold'>TWITTER<span className='font-normal ml-2'>IVY</span></div>
        <Link href="/home" className='hover:bg-[#16181C] rounded-2xl pl-4 py-2'><div>Home</div></Link>
        <Link href="/profile" className='hover:bg-[#16181C] rounded-2xl pl-4 py-2'><div>My Profile</div></Link>

        <button onClick={handleClick} className='flex justify-center bg-[#2B8CD6] rounded-3xl px-12 py-2'>Logout</button>
      </div>

      
    </div>
  )
}

export default Navbar
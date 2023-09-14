'use client'
import Link from 'next/link'
import React from 'react'

const navbar = () => {

  const handleClick = () => {
    console.log("button Clicked");
  };

  return (
    <div className='flex flex-row justify-center gap-4 text-2xl'>
      <div className='flex flex-col gap-10'>

        <div className='jutify-center items-center flex'>TWITTER 2.0</div>
        <Link href="/home"><div className='mt-10'>Home</div></Link>
        <Link href="/profile"><div>Profile</div></Link>

        <button onClick={handleClick} className='flex justify-center bg-[#2B8CD6] rounded-3xl px-12 py-2'>Logout</button>
      </div>

      
    </div>
  )
}

export default navbar
import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div className='flex flex-col justify-center gap-10 text-2xl'>
        <div className='jutify-center items-center flex'>TWITTER 2.0</div>
        <Link href="/home"><div className='mt-10'>Home</div></Link>
        <Link href="/profile"><div>Profile</div></Link>

        <div className='flex justify-center bg-[#2B8CD6] rounded-3xl px-16 py-2'>Post</div>
    </div>
  )
}

export default navbar
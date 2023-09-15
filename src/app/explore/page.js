import React from 'react'
import Navbar from '@/components/navbar'
import Exploreposts from '@/components/exploreposts'
import Wtf from '@/components/wtf'

const Explore = () => {
  return (
    <div className='bg-black  min-h-screen text-white flex justify-center'>
        <div className='flex flex-row gap-20 mt-4'>
            <div><Navbar /></div>
            <div><Exploreposts /></div>
            <div><Wtf /></div>
        </div>
    </div>
  )
}

export default Explore
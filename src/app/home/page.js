import React from 'react'
import Navbar from '@/components/navbar'
import Posts from '@/components/posts'
import Wtf from '@/components/wtf'

const Home = () => {
  return (
    <div className='bg-black  min-h-screen text-white flex justify-center'>
        <div className='flex flex-row gap-20 mt-4'>
            <div><Navbar /></div>
            <div><Posts /></div>
            <div><Wtf /></div>
        </div>
    </div>
  )
}

export default Home
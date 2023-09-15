import React from 'react'
import Navbar from '@/components/navbar'
import Wtf from '@/components/wtf'
import MyPosts from '@/components/myposts'

const Profile = () => {
  return (
    <div className='bg-black  min-h-screen text-white flex justify-center'>
    <div className='flex flex-row gap-20 mt-4'>
        <div><Navbar /></div>
        <div><MyPosts /></div>
        <div><Wtf /></div>
    </div>
</div>
  )
}

export default Profile
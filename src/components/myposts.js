import React from 'react'
import TweetPost from './tweetPost'
import Createpost from './createpost'

// const data = [
//   {
//     id
//   }
// ]

const Posts = () => {
  return (
    <div>
      <div className='text-2xl'>HarashnabinRoy</div>
      <div className='mt-4'><Createpost /></div>
      <div className='mt-4 flex flex-col gap-10'>
        <TweetPost />
      </div>

    </div>
  )
}

export default Posts
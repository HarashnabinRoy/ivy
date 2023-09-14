import React from 'react'
import TweetPost from './tweetPost'

// const data = [
//   {
//     id
//   }
// ]

const Posts = () => {
  return (
    <div>
      <div className='text-2xl'>HarashnabinRoy</div>
      <div className='mt-20 flex flex-col gap-10'>
        <TweetPost />
        <TweetPost />
      </div>

    </div>
  )
}

export default Posts
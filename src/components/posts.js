import React from 'react'
import TweetPost from './tweetPost'
import Createpost from './createpost'

const data = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
];



const Posts = () => {
  return (
    <div>
      <div className='text-2xl'>Home</div>
      <div className='mt-4'><Createpost /></div>
      {data.map((item)=>(
        <div id={item.id} className='mt-4 flex flex-col gap-10'>
          <TweetPost text={item.text}/>
        </div>
      ))}


    </div>
  )
}

export default Posts
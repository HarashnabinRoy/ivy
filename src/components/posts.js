'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import TweetPost from './tweetPost'
import Createpost from './createpost'
import axios from 'axios';

const data = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
];


const Posts = () => {

  const [responseData, setResponseData] = useState();
  let token;
  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('authorization')); 
  }


  useEffect(() => {
    axios.get('https://ivykids.onrender.com/api/tweet/getAllTweets', {
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        setResponseData(response.data);
        // setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // setLoading(false);
      });
  }, []);

  return (
    <div className='flex flex-row gap-4'>
      <div className='flex flex-col border-x-[2px] border-[#2F3336]'>
        <div className='text-2xl ml-4'>Home</div>
        <div className='mt-4'><Createpost /></div>
        {responseData?.map((item)=>(
          <div key={item._id} className='mt-4 flex flex-col gap-10'>
            <TweetPost userName={item.userId} text={item.description}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
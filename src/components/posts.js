'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import TweetPost from './tweetPost'
import Createpost from './createpost'
import axios from 'axios';
import Loading from "@/components/loading/loader";


const Posts = () => {

  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(false);
  let token;
  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('authorization')); 
  }

  
  useEffect(() => {
    setLoading(true)
    axios.get('https://ivykids.onrender.com/api/tweet/getAllTweets', {
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        setResponseData(response.data.tweets);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);

      });
  }, []);

  return (
    <div className='flex flex-row'>
      <div className='min-h-screen w-[1px] bg-[#2F3336]'></div>
      <div className='flex flex-col'>
        <div className='text-2xl ml-4'>Home</div>
        <div className='mt-4'><Createpost /></div>
        {loading ? <Loading /> : ''}
        {responseData?.map((item)=>(
          <div key={item._id} className='mt-4 flex flex-col gap-10'>
            <TweetPost createdAt={item.createdAt} userId={item.userId} tweetID = {item._id} likes={item.likesize} userName={item.userName} text={item.description}/>
          </div>
        ))}
      </div>
      <div className='min-h-screen w-[1px] bg-[#2F3336]'></div>
    </div>
  )
}

export default Posts
'use client'
import React, { useState, useEffect } from 'react'
import TweetPost from './tweetPost'
import Createpost from './createpost'
import axios from 'axios';


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
          setResponseData(response.data.tweets);
          // setLoading(false);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          // setLoading(false);
        });
    }, []);

  return (
    <div className='flex flex-row'>

      <div className='min-h-screen w-[1px] bg-[#2F3336]'></div>

      <div className='flex flex-col'>
        <div className='text-2xl ml-4'>@HarashnabinRoy</div>
        <div className='mt-4'><Createpost /></div>
        {responseData?.map((item)=>(
          // item._id===userId? 
            <div key={item._id} className='mt-4 flex flex-col gap-10'>
              <TweetPost userName={item.userName} text={item.description}/>
            </div> 
            // : <span></span>
          ))}
      </div>

      <div className='min-h-screen w-[1px] bg-[#2F3336]'></div>
    </div>

  )
}

export default Posts
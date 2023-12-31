'use client'
import React, { useState, useEffect } from 'react'
import TweetPost from './tweetPost'
import Createpost from './createpost'
import axios from 'axios';
import Loading from "@/components/loading/loader";


const Posts = () => {

    const [responseData, setResponseData] = useState();
    const [userName, setUserName] = useState('UserName');
    const [loading, setLoading] = useState(false);
    let token;
    let userID;
    if (typeof window !== 'undefined') {
      token = JSON.parse(localStorage.getItem('authorization')); 
      userID = JSON.parse(localStorage.getItem('userId'));
    }

    // console.log(userID);
  
    useEffect(() => {
      setLoading(true)
      axios.get('https://ivybe-production.up.railway.app/api/tweet/getAllTweets', {
        headers: {
          authorization: token,
        },
      })
        .then((response) => {
          setResponseData(response.data.tweets);

          console.log(response.data);
          setUserName(response.data.loggedInusername);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, [1]);

  return (
    <div className='flex flex-row'>

      <div className='min-h-screen w-[1px] bg-[#2F3336]'></div>

      <div className='flex flex-col'>
        <div className='text-2xl ml-4'>{loading ? <Loading /> : '@'+userName}</div>
        <div className='mt-4'><Createpost /></div>
        {loading ? <Loading /> : ''}
          {responseData?.map((item) => (
            <div key={item._id} className='mt-4 flex flex-col gap-10'>
              {/* {item.userId === userID && ( */}
                <TweetPost
                  createdAt={item.createdAt}
                  userId={item.userId}
                  tweetID={item._id}
                  userName={item.userName}
                  likes={item.likesize}
                  text={item.description}
                />
              {/* )} */}
            </div>
          ))}
      </div>

      <div className='min-h-screen w-[1px] bg-[#2F3336]'></div>
    </div>

  )
}

export default Posts
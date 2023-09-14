'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
// https://ivykids.onrender.com/api/user/follow/tofollowID

const wtf = () => {

  const [responseData, setResponseData] = useState();
  // const [toFollowID, setToFollowID] = useState();
  let token;
  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('authorization')); 
  }
  
  useEffect(() => {
    axios.get('https://ivykids.onrender.com/api/user/allUsers', {
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        setResponseData(response.data.users);
        // setLoading(false);
        console.log(response.data.users);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // setLoading(false);
      });
    }, []);
    useEffect(()=>{
      
    }, []);
    const handleUnFollowButton = async (id) => {
      
      try {
        console.log(id, token);
        const response = await axios.put(`https://ivykids.onrender.com/api/user/unfollow/${id}` ,{},{
            headers: {
                authorization: token,
              },
        })
        console.log(response.data);
        window.location.reload();
        console.log('Successfully followed');
      } catch (error) {
          console.error('Error while Following:', error);
      }
    }

    const handleFollowButton = async (id) => {
      
      try {
        console.log(id, token);
        const response = await axios.put(`https://ivykids.onrender.com/api/user/follow/${id}` ,{},{
            headers: {
                authorization: token,
              },
        })
        console.log(response.data);
        window.location.reload();
        console.log('Successfully followed');
      } catch (error) {
          console.error('Error while Following:', error);
      }
    }

  return (
    <div className=' bg-[#16181C] rounded-2xl p-4 mt-28'>
        <div className='font-bold text-2xl'>Who to follow</div>
        <div className=' w-[300px] flex flex-col text-lg mt-10 gap-4'>
          {responseData?.map((item)=>(
            item.isFollowing?
            <div key={item._id} className='flex flex-row justify-between items-center'>
              <div>@{item.userName}</div>
              <button className='bg-white text-black px-4 rounded-xl' onClick={()=>handleUnFollowButton(item._id)}>Following</button>
            </div> :
            <div key={item._id} className='flex flex-row justify-between items-center'>
            <div>@{item.userName}</div>
            <button className='bg-white text-black px-4 rounded-xl' onClick={()=>handleFollowButton(item._id)}>Follow</button>
          </div>
          ))}


        </div>

    </div>
  )
}

export default wtf
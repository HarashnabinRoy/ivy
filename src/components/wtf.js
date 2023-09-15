'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from "@/components/loading/loader";
const Wtf = () => {

  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(false);

  let token;
  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('authorization')); 
  }

  
  useEffect(() => {
    setLoading(true)
    axios.get('https://ivykids.onrender.com/api/user/allUsers', {
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        setResponseData(response.data.users);
        setLoading(false);
        console.log(response.data.users);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
    }, []);

    const handleUnFollowButton = async (id) => {
      
      try {
        setLoading(true);
        console.log(id, token);
        const response = await axios.put(`https://ivykids.onrender.com/api/user/unfollow/${id}` ,{},{
            headers: {
                authorization: token,
              },
        })
        console.log(response.data);
        window.location.reload();
        console.log('Successfully followed');
        setLoading(false);
      } catch (error) {
          console.error('Error while Following:', error);
          setLoading(false);
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
    <div className='flex flex-col gap-20 mt-28'>
      {/* <div className='bg-[#16181C] rounded-3xl p-2'>
        <div className='text-xl ml-4'>@{loggedInusername}</div>
        <div className='ml-8 text-xs'>Following: </div>
      </div> */}


      <div className=' bg-[#16181C] rounded-2xl p-4'>
        
        <div className='font-bold text-2xl'>Who to follow</div>
        <div className=' w-[300px] flex flex-col text-lg mt-10 gap-4'>
          {loading ? <Loading /> : ''}
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
    </div>
   
  )
}

export default Wtf
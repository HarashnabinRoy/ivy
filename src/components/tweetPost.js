'use client'
import { useState } from 'react';
import axios from 'axios';
import Loading from "@/components/loading/loader";

const TweetPost = ({ userName, createdAt, tweetID, text, likes, userId }) => {
  const [loading, setLoading] = useState(false);
  let token;
  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('authorization')); 
  }
  let userID = JSON.parse(localStorage.getItem('userId'))
  const handleLikeClick = async (id) => {

    try {
      setLoading(true)
      console.log(id, token);
      const response = await axios.put(`https://ivykids.onrender.com/api/tweet/like/${id}` ,{},{
          headers: {
              authorization: token,
            },
      })
      // console.log(response.data);
      window.location.reload();
      console.log('Successfully Liked');
      console.log(response.data);
      setLoading(false)
    } catch (error) {
        console.error('Error while Liking:', error);
        setLoading(false)
    }
  };

  const handleEditClick = () => {
    console.log("Edit button working!");
  }

  const handleDeleteClick = async (id) => {
    
    try {
      setLoading(true)
      console.log(id, token);
      await axios.delete(`https://ivykids.onrender.com/api/tweet/${id}` ,{
          headers: {
              authorization: token,
            },
      })
      window.location.reload();
      console.log('Successfully Deleted');
      setLoading(false)
    } catch (error) {
        console.error('Error sending description:', error);
        setLoading(false)
    }


    console.log("Delete Button working");
  }

  return (
    <div className="bg-black p-4 rounded shadow-md text-white">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-400 rounded-full mr-2"></div>
        <div>
          <p className="font-semibold">@{userName}</p>
          <p className="text-gray-500 text-xs">{createdAt}</p>
        </div>
      </div>
      <p className="text-lg w-[400px] mt-4">{text}</p>
      <div className='flex flex-row mt-4 justify-end gap-2'>
        <button
          onClick={()=>handleLikeClick(tweetID)}
          className="bg-[#2B8CD6] text-white px-4 py-1 rounded-full hover:bg-blue-600"
        >
          
          Like ({likes})
        </button>
        {userId===userID? 
          <div className='flex flex-row gap-2'>
            <button
              onClick={handleEditClick}
              className="bg-[#2B8CD6] text-white px-4 py-1 rounded-full hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={()=>handleDeleteClick(tweetID)}
              className="bg-[#2B8CD6] text-white px-4 py-1 rounded-full hover:bg-blue-600"
            >
              Delete
            </button> 
          </div>
          : <span></span>
        }
      </div>

      <div className='h-[1px] w-full bg-[#2F3336] mt-10'></div>
    </div>
  );
};

export default TweetPost;
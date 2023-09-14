'use client'
import { useState } from 'react';
import axios from 'axios';

const TweetPost = ({ userName, createdAt, tweetID, text }) => {
  const [likes, setLikes] = useState(0);
  let token;
  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('authorization')); 
  }
  const handleLikeClick = async (id) => {
    // setLikes(likes + 1);
    // https://ivykids.onrender.com/api/tweet/like/:id
    try {
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
    } catch (error) {
        console.error('Error while Liking:', error);
    }
  };

  const handleEditClick = () => {
    console.log("Edit button working!");
  }

  const handleDeleteClick = async (id) => {
    
    try {
      console.log(id, token);
      await axios.delete(`https://ivykids.onrender.com/api/tweet/${id}` ,{
          headers: {
              authorization: token,
            },
      })
      window.location.reload();
      console.log('Successfully Deleted');
    } catch (error) {
        console.error('Error sending description:', error);
    }


    console.log("Delete Button working");
  }

  return (
    <div className="bg-black p-4 rounded shadow-md text-white">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-400 rounded-full mr-2"></div>
        <div>
          <p className="font-semibold">@{userName}</p>
          <p className="text-gray-500 text-xs">Now</p>
        </div>
      </div>
      <p className="text-lg w-[400px] mt-4">{text}</p>
      <div className='flex flex-row mt-4 justify-end gap-4'>
        <button
          onClick={()=>handleLikeClick(tweetID)}
          className="bg-[#2B8CD6] text-white px-4 py-1 rounded-full hover:bg-blue-600"
        >
          Like ({likes})
        </button>
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

      <div className='h-[1px] w-full bg-[#2F3336] mt-10'></div>
    </div>
  );
};

export default TweetPost;
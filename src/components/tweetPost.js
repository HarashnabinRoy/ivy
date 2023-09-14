'use client'
import { useState } from 'react';

const TweetPost = ({ userName, createdAt, text }) => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-black p-4 rounded shadow-md text-white">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-400 rounded-full mr-2"></div>
        <div>
          <p className="font-semibold">@HarashnabinRoy</p>
          <p className="text-gray-500 text-xs">Now</p>
        </div>
      </div>
      <p className="text-lg w-[400px] mt-4">{text}</p>
      <button
        onClick={handleLikeClick}
        className="bg-[#2B8CD6] text-white px-4 py-1 mt-4 rounded-full hover:bg-blue-600"
      >
        Likes ({likes})
      </button>
      <div className='h-[1px] w-full bg-[#2F3336] mt-10'></div>
    </div>
  );
};

export default TweetPost;
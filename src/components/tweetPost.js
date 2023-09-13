'use client'
import { useState } from 'react';

const TweetPost = ({ userName, createdAt, text }) => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-black p-4 rounded shadow-md border text-white">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-400 rounded-full mr-2"></div>
        <div>
          <p className="font-semibold">@HarashnabinRoy</p>
          <p className="text-gray-500 text-xs">Now</p>
        </div>
      </div>
      <p className="text-lg w-[400px]">This is a TWEET!! This is a TWEET!! This is a TWEET!! This is a TWEET!! This is a TWEET!!</p>
      <button
        onClick={handleLikeClick}
        className="bg-blue-500 text-white px-2 py-1 mt-2 rounded-full hover:bg-blue-600"
      >
        Like ({likes})
      </button>
    </div>
  );
};

export default TweetPost;
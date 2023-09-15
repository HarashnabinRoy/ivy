'use client'
import { useState } from 'react';
import axios from 'axios';
import Loading from "@/components/loading/loader";
import { formatDistance } from 'date-fns';

const TweetPost = ({ userName, createdAt, tweetID, text, likes, userId }) => {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedText(text);
  };

  const handleSaveClick = async (id) => {
    //https://ivybe-production.up.railway.app/api/tweet/updateTweet/${tweetID}
    try {
      setLoading(true)
      console.log(id, token, editedText);
      const response = await axios.put(`https://ivybe-production.up.railway.app/api/tweet/updateTweet/${id}` ,{
        description: editedText 
      },{
          headers: {
              authorization: token,
            },
      })
      // window.location.reload();
      console.log('Successfully Liked');
      console.log(response.data);
      setLoading(false)
    } catch (error) {
        console.error('Error while editing:', error);
        setLoading(false)
    }
    setIsEditing(false);
  };

  let token;
  let userID;
  if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('authorization')); 
    userID = JSON.parse(localStorage.getItem('userId'))
  }
  


  const handleLikeClick = async (id) => {

    try {
      setLoading(true)
      console.log(id, token);
      const response = await axios.put(`https://ivybe-production.up.railway.app/api/tweet/like/${id}` ,{},{
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

  const handleDeleteClick = async (id) => {
    
    try {
      setLoading(true)
      console.log(id, token);
      await axios.delete(`https://ivybe-production.up.railway.app/api/tweet/${id}` ,{
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
  const datestr = formatDistance(new Date(createdAt), new Date());

  return (
    <div className="bg-black p-4 rounded shadow-md text-white">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-400 rounded-full mr-2"></div>
        <div>
          <p className="font-semibold">@{userName}</p>
          <p className="text-gray-500 text-xs">{datestr} ago</p>
        </div>
      </div>
      <p className="text-lg w-[400px] mt-4">{editedText}</p>
      {/* {isEditing?(<div><input
                  type="text"
                  value={editedText}
                  onChange={handleInputChange}
                  className='text-white bg-black p-2 h-8 outline-none'
                /></div>):{editedText}} */}
      <div className='flex flex-row mt-4 justify-end gap-2'>
        <button
          onClick={()=>handleLikeClick(tweetID)}
          className="bg-[#2B8CD6] text-white px-4 py-1 rounded-full hover:bg-blue-600"
        >
          
          Like ({likes})
        </button>
        {userId===userID && (
          <div className='flex flex-row gap-2'>
            {isEditing?(
              <div className='flex flex-row gap-2'>
                <input
                  type="text"
                  value={editedText}
                  onChange={handleInputChange}
                  className='text-white bg-black p-2 h-8 outline-none'
                />
                <button onClick={handleCancelClick} className="bg-[#2B8CD6] text-white px-4 py-1 rounded-full hover:bg-blue-600">Cancel</button>
                <button onClick={()=>handleSaveClick(tweetID)} className="bg-[#2B8CD6] text-white px-4 py-1 rounded-full hover:bg-blue-600">Save</button>
              </div>
            ): (
              <div>
                <button
                  onClick={handleEditClick}
                  className="bg-[#2B8CD6] text-white px-4 py-1 rounded-full hover:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            )}


            <button
              onClick={()=>handleDeleteClick(tweetID)}
              className="bg-[#2B8CD6] text-white px-4 py-1 rounded-full hover:bg-blue-600"
            >
              Delete
            </button> 
          </div>
          // ): <span></span>
        )}
      </div>

      <div className='h-[1px] w-full bg-[#2F3336] mt-10'></div>
    </div>
  );
};

export default TweetPost;
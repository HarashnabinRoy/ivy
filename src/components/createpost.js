import React from 'react'

const createpost = () => {
  return (
    <div className='bg-black p-4 rounded shadow-md border border-[#2F3336] text-white text-lg'>
        <form>
            <input 
                className='bg-black p-4 rounded shadow-md text-white text-lg w-full ' 
                placeholder='What is Happening?'         
                style={{
                    resize: 'none', 
                    userSelect: 'none',
                }}>
                
            </input>
            <div className='h-[1px] w-full bg-[#2F3336]'></div>
            <div className='flex justify-end w-full'>
                <button type="submit" className="bg-[#2B8CD6] text-white px-4 py-1 rounded-full mt-6">
                    Post
                </button>
            </div>
        </form>
    </div>
  )
}

export default createpost
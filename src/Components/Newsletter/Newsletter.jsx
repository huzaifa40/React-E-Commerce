import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex justify-center'>
        <div className='my-20 pt-10 flex flex-col items-center justify-center w-[85%] h-72 bg-gradient-to-b from-pink-200 to-white'>
            <h1 className='text-[44px] font-semibold'>Get Exclusive Offers On Your Email</h1>      
            <p className='my-5'>Subscribe to our newsletter and stay updated.</p>
            <div className='flex '>
                <input type="text" placeholder='Enter your Email' className='px-8 py-3 w-72 bg-transparent border border-gray-400 rounded-3xl'/>
                <button className='text-white bg-black rounded-3xl py-3 px-10'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter

import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex items-center justify-around text-left my-40 w-[75%] h-30vh bg-gradient-to-b from-pink-200 to-white'>
            <div className="offers-left">
                <p className='text-[56px] font-semibold'>Exclusive</p>
                <p className='text-[56px] font-semibold'>Offers For You</p>
                <p className='text-md font-semibold'>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className='bg-red-500 text-white py-3 px-8 rounded-3xl mt-5'>Check Now</button>
            </div>
            <div className="offers_right">
                <img src={exclusive_image} alt="" />
            </div>      
        </div>
    </div>
  )
}

export default Offers

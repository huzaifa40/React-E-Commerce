import React from 'react'
import handIcon from '../Assets/hand_icon.png' 
import arrowbtn from '../Assets/arrow.png' 
import heroImage from '../Assets/hero.png'

const Hero = () => {
  return (
    <div className='hero flex items-center pt-24 pb-32 justify-around h-full bg-gradient-to-b from-pink-200 to-white'>
        <div className="hero-left flex flex-col items-start">
            <h1 className='font-semibold text-lg tracking-tight mb-5'>NEW ARRIVALS ONLY</h1>
            <div className='font-semibold text-[78px] leading-[5rem]'>
                <div className="hand-hand-icon flex w-14 h-14 gap-4 items-center">
                    <p>new</p>
                    <img src={handIcon} alt="" />
                </div>
                <p className='mt-2 pr-16'>collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn flex gap-3 my-8 text-white text-lg font-medium items-center border rounded-[50px] px-6 py-3 bg-red-600'>
                <p >Latest Collection</p>
                <img src={arrowbtn} alt="" class="w-4 h-3" />               
            </div>
        </div> 

        <div className="hero-right">
            <img src={heroImage} alt="" />            
        </div>    
    </div>
  )
}

export default Hero

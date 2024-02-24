import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Bradcrum = (props) => {
   const {product} = props
  return (
    <div className='flex gap-2 items-center ml-32 my-10'>
        HOME <img className='h-[14px]' src={arrow_icon} alt="" /> Shop <img className='h-[14px]' src={arrow_icon} alt="" /> {product.category} <img className='h-[14px]' src={arrow_icon} alt="" /> {product.name}    
    </div>
  )
}

export default Bradcrum

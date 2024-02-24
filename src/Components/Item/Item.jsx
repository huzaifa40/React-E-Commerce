import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item w-[300px]'>
        <Link to={`/product/${props.id}`} ><img src={props.image} alt="" /></Link>
        <p className='pt-6 pb-2'>{props.name}</p>
        <div className="item-price flex gap-8 justify-center">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old text-gray-500 line-through ">
                ${props.old_price}
            </div>
        </div>      
    </div>
  )
}

export default Item

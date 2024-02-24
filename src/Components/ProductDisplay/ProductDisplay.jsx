import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_icon_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='justify-center'>
        <div className='flex mx-32 gap-14'>
            <div className="product-left flex gap-2">
                <div className="product-image-list flex flex-col gap-2 ">
                    <img className='h-[105px] w-[115px]' src={product.image} alt="" />
                    <img className='h-[105px] w-[115px]' src={product.image} alt="" />
                    <img className='h-[105px] w-[115px]' src={product.image} alt="" />
                    <img className='h-[105px] w-[115px]' src={product.image} alt="" />
                </div>
                <div className="product-image">
                    <img className='h-[445px]' src={product.image} alt="" />
                </div>
            </div>

            <div className="product-right flex flex-col gap-5 items-start">
                <div className="product-name">
                    <p className='font-semibold text-xl'>{product.name}</p>
                </div>
                <div className="stars-quantity flex gap-3 items-center">
                    <div className="stars flex h-[15px]">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon_dull} alt="" />
                    </div>
                    <p>(122)</p>
                </div>
                <div className="product-price flex gap-4 text-lg font-[500]">
                    <p className='text-gray-500 line-through'>${product.old_price}</p>
                    <p className='text-red-700'>${product.new_price}</p>
                </div>
                <div className="product-description py-2">
                    <p>A lightweight stylish green colored jacket for winters Lorem </p>
                    <p className='float-left'>ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <p className='text-gray-900 text-lg font-[500]'>Select Size</p>
                <div className="size-selection flex gap-2">
                    <p className='border bg-gray-200 rounded-lg px-4 py-2'>S</p>
                    <p className='border bg-gray-200 rounded-lg px-4 py-2'>M</p>
                    <p className='border bg-gray-200 rounded-lg px-4 py-2'>L</p>
                    <p className='border bg-gray-200 rounded-lg px-4 py-2'>XL</p>
                    <p className='border bg-gray-200 rounded-lg px-4 py-2'>XXL</p>
                </div>
                <button className='py-3 px-6 bg-red-600 text-white' onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                <div className="category flex flex-col items-start">
                    <p><span className='font-semibold'>Category : </span>Women, T-shirt, Crop-Top</p>
                    <p><span className='font-semibold'>Tags : </span>Modern, Latest</p>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default ProductDisplay

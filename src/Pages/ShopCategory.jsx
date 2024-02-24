import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className=''>
      <div className='flex justify-center'>
        <img className='my-10 w-[85%] h-[330px]' src={props.banner} alt="" />
      </div>
      <div className='flex justify-between mx-28 mb-6'>
        <p>
          Showing <span className='font-semibold'> 1-12</span> out of 36 products
        </p>
        <div>
          <button  className='flex gap-2 border border-black rounded-3xl py-2 px-4 items-center'>Sort by <img src={dropdown_icon} alt="" /></button>
        </div>
      </div>
      <div className="shop_category flex gap-8 flex-wrap justify-center">
        {
          all_product.map((item, i) => {
            if(props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else {
              return null
            } 
          })
        }
      </div>
      
    </div>
  )
}

export default ShopCategory

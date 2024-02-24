import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalAmount } = useContext(ShopContext);
    return (
        <div className='my-20 mx-20'>
            <div className='grid grid-cols-7 pb-5'>
                <p className='font-semibold text-md justify-items-start grid'>Products</p>
                <p className='font-semibold text-md grid col-span-2 justify-items-start'>Title</p>
                <p className='font-semibold text-md'>Price</p>
                <p className='font-semibold text-md'>Quantity</p>
                <p className='font-semibold text-md'>Total</p>
                <p className='font-semibold text-md'>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='grid grid-cols-7 py-4 flex items-center'>
                                <img src={e.image} className='w-[80px] h-[100px] grid justify-items-center' alt="" />
                                <p className='grid col-span-2 justify-items-start'>{e.name}</p>
                                <p>${e.new_price}</p>
                                <p>{cartItems[e.id]}</p>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} className='ml-20' onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr/>
                        </div>
                    );
                }
                return null; // Ensure to return a value for all cases
            })}
            <div className='w-[45%] my-20 flex flex-col'>
                <h1 className='font-semibold text-2xl mb-8 flex items-start'>Cart Total</h1>
                <div className='flex justify-between'>
                   <p>Subtotal</p>
                   <p>${getTotalAmount()}</p>
                </div>
                <hr className='my-2 bg-black'/>
                <div className='flex justify-between'>
                    <p className='line-through text-gray-500'>Shipping Fee</p>
                    <p className='line-through text-gray-500'>Free</p>
                </div>
                <hr className='my-2'/>
                <div className='flex justify-between font-semibold'>
                    <p>Total</p>
                    <p>${getTotalAmount()}</p>
                </div>    
                <button className='border-2 bg-red-600 text-gray-300 py-3 px-6 items-start w-[260px] mt-8 '>PROCEED TO CHECKOUT</button>            
            </div>            
        </div>
    );
};

export default CartItems;


import React from 'react'
import shopper_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer flex flex-col w-[100%] h-[50px] mt-52 mb-40 justify-center items-center gap-8'>
        <div className="footer-logo flex gap-5 items-center">
            <img src={shopper_logo} alt="" />
            <p className='text-[28px] font-semibold pt-2'>SHOPPER</p>
        </div>
        <ul className='footer-links flex gap-10'>
           <li>Company</li>
           <li>Products</li>
           <li>Offices</li>
           <li>About</li>
           <li>Contact</li>             
        </ul>   
        <div className="social-links flex gap-8">
            <img src={instagram_icon} alt="" />
            <img src={pinterest_icon} alt="" />
            <img src={whatsapp_icon} alt="" />
        </div>   
        <div className="copyright flex flex-col gap-5 items-center justify-center">
            <hr className='w-[800px] h-[3px] rounded-3xl bg-gray-300' />
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer

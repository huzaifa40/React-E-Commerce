import React from 'react'

const LoginSignup = () => {
  return (
    <div className='flex justify-center mt-16 bg-white h-[100vh]'>
      <div className='flex flex-col bg-gray-100 gap-5 items-center justify-center w-[40%] h-[440px] rounded-2xl'>
        <h1 className='font-semibold text-[35px]'>Sign Up</h1>
        <div className='flex flex-col gap-4'>
          <input type="text" placeholder='Your Name' className='border-2 py-2 px-4 rounded-md w-[400px]'/>
          <input type="email" placeholder='Email Address' className='border-2 py-2 px-4 rounded-md w-[400px]' />
          <input type="password" placeholder='Password' className='border-2 py-2 px-4 rounded-md w-[400px]' />
          <button className='border-2 bg-red-600 py-2 px-10 w-[400px] rounded-md pt-3 text-lg text-gray-100'>Continue</button>
        </div>
        <div className='flex gap-2'>
          <span>Already have an account?</span>
          <a href="#" className='text-blue-800'>Login here</a>
        </div>
        <div className='flex gap-2'>
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to terms & conditions.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup

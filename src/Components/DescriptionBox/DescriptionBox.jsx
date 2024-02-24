import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='description-box w-[75%] my-20 mx-32 '>
        <div className="decription-reviews flex ">
            <p className='border py-3 px-5 border-gray-300 font-[600]'>Description</p>
            <p className='border py-3 px-5 border-gray-300'>Reviews (122)</p>
        </div>
        <div className="description border border-gray-300 flex flex-col items-start py-4 px-5 gap-4 ">
            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo impedit reprehenderit <br />
               ex non saepe placeat magnam libero voluptatibus aliquid! Lorem ipsum dolor sit Lorem ipsum dolor <br />
               sit amet consectetur adipisicing elit. Maxime, omnis.</p>
            
            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus facere enim, excepturi <br />
               asperiores odit ea repellendus debitis consequuntur consequatur.</p>
        </div>      
    </div>
  )
}

export default DescriptionBox

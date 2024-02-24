import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='mt-10 flex flex-col items-center'>
        <h1 className='mb-3 text-[36px] font-semibold'>NEW COLLECTIONS</h1>
        <hr className='w-48 h-[5px] rounded-3xl bg-black mb-12'/>
        <div className="collection_items flex gap-8 flex-wrap justify-center">
            {
                new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>      
    </div>
  )
}

export default NewCollections

import React from 'react'
import shoee from '../Assets/shoee.jpg'
import { Rating } from '@mui/material';

const Cards = () => {
  return (
    <div className=''>
      <div>
      <img className='object-cover' src={shoee} />

      <div className='shadow-2xl rounded-lg px-2 py-2' >
        <h3 className='text-2xl'>Nike Air</h3>
        <div className='flex flex-row py-3 my-2'>
          <h2 className='text-lg font-medium'>Rs.9500</h2>
        </div>
        <div className='-mt-5 flex flex-row'>
          <Rating name="read-only" value={5} readOnly />
          <h6 className='ml-4 text-gray-500'>10 reviews</h6>

        </div>
        </div>
        
      </div>







    </div>

  )
}

export default Cards
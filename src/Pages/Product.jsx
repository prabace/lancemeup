import React from 'react'
import Cards from '../Components/Cards'

const Product = () => {

  return (
    <div className='m-20 bg-white grid gap-y-20 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4'>
        <Cards/>     
        
    </div>
  )
}

export default Product
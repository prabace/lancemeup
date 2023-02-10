import React from 'react'
import Cards from '../Components/Cards'

const Product = () => {
  return (
    <div className='flex grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4'>
        <Cards/>
        <Cards/>
    </div>
  )
}

export default Product
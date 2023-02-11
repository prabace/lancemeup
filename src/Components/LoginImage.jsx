import React from 'react'
import shoes from '../Assets/shoe.png'

const LoginImage = () => {
  return (
    <div>
        <img className='w-[30rem] h-[20rem] object-cover' src={shoes}/>
    </div>
  )
}

export default LoginImage
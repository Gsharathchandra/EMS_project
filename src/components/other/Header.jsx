import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl'>Hello <br/> <span className='text-3xl font-semibold'>Sharath</span> </h1>
        <button className='bg-red-500 text-lg font-medium text-white py-2 px-5 rounded-sm'>log out </button>
    </div>
  )
}

export default Header
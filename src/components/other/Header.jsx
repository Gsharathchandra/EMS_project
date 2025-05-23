import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = ({data}) => {
  // const [userName, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>UserName</span> </h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white py-2 px-5 rounded-lg'>Log out </button>
    </div>
  )
}

export default Header
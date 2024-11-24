import React, { useState } from 'react'

const Header = ({data,changeUser}) => {

  // const [userName, setUserName] = useState('')
  // if( data.name) {
  //   setUserName(data.name)
  // }else{
  //   setUserName('Admin')
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <div className='flex items-center justify-between'>
        <h1 className='leading-none text-2xl font-medium'>Hello,  <br /> <span className='font-bold text-3xl'>{data.name ? data.name : data } 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700'>Logout</button>
    </div>
  )
}

export default Header

import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)


  return (
    <div id='tasklist' className='bg-[#1c1c1c] px-5 py-2 h-[35%] rounded mt-5 flex flex-col gap-2'>
      <div className='bg-red-400 px-4 py-2 flex items-center justify-between rounded font-bold'>
        <h2 className='w-1/5 '>Name</h2>
        <h3 className='w-1/5 '>New Task</h3>
        <h5 className='w-1/5 '>Activate Task</h5>
        <h5 className='w-1/5 '>Completed</h5>
        <h5 className='w-1/5 '>Failed Task</h5>
      </div>
      <div className='overflow-auto flex flex-col gap-2'>
    {userData.map((el,idx)=>{
      return <div className='border-2 border-emerald-500 px-4 py-2 flex items-center justify-between rounded' key={idx}>
      <h2 className='w-1/5'>{el.name} </h2>
      <h3 className='w-1/5 pl-5 '>{el.taskCount.newTask} </h3>
      <h5 className='w-1/5 pl-5'>{el.taskCount.active}</h5>
      <h5 className='w-1/5 pl-5'>{el.taskCount.completed}</h5>
      <h5 className='w-1/5 pl-5'>{el.taskCount.failed}</h5>
    </div>
    })}
      </div>
     
   
    </div>
  )
}

export default AllTask

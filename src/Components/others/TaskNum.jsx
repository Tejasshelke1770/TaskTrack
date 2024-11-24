import React from 'react'

const TaskNum = ({data}) => {
  return (
    <div className='flex justify-between gap-5 mt-10 '>
      <div className='w-[45%]  bg-blue-400 py-6 px-10 rounded-xl font-bold'> 
        <h2 className='text-3xl '>{data.taskCount.newTask}</h2>
        <h2 className='text-xl font-font-bold'>New Task</h2>
      </div>
      <div className='w-[45%]  bg-green-400 py-6 px-10 rounded-xl font-bold'> 
        <h2 className='text-3xl '>{data.taskCount.completed}</h2>
        <h2 className='text-xl '>Completed</h2>
      </div>
      <div className='w-[45%]  bg-yellow-400 py-6 px-10 rounded-xl font-bold'> 
        <h2 className='text-3xl '>{data.taskCount.active}</h2>
        <h2 className='text-xl '>Active</h2>
      </div>
      <div className='w-[45%]  bg-red-400 py-6 px-10 rounded-xl font-bold'> 
        <h2 className='text-3xl '>{data.taskCount.failed}</h2>
        <h2 className='text-xl '>Failed</h2>
      </div>
    </div>
  )
}

export default TaskNum

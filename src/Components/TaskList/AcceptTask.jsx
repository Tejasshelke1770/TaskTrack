import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="w-[300px] h-full bg-red-400 rounded-xl	p-5 flex-shrink-0 ">
    <div className=" flex  justify-between items-center">
      <h3 className="bg-red-600 px-2 rounded-sm py-1 text-sm">{data.category ? `${data.category}` : "High" } </h3>
      <h4 className="text-sm font-medium ">{data.date} </h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold min-h-16  ">{data.taskTitle} </h2>
    <p className="text-sm mt-1 min-h-20 ">{data.description} </p>
    <div className='flex justify-between items-center mt-6'>
        <button className='bg-green-400 py-1 px-2 text-sm rounded-md'>Mark as completed</button>
        <button className='bg-red-600 py-1 px-2 text-sm rounded-md'>Mark as Failed</button>
    </div>
  </div>
  )
}

export default AcceptTask
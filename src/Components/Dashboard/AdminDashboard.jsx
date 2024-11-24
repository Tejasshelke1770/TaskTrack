import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'


const AdminDashboard = ({data, changeUser}) => {


  return (
    <div className='p-10 h-screen w-full '>
      <Header changeUser={changeUser} data={data} />
      <CreateTask />
      <AllTask/>
    </div>
  )
}

export default AdminDashboard

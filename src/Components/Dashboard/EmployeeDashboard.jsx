import React from 'react'
import Header from '../others/Header'
import TaskNum from '../others/TaskNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data,changeUser}) => {
  return (
    <div className='p-10 h-screen	'>
     <Header changeUser={changeUser} data={data} />
     <TaskNum data={data}/>
     <TaskList data={data}/>     
    </div>
  )
}

export default EmployeeDashboard

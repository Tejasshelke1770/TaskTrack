import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAssignedTo, settaskAssignedTo] = useState("");
  const [taskCategory, settaskCategory] = useState("");
  const [taskDescription, settaskDescription] = useState("");

  const [newTask, setNewTask] = useState({})

  const [userData,setUserData] = useContext(AuthContext)

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({taskTitle, taskDate, taskCategory,taskDescription, active:false,newTask :true,failed:false, completed:false})

    const data = userData

    data.forEach(employee => {
      if(employee.name.toLowerCase() == taskAssignedTo.toLowerCase()){
        employee.tasks.push(newTask)
        employee.taskCount.newTask += 1
      }
    });

    setUserData(data)

    setTaskTitle("");
    setTaskDate("");
    settaskAssignedTo("");
    settaskCategory("");
    settaskDescription("");
  };

  return (
    <div>
      <div className="h-80 mt-8 w-full bg-[#1c1c1c] rounded-md">
        <form
          onSubmit={submitHandler}
          className="w-full flex items-center justify-between"
        >
          <div className="w-[40%] px-10 py-6 ">
            <h3>Task Title</h3>
            <input
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
              className="w-full px-4 py-1 rounded-md bg-transparent border-2 mb-2"
              type="text"
              placeholder="Make a UI Design"
            />
            <h3>Date</h3>
            <input
              onChange={(e) => setTaskDate(e.target.value)}
              value={taskDate}
              className="w-full px-4 py-1 rounded-md bg-transparent border-2 mb-2"
              type="date"
            />
            <h3>Assign To</h3>
            <input
              onChange={(e) => settaskAssignedTo(e.target.value)}
              value={taskAssignedTo}
              className="w-full px-4 py-1 rounded-md bg-transparent border-2 mb-2"
              type="text"
              placeholder="Employee Name"
            />
            <h3>Category</h3>
            <input
              onChange={(e) => settaskCategory(e.target.value)}
              value={taskCategory}
              className="w-full px-4 py-1 rounded-md bg-transparent border-2 mb-2"
              type="text"
              placeholder="Design, dev, etc"
            />
          </div>

          <div className="w-[40%] px-10 py-6 flex flex-col gap-2">
            <div>
              <h3>Description</h3>
              <textarea
                onChange={(e) => settaskDescription(e.target.value)}
                value={taskDescription}
                className="w-full rounded-md bg-transparent border-2"
                rows={8}
              ></textarea>
            </div>
            <button className="bg-green-400  w-full py-2 rounded-md">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;

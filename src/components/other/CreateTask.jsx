import React, { useState } from 'react'

const CreateTask = () => {

const [taskTitle, settaskTitle] = useState('')
const [taskDescription, settaskDescription] = useState('')
const [taskDate, settaskDate] = useState('')
const [Category, setCategory] = useState('')
const [asignTo, setasignTo] = useState('')

const [task, setTask] = useState({})
  const submitHandler = (e)=>{
    e.preventDefault()
    setTask({taskTitle,taskDescription,taskDate,Category,active:false,newTask:true,failed:false,completed:false})
    
  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form 
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className="flex flex-wrap w-full  items-start justify-between">
          <div className="w-1/2">
            <div>
              {" "}
              <h3 className="text-sm text-gray-300 mb-0.5">
                Task title <title></title>
              </h3>
              <input 
              value={taskTitle}
              onChange={(e)=>{
                settaskTitle(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="make a design" />
            </div>
            <div>
              {" "}
              <h3>Date</h3>
              <input
               value={taskDate}
              onChange={(e)=>{
                settaskDate(e.target.value)
              }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" />
            </div>
            <div>
              {" "}
              <h3 className="text-sm text-gray-300 mb-0.5">assign to</h3>
              <input
               value={asignTo}
              onChange={(e)=>{
                setasignTo(e.target.value)
              }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="employee name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">category</h3>
              <input
               value={Category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
               className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design,dev,ets" />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            {" "}
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
            value={taskDescription}
              onChange={(e)=>{
                settaskDescription(e.target.value)
              }}
             className="text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"  name="" id="" cols="30" rows="10"></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create task</button>
          </div>

          
        </form>
      </div>
  )
}

export default CreateTask
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completetask, deletetask, edittask } from '../redux/action'


const Task = ({task}) => {
    const [inpuaction, setinpuaction] = useState(task.action)
    const [open, setopen] = useState(false)
    const handleOpen=()=>setopen(true)
    const handleClose=()=>setopen(false)
   
    const dispatch = useDispatch()
    const handleEdit=()=>{
        const editedtask={
            id:task.id,
            action:inpuaction,
            isDone:task.isDone,

        }
        dispatch(edittask(editedtask))
        handleClose()
    }
    return (
        <div>
            {
                open? <div>
                    <input type="text" value={inpuaction} onChange={(e)=>setinpuaction(e.target.value)}/>
                  
                    <button onClick={handleEdit}>confirm</button>
                    <button onClick={handleClose}>cancel</button>
                </div>
         
            :<div>
                <h3 className={task.isDone?"done":""}>{task.action} </h3>
                <button onClick={()=>dispatch(deletetask(task.id))}>delete</button>
                <button onClick={()=>dispatch(completetask(task.id))}>{task.isDone?"undo":"complete"}</button>
                <button onClick={handleOpen}>Edit</button>
            </div>
               }
        </div>
    )
}

export default Task

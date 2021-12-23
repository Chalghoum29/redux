import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask, filterTask } from '../redux/action'

const Addtask = () => {
    const [text, settext] = useState('')
    const dispatch = useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTask={
            id:Math.random(),
            action:text,
            isDone:false,


        }
        dispatch(addtask(newTask))
        settext('')
    }
    return (
        <div>
            <div>
            <h1>To Do List</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" valeur={text} onChange={(e)=>settext(e.target.value)} />
                    <button>Add</button>
                </form>
                    <button onClick={()=>dispatch(filterTask())}>filter</button>
            </div>
        </div>
    )
}

export default Addtask

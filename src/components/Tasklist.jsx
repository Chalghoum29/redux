import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const Tasklist = () => {
    const {tasks,filter} = useSelector(state => state)
    // console.log(tasks)
    return (
        
        <div>
            
            {
                !filter ?
                tasks.map((el,i)=>
                    <Task task={el} key={i}/>
                    )
            :
            tasks.filter(task=>!task.isDone).map((el,i)=>
            <Task task={el} key={i}/>
            )
                }
            
        </div>
    )
}

export default Tasklist

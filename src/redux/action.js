import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK, FILTER_TASK } from "./actionType"


export const deletetask=(id)=>{
    return{
        type:DELETE_TASK,
        payload:id ,
    }
}
export const completetask=(id)=>{
    return{
       type: COMPLETE_TASK,
       payload:id,
    }
}
export const addtask=(newTask)=>{
    return{
        type:ADD_TASK,
        pyload:newTask,
    }
}
export const edittask=(editedtask)=>{
    return{
        type:EDIT_TASK,
        payload:editedtask,
    }
}
export const filterTask=()=>{
    return{
        type:FILTER_TASK,
    }
}
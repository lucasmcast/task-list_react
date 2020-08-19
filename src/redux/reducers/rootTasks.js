import { ADD_TASK, DATA_TABLE, DEL_TASK, UPDATE_TASK } from "../actionsTypes"

const initialState = {
    tasks:[]
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK: {
            const task  = action.payload.task
            return {...state, tasks: [...state.tasks,task]}
            
        }
        case DATA_TABLE: {
            const tasksTable = action.payload.tasksTable
            return {...state,  tasks: tasksTable}

        }
        case DEL_TASK: {
            const indexTable = action.payload.indexTable;
            let newTasks = [...state.tasks]; //colocar entre colchotes para copiar todos os items
            newTasks.splice(indexTable,1)
            return {...state, tasks: newTasks}
        
        }
        case UPDATE_TASK:{
            const {indexTable, task} = action.payload
            let newTasks = [...state.tasks];
            newTasks[indexTable] = task
            return {...state, tasks: newTasks}
        }
        default:
            return state;
    }
}

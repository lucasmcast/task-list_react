import { ADD_TASK, DATA_TABLE } from './actionsTypes'

// export const addTask = description => ({
//     type: ADD_TASK,
//     task: {
//         description
//     }
// });

//export const addTask = (description) => {return({type:ADD_TASK, task: {description}})}
export function addTask(description){
    return (
        {
            type: ADD_TASK,
            description
        }
    )
}

export const dataTable = tasks => ({
    type: DATA_TABLE,
    tasks: tasks
})
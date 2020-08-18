import { ADD_TASK, DATA_TABLE } from './actionsTypes'

export const addTask = task => ({
     type: ADD_TASK,
     payload:{
         task
     }
});

export const dataTable = (dataTable) => ( {
        type: DATA_TABLE,
        payload: {
            dataTable
        }
    }
)

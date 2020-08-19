import { ADD_TASK, DATA_TABLE } from './actionsTypes'

export const addTask = task => ({
     type: ADD_TASK,
     payload:{
         task
     }
});

export const addAllTable = (tasksTable) => ( {

        type: DATA_TABLE,
        payload: {
            tasksTable
        }
    }
)

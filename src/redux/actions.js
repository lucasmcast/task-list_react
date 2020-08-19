import { ADD_TASK, DATA_TABLE, DEL_TASK, UPDATE_TASK } from './actionsTypes'

export const addTask = task => ({
    type: ADD_TASK,
    payload: {
        task
    }
});

export const addAllTable = (tasksTable) => ({

    type: DATA_TABLE,
    payload: {
        tasksTable
    }
}
)

export const delTaskTable = (indexTable) => ({
    type: DEL_TASK,
    payload: {
        indexTable
    }
})

export const updateTaskTable = (indexTable, task) => ({
    type: UPDATE_TASK,
    payload: {
        indexTable,
        task
    }
})
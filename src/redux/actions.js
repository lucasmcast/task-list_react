import { ADD_TASK } from './actionsTypes'

export const addTask = description => ({
    type: ADD_TASK,
    payload: {
        description
    }
});
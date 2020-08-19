import { ADD_TASK, DATA_TABLE } from "../actionsTypes"

const initialState = {
    tasks:[]
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK: {
            console.log(state)
            const task  = action.payload.task
            return [...state, task]
            
        }
        case DATA_TABLE: {
            const tasksTable = action.payload.tasksTable
            return state.tasks = tasksTable

        }
        default:
            return state;
    }
}

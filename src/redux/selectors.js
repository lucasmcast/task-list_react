export const getTasksState = store => store.tasks

export const getTaskList = store =>
    getTasksState(store) ? getTasksState(store).tasks : []

export const getAllTasks = store =>
    getTaskList(store).map(id => getTaskById(store, id))

export const getTasksState = store => store.tasks

export const getTaskList = store =>
    getTasksState(store) ? getTasksState(store).tasks : []

export const getTaskById = (store, index) =>
    getTasksState(store) ? {...getTasksState(store).tasks[index], index}: {}


export const getAllTasks = store => 
    getTaskList(store).map((task, index) => 
       getTaskById(store, index)
     )



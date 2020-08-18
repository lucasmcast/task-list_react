import { ADD_TASK, DATA_TABLE } from "../actionsTypes"
import TaskModel from "../../models/TaskModel"
import TaskDAO from '../../dao/taskDAO'
import TableController from "../../controllers/tableController"

const initialState = {tasks: []}
var controller = new TableController()

export default function(state = initialState, action){
    switch (action.type) {
        case ADD_TASK: {
            const description = action.description
            if(description !== ''){
                console.log(description)
    
                let task = new TaskModel()
                task.setDescricao(description)
                task.setSituacao("Pendente")
                controller.save(task).then((resp) =>{
                    task.setId(resp)
                })
                return{...state, tasks: [...state.tasks, task]}
            }else{
                alert("Digite Uma tarefa")
            }
            break;
           
        }
        case DATA_TABLE:{
            console.log(action)
            break
        }
        default:
            return state;
    }
}
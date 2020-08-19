import React from 'react';
import { connect } from 'react-redux'
import { delTaskTable, updateTaskTable } from '../../redux/actions'
import TableController from '../../controllers/tableController';
import EditDesc from './EditDesc'

/**
 * Component ButtonTable.
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * @version 2.0.0
 * 
 */

var controller = new TableController();

/**
 * 
 * @param {TaskModel} taskModel 
 * @param {Array} tasksArray 
 * @param {Function} dispatch 
 */
let handleClickButtonDelete = (taskModel, tasksArray, dispatch) => event => {
    let idTask = taskModel.getId()
    let index = findIndexArray(idTask, tasksArray)
    try{
        controller.delete(idTask)
        dispatch(index)
    }catch(e){
        throw new Error("Erro ao Excluir Tarefa. " + e)
    }
    
}
/**
 * 
 * @param {TaskModel} taskModel 
 * @param {Array} tasksArray 
 * @param {Function} dispatch 
 */
let handleClickButtonFinish = (taskModel, tasksArray, dispatch) => event => {
    let idTask = taskModel.getId()
    let index = findIndexArray(idTask, tasksArray)
    taskModel.setSituacao("Concluido")
    try{
        controller.edit(taskModel)
        dispatch(index, taskModel);
    }catch (e) {
        throw new Error("Erro ao Concluir Tarefa. " + e)
    }
}

/**
 * TODO: Implementar o Salvar a alteração
 * @param {TaskModel} taskModel 
 * @param {Array} tasksArray 
 * @param {Function} dispatch 
 */
let handleClickButtonUpdate = (taskModel, tasksArray, dispatch) => event => {
    let idTask = taskModel.getId()
    let index = findIndexArray(idTask, tasksArray)
    
    let editDesc = <EditDesc 
        value={taskModel.getDescricao()}
    />

    taskModel.setDescricao(editDesc)
    taskModel.setBotoes("update")
    try{
        dispatch(index, taskModel);
    }catch (e) {
        throw new Error("Erro ao Atualizar Tarefa. " + e)
    }
}

/**
 * search the index in the array using the task id;
 * @param {Integet} idTask 
 * @param {Array} tasksArray 
 */
const findIndexArray = (idTask, tasksArray) => {
    let index;

    for(let i = 0; i < tasksArray.length; i++){   
        let idTable = tasksArray[i].id
        if(idTask === idTable){
            index = i
        }
    }

    return index

}
/**
 * Componet Button
 * @param {Props} props 
 */
function ButtonTable(props) {
    let onClick;
    let taskModel = props.task
    let dispatch;

    if(props.variant === "delete"){
        onClick = handleClickButtonDelete
        dispatch = props.delTaskTable
    }else if(props.variant === "finish"){
        onClick = handleClickButtonFinish
        dispatch = props.updateTaskTable
        
    }else if(props.variant === "update"){
        onClick = handleClickButtonUpdate
        dispatch = props.updateTaskTable
    }

    return (
        <button
            className={`btn-${props.nameButton}`}
            onClick={onClick(taskModel, props.tasks, dispatch)}
        >
            {props.nameButton}
        </button>
    )

}
const mapStateToProps = (state) =>{
    return(
        {tasks: state.rootTasks.tasks}
    )
}
export default connect(mapStateToProps, {delTaskTable, updateTaskTable})(ButtonTable);
import React from 'react';
import './style.css'
import Table from '../Table';
import ButtonTable from './ButtonTable';
import AddTask from '../AddTask';
import { connect } from 'react-redux';
import TaskModel from '../../models/TaskModel';

/**
 * 
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * 
 */
var cells = ["ID", "Descrição", "Situação", "Ação"]

const createMultipleRowsTable = (tasks) =>{
    let data = []
    tasks.forEach(task => {
        const row = createRowTable(task);
        data.push(row)      
    });
    return data
}

function createRowTable(taskModel){
    taskModel.setBotoes(createButtonsActions(taskModel))
    const row = {
        row: [
            taskModel.getId(),
            taskModel.getDescricao(),
            taskModel.getSituacao(),
            taskModel.getBotoes()
        ]
    };
    return row;
}



function createButtonsActions(taskModel){
    let buttons;

    if(taskModel.getBotoes() === "update"){
        buttons = []
        return buttons
    }
    buttons = [
        <ButtonTable key={taskModel.getId()}  variant="delete" nameButton={"Apagar"} task={taskModel}/>,
        <ButtonTable key={taskModel.getId() + 1} variant="finish" nameButton={"Concluir"} task={taskModel}/>,
        <ButtonTable key={taskModel.getId() + 2} variant="update" nameButton={"Editar"} task={taskModel}/>
    ];

    return buttons;
}


const Container = (props) => {
    console.log(props)
    let rowsTable = createMultipleRowsTable(props.tasks)
    
    return(
    <div className="container">
        <AddTask>
        </AddTask>
        <Table
            key={Math.random()}
            cells={cells}
            data={rowsTable}
        >
        </Table>
    </div>
)}

const mapStateToProps = (state)=>{
    return(
        {tasks: state.rootTasks.tasks}
    )
}
export default connect(mapStateToProps)(Container);

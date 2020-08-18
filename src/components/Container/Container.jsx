import React from 'react';
import './style.css'
import Table from '../Table';
import ButtonTable from './ButtonTable';
import AddTask from '../AddTask';
import { connect } from 'react-redux';
import { dataTable } from '../../redux/actions';
import { getAllTasks } from '../../redux/selectors'
import TableController from '../../controllers/tableController';
import TaskModel from '../../models/TaskModel';

/**
 * 
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * 
 */
var cells = ["ID", "Descrição", "Situação", "Ação"]
var controller = new TableController();

const createMultipleRowsTable = (tasks) =>{
    let data = []
    tasks.forEach(task => {
        const row = createRowTable(task);
        data.push(row)      
    });
    return data
}

function createRowTable(taskModel){
    console.log(taskModel)
    taskModel.task.setBotoes(createButtonsActions(taskModel))
    const row = {
        row: [
            taskModel.task.getId(),
            taskModel.task.getDescricao(),
            taskModel.task.getSituacao(),
            taskModel.task.getBotoes()
        ]
    };
    return row;
}


function createButtonsActions(taskModel){
    let buttons = [
        <ButtonTable key={taskModel.task.getId} /* onClick={this.handleClickButtonApagar.bind(this, taskModel)} */ nameButton={"Apagar"}/>,
        <ButtonTable key={taskModel.task.getId + 1} /* onClick={this.handleClickButtonConcluir.bind(this, taskModel)} */ nameButton={"Concluir"}/>,
        <ButtonTable key={taskModel.task.getId + 2} /* onClick={this.handleClickButtonEditar.bind(this, taskModel)} */ nameButton={"Editar"}/>
    ];

    return buttons;
}
const getDataDB = () =>{
    
    let data = [];

    controller.getAll().then((resp) => {
        resp.forEach((task) =>{
            let taskModel = new TaskModel();
            taskModel.setDescricao(task.descricao);
            taskModel.setSituacao(task.situacao);
            taskModel.setId(task.id)
            data.push(taskModel)
        })
    });

    return data
}
const Container = (props) => {
    props.dataTable(getDataDB())
    console.log(props)
    //let data  = createMultipleRowsTable(props.tasks)
    
    return(
    <div className="container">
        <AddTask>
        </AddTask>
        <Table
            key={Math.random()}
            cells={cells}
            data={[]}
        >
        </Table>
    </div>
)}

export default connect( state => ({tasks : state.tasks}), {dataTable})(Container);

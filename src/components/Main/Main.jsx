import React, { Component } from 'react';
import Container from '../Container'
import { addAllTable } from '../../redux/actions';
import TaskModel from '../../models/TaskModel';
import TableController from '../../controllers/tableController';
import { connect } from 'react-redux';
import './style.css'

var controller = new TableController();

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

let dataDB = getDataDB();

function Main(props) {
        
        props.addAllTable(dataDB)
        return(
            <main>
                <h1>Lista de Tarefa</h1>
                <Container/>
            </main>
          
        )
  
}

export default connect(null, {addAllTable})(Main);
import React, { Component } from 'react';
import './style.css'
import Table from '../Table';
import ButtonTable from './ButtonTable';
import AddTask from '../AddTask';
import EditDesc from './EditDesc';

/**
 * 
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * 
 */
class Container extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: this.createMultipleRowsTable(),
            addTask: this.props.addTask,
            clickDelete: this.props.clickDelete,
            clickFinish: this.props.clickFinish,
            clickEdit: this.props.clickEdit
        }
        this.cells = ["ID", "Descrição", "Situação", "Ação"]
    }

    /**
     * 
     * @param {TaskModel} taskModel 
     */
    handleClickButtonApagar(taskModel){

        let idTask = taskModel.getId()
        this.state.clickDelete(taskModel);
        let index = this.findIndexArray(idTask)
        this.state.data.splice(index,1)
        this.setState({data: this.state.data});
    }

    /**
     * 
     * @param {TaskModel} taskModel 
     * 
     * TODO - Corrigir busca do banco de dados para tarefa concluida;
     */
    handleClickButtonConcluir(taskModel){
        let arrayData = this.state.data
        taskModel.setSituacao("Concluído")
        this.state.clickFinish(taskModel);
        
        let idTask = taskModel.getId()
        let index = this.findIndexArray(idTask);
        let row = {
            row: [
                taskModel.getId(), 
                taskModel.getDescricao(),
                taskModel.getSituacao(),
                <ButtonTable 
                    key={taskModel.getId()} 
                    onClick={this.handleClickButtonApagar.bind(this, taskModel)} 
                    nameButton={"Apagar"}/>
            ]
        }
        arrayData[index] = row
        this.setState({data: arrayData})
    }

     /**
     * 
     * 
     * @param {TaskModel} taskModel 
     */
    handleClickButtonEditar(taskModel){
        //this.state.clickEdit(task);
        let arrayData = this.state.data
        let idTask = taskModel.getId()
        let index = this.findIndexArray(idTask);

        let editDesc = <EditDesc 
            value={taskModel}
            onClick={this.handleSaveEditDescription.bind(this)}
            index={index}/>
        let row = {row: [
            taskModel.getId(),
            editDesc, 
            taskModel.getSituacao(),
            []
            //this.createButtonsActions(task)
        ]}

        
        arrayData[index] = row
        this.setState({data: arrayData})
    }

    /**
     * search the index in the array using the task id;
     * 
     * @param {Integer} idTask - Id TaskModel 
     * 
     * @returns Integer - Index of table array
     */
    findIndexArray(idTask){
        let index;
    
        const ID_TASK_OF_TABLE = 0;

        for(let i = 0; i < this.state.data.length; i++){
            let idTable = this.state.data[i].row[ID_TASK_OF_TABLE]
            if(idTask === idTable){
                index = i
            }
        }
        
        return index;
    }

   
    /**
     * Creates buttons to be rendered in the action column
     * 
     * @param {TaskModel} taskModel
     * 
     * @returns Array of Buttons 
     */
    createButtonsActions(taskModel){
        let buttons = [
            <ButtonTable key={taskModel.getId()} onClick={this.handleClickButtonApagar.bind(this, taskModel)} nameButton={"Apagar"}/>,
            <ButtonTable key={taskModel.getId() + 1} onClick={this.handleClickButtonConcluir.bind(this, taskModel)} nameButton={"Concluir"}/>,
            <ButtonTable key={taskModel.getId() + 2} onClick={this.handleClickButtonEditar.bind(this, taskModel)} nameButton={"Editar"}/>
        ];

        return buttons;
    }

    /**
     * Creates the table with the data obtained from the database
     * 
     * @returns Array for render table. data = [{row: []}]
     */
    createMultipleRowsTable(){
        let data = []
        this.props.data.forEach(task => {
            const row = this.createRowTable(task);
            data.push(row)      
        });
        return data
    }

    /**
     * Create a table row according to the data that the table accepts
     * 
     * @param {TaskModel} taskModel
     * 
     * @returns Object - {row: []}
     */
    createRowTable(taskModel){
        taskModel.setBotoes(this.createButtonsActions(taskModel));
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

    /**
     * Add the task to the database, and render the table with the new task
     * 
     * @param {TaskModel} taskModel 
     */
    async addTask(taskModel){
        let response = await this.state.addTask(taskModel);
        taskModel.setId(response);
        const row = this.createRowTable(taskModel);
        const newData = [...this.state.data, row]
        let newState = {data: newData}
        this.setState(newState);
    }

    /**
     * Saves the edited task. 
     * This function depends on the click of the edit button,
     * that enables an input and a button in the description field.
     * 
     * @param {TaskModel} taskModel 
     * @param {Integer} index - index of array table 
     */
    handleSaveEditDescription(taskModel, index){
        let arrayData = this.state.data
        let row = this.createRowTable(taskModel);
        arrayData[index] = row
        this.setState({data: arrayData})
        this.state.clickEdit(taskModel);
    }
   
    render(){
        return(
            <div className="container">
                <AddTask
                    addTask={this.addTask.bind(this)}
                >
                </AddTask>
               <Table
                    key={Math.random()} 
                    cells={this.cells}
                    data={this.state.data}
                >
               </Table>
            </div>
        );
    }
}

export default Container;
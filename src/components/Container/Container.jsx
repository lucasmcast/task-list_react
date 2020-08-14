import React, { Component } from 'react';
import './style.css'
import Table from '../Table';
import ButtonTable from './ButtonTable';

/**
 * @author Lucas Martins de Castro
 * @since 1.0.0
 */
class Container extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: this.createRowsTable(),
            clickDelete: this.props.clickDelete,
            clickFinish: this.props.clickFinish,
            clickEdit: this.props.clickEdit
        }
        this.cells = ["ID", "Descrição", "Situação", "Ação"]
    }


    handleClickButtonApagar(task){

        let idTask = task.getId()
        this.state.clickDelete(task);
        let index;
        const ID_TASK_OF_TABLE = 0;

        for(let i = 0; i < this.state.data.length; i++){
            let idTable = this.state.data[i].row[ID_TASK_OF_TABLE]
            if(idTask == idTable){
                index = i
            }
        }
        this.state.data.splice(index, 1)
        this.setState({data: this.state.data})
    }

    /**
     * TODO: metodo não esta implementado
     * @param {TaskModel} task 
     */
    handleClickButtonConcluir(task){
        this.state.clickFinish(task);
    }

    /**
     * TODO: metodo não esta implementado
     * @param {TaskModel} task 
     */
    handleClickButtonEditar(task){
        this.state.clickEdit(task);
    }

    createButtonsActions(task){
        let buttons = [
            <ButtonTable key={task.getId()} onClick={this.handleClickButtonApagar.bind(this, task)} nameButton={"Apagar"}/>,
            <ButtonTable key={task.getId() + 1} onClick={this.handleClickButtonConcluir.bind(this, task)} nameButton={"Concluir"}/>,
            <ButtonTable key={task.getId() + 2} onClick={this.handleClickButtonEditar.bind(this, task)} nameButton={"Editar"}/>
        ];

        return buttons;
    }
    createRowsTable(){
        //Modelo de dados da tabela
        let data = []
        this.props.data.forEach(task => {
            task.setBotoes(this.createButtonsActions(task))
            data.push({
                row: [
                    task.getId(), 
                    task.getDescricao(), 
                    task.getSituacao(),
                    task.getBotoes()
                ]
            })      
        });
        return data
    }

    render(){
        return(
            <div className="container">
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
import React, { Component } from 'react';
import InputAddTask from './InputAddTask';
import ButtonAddTask from './ButtonAddTask';
import './style.css'
import TaskModel from '../../models/TaskModel';
import { addTask } from '../../redux/actions'
import { connect } from 'react-redux'

/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */

class AddTask extends Component{

    constructor(props){
        super(props)
        this.state = {
            description: ''
        }
    }

    /**
     * Change this.task
     * @param {Event} event 
     */
    handleChangeTask(event){
        const valueInput = event.target.value;
        this.setState({description: valueInput})
    }

    /**
     * calls the add task function if the add button is clicked
     * @see models.TaskList.addTask
     */
    handleClickButtonAddTask(event){
        this.props.addTask(this.state.description);
        this.setState({description: ''})
        /* if (this.state.task !== ''){
            let taskModel = new TaskModel();
            taskModel.setDescricao(this.state.task);
            taskModel.setSituacao("Pendente");
            this.state.addTask(taskModel);
            const valueInput = '';
            this.setState({task: valueInput});
        }else{
            alert("Digite uma tarefa")
        } */
        
    }

    /**
     * calls the add task function if key Enter pressed
     * @param {Event} event - Event 
     * @see models.TaskListView.addTask()
     */
    handleOnKeyUpAddTask(event){
        if(event.key === 'Enter'){
            if(this.state.description !== ''){
                let taskModel = new TaskModel();
                taskModel.setDescricao(this.state.description);
                taskModel.setSituacao("Pendente");
                this.state.addTask(taskModel);
                const valueInput = '';
                this.setState({task: valueInput});
            }else{
                alert("Digite uma tarefa")
            }
            
        }
    }

    render(){
        return(
            <div className="Add-Task">
                <InputAddTask
                    onChange={this.handleChangeTask.bind(this)}
                    onKeyUp={this.handleOnKeyUpAddTask.bind(this)}
                    value={this.state.description}
                ></InputAddTask>
                <ButtonAddTask onClick={this.handleClickButtonAddTask.bind(this)}></ButtonAddTask>
            </div>
        )
        
    }
}

export default connect(
    null,
    {addTask}
)(AddTask);
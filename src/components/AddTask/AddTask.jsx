import React, { Component } from 'react';
import InputAddTask from './InputAddTask';
import ButtonAddTask from './ButtonAddTask';
import './style.css'
import TaskModel from '../../models/TaskModel';

/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
class AddTask extends Component{

    constructor(props){
        super(props)
        this.state = {
            task: '',
            addTask: this.props.addTask
        }
    }

    /**
     * Change this.task
     * @param {Event} event 
     */
    handleChangeTask(event){
        const valueInput = event.target.value;
        this.setState({task: valueInput})
    }

    /**
     * calls the add task function if the add button is clicked
     * @see models.TaskList.addTask
     */
    handleClickButtonAddTask(event){
        if (this.state.task !== ''){
            let taskModel = new TaskModel();
            taskModel.setDescricao(this.state.task);
            taskModel.setSituacao("Pendente");
            this.state.addTask(taskModel);
            const valueInput = '';
            this.setState({task: valueInput});
        }else{
            alert("Digite uma tarefa")
        }
        
    }

    /**
     * calls the add task function if key Enter pressed
     * @param {Event} event - Event 
     * @see models.TaskListView.addTask()
     */
    handleOnKeyUpAddTask(event){
        if(event.key === 'Enter'){
            if(this.state.task !== ''){
                let taskModel = new TaskModel();
                taskModel.setDescricao(this.state.task);
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
                    clean={this.state.clean}
                    value={this.state.task}
                ></InputAddTask>
                <ButtonAddTask onClick={this.handleClickButtonAddTask.bind(this)}></ButtonAddTask>
            </div>
        )
        
    }
}

export default AddTask;
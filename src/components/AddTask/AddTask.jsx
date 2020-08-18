import React, { Component } from 'react';
import InputAddTask from './InputAddTask';
import ButtonAddTask from './ButtonAddTask';
import './style.css'
import TaskModel from '../../models/TaskModel';
import { addTask } from '../../redux/actions'
import { connect } from 'react-redux'
import TableController from '../../controllers/tableController';

/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */

class AddTask extends Component {

    constructor(props) {
        super(props)
        this.controller = new TableController()
        this.state = {
            description: ''
        }
    }

    /**
     * Change this.task
     * @param {Event} event 
     */
    handleChangeTask(event) {
        const valueInput = event.target.value;
        this.setState({ description: valueInput })
    }

    /**
     * calls the add task function if the add button is clicked
     * @see models.TaskList.addTask
     */
    handleClickButtonAddTask(event) {
        if (this.state.description !== '') {
            let taskModel = new TaskModel();
            taskModel.setDescricao(this.state.description);
            taskModel.setSituacao("Pendente");
            this.controller.save(taskModel).then((resp) => {
                taskModel.setId(resp)
                this.props.addTask(taskModel);
                this.setState({ description: '' })
            });

        } else {
            alert("Digite uma tarefa")
        }

    }

    /**
     * calls the add task function if key Enter pressed
     * @param {Event} event - Event 
     * @see models.TaskListView.addTask()
     */
    handleOnKeyUpAddTask(event) {
        if (event.key === 'Enter') {
            if (this.state.description !== '') {
                let taskModel = new TaskModel();
                taskModel.setDescricao(this.state.description);
                taskModel.setSituacao("Pendente");
                this.controller.save(taskModel).then((resp) => {
                    taskModel.setId(resp)
                    this.props.addTask(taskModel);
                    this.setState({ description: '' })
                });
            } else {
                alert("Digite uma tarefa")
            }

        }
    }

    render() {
        return (
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
    { addTask }
)(AddTask);
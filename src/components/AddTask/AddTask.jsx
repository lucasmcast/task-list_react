import React, { Component } from 'react';
import InputAddTask from './InputAddTask';
import ButtonAddTask from './ButtonAddTask';
import './style.css'

class AddTask extends Component{

    constructor(props){
        super(props)
        this.task = ''
        this.state = {
            clean: false,
            addTask: this.props.addTask
        }
    }

    /**
     * Change this.task
     * @param {Event} event 
     */
    handleChangeTask(event){
        this.task = event.target.value
    }

    /**
     * call funcion creates in View
     * @see models.TaskList.addTask
     */
    addClickButton(event){
        this.state.addTask(this.task)
        this.setState({clean: true})
        this.render();
    }

    render(){
        return(
            <div className="Add-Task">
                <InputAddTask
                    onChange={this.handleChangeTask.bind(this)}
                    clean={this.state.clean}
                ></InputAddTask>
                <ButtonAddTask onClick={this.addClickButton.bind(this)}></ButtonAddTask>
            </div>
        )
        
    }
}

export default AddTask;
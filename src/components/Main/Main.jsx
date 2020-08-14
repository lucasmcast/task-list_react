import React, { Component } from 'react';
import Container from '../Container'
import './style.css'
import AddTask from '../AddTask';

class Main extends Component{

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            addTask: this.props.addTask,
            clickDelete: this.props.clickDelete,
            clickFinish: this.props.clickFinish,
            clickEdit: this.props.clickEdit
        }
    }
    
    render() {
        return(
            <main>
                <h1>Lista de Tarefa</h1>
                <AddTask
                    addTask={this.state.addTask}
                >
                </AddTask>
                <Container 
                    data={this.state.data}
                    clickDelete= {this.state.clickDelete}
                    clickFinish= {this.state.clickFinish}
                    clickEdit= {this.state.clickEdit}
                />
            </main>
          
        )
    }
}

export default Main;
import React, { Component } from 'react';
import Container from '../Container'
import './style.css'


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
                <Container /* 
                    data={this.state.data}
                    addTask={this.state.addTask}
                    clickDelete= {this.state.clickDelete}
                    clickFinish= {this.state.clickFinish}
                    clickEdit= {this.state.clickEdit} */
                />
            </main>
          
        )
    }
}

export default Main;
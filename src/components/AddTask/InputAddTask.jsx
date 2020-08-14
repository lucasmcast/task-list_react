import React, { Component } from 'react';

class InputAddTask extends Component{

    constructor(props){
        super(props)
        this.state = {
            clean : this.props.clean,
            onChange: this.props.onChange
        }
    }

    render(){
        console.log(this.state.clean)
        return(
            <input 
                placeholder="Qual será sua tarefa? "
                onChange={this.state.onChange}
            >
            </input>
        )
    }
}

export default InputAddTask;
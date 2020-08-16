import React, { Component } from 'react';

class InputAddTask extends Component{

    constructor(props){
        super(props)
        this.state = {
            onChange: this.props.onChange,
            onKeyUp: this.props.onKeyUp
        }
    }

    render(){
        return(
            <input 
                placeholder="Qual será sua tarefa? "
                onChange={this.state.onChange}
                value={this.props.value}
                onKeyUp={this.state.onKeyUp}
            >
            </input>
        )
    }
}

export default InputAddTask;
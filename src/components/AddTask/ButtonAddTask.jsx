import React, { Component } from 'react';

class ButtonAddTask extends Component{

    constructor(props){
        super(props)
        this.state = {
            onClick: this.props.onClick
        }
    }

    render(){
        return(
            <button
                onClick={this.state.onClick}
            >Adicionar</button>
        )
    }
}

export default ButtonAddTask;
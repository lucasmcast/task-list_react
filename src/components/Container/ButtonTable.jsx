import React, { Component } from 'react';

class ButtonTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.nameButton,
            onClick: this.props.onClick
        }
    }
    render() {
        return (
            <button 
                className={`btn-${this.state.name}`}
                onClick={this.state.onClick}
            >
            {this.state.name}
            </button>
        )
    }
}

export default ButtonTable;
import React, { Component } from 'react';

/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
class EditDesc extends Component{

    constructor(props){
        super(props)
        this.state = {
            descricao: this.props.value.getDescricao(),
            onClick: this.props.onClick,
            task: this.props.value,
            index: this.props.index
        }
    }
    
    handleOnChange(event){
        let valueInput = event.target.value
        this.setState({descricao: valueInput})
        console.log(this.state.descricao)
    }

    handleOnclick(event){
        let task = this.state.task
        task.setDescricao(this.state.descricao);
        this.state.onClick(task, this.state.index)
    }
    render(){
        return(
            <div>
                <input 
                    value={this.state.descricao}
                    onChange={this.handleOnChange.bind(this)}>
                </input>
                <button
                    onClick={this.handleOnclick.bind(this)}
                >Salvar</button>
            </div>
        )
    }
}

export default EditDesc;
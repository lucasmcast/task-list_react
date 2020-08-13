import React, { Component } from 'react';
import './style.css'
import Table from '../Table';
import ButtonTable from './ButtonTable';

class Container extends Component{
    constructor(props){
        super(props)
    }

    handleClickButtonApagar(){
        console.log("Apagar")
    }

    handleClickButtonConcluir(){
        console.log("Concluir")
    }

    handleClickButtonEditar(){
        console.log("Editar")
    }

    render(){
        //Modelo de dados da tabela
        let data = [
            {
                row: [
                    "12",
                    "Ola",
                    "Comn", 
                    [
                    <ButtonTable onClick={this.handleClickButtonApagar} nameButton={"Apagar"}/>,
                    <ButtonTable onClick={this.handleClickButtonConcluir} nameButton={"Concluir"}/>,
                    <ButtonTable onClick={this.handleClickButtonEditar} nameButton={"Editar"}/>
                    ]
                ]
            },
            {
                row: [
                    "13",
                    "kkkk",
                    "Uhuhu", 
                    [
                    <ButtonTable onClick={this.handleClickButtonApagar} nameButton={"Apagar"}/>,
                    <ButtonTable onClick={this.handleClickButtonConcluir} nameButton={"Concluir"}/>,
                    <ButtonTable onClick={this.handleClickButtonEditar} nameButton={"Editar"}/>
                    ]
                ]
            }      
        ]
        return(
            <div className="container">
               <Table 
                    cells={["ID", "Descrição", "Situação", "Ação"]}
                    data={data}
                >
               </Table>
            </div>
        );
    }
}

export default Container;
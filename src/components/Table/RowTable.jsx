import React, { Component } from 'react';

class RowTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            row: this.props.row,
            id: this.props.id,
            cells: this.props.cells
        }
    }
    render() {
        return (
            <tr key={this.state.id}>
                {
                    this.state.cells.map((col, index) => {
                        if(this.state.row[index] instanceof Object){
                            return(
                                <td key={index} className={`obj-${col.toLowerCase()}`}>
                                    {this.state.row[index]}
                                </td>
                            )
                        }else{
                            return(
                                <td key={index} className={`obj-${col.toLowerCase()}`}>
                                    {this.state.row[index]}
                                </td>
                            )
                        }
                        
                    })
                }

            </tr>
        )
    }
}

export default RowTable;
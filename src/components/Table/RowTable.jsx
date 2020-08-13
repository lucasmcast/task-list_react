import React, { Component } from 'react';

class RowTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            row: this.props.row,
            cells: this.props.cells
        }
    }
    render() {
        return (
            <tr>
                {
                    this.state.cells.map((col, index) => {
                        return(
                        <td key={index}>
                            {this.state.row[index]}
                        </td>
                        )
                    })
                }

            </tr>
        )
    }
}

export default RowTable;
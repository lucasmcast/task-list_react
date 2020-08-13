import React, { Component } from 'react';
import './style.css'
import ColumnTable from './ColumnTable';
import RowTable from './RowTable';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cells: this.props.cells,
            data: this.props.data
        }
    }
    render() {
        return (
            <table className="customers-Table">
                <thead>
                    <tr>
                        {
                            this.state.cells.map((coll) => {
                                return (
                                    <ColumnTable
                                        key={coll}
                                        label={coll}>
                                    </ColumnTable>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((row, index) => {
                            return (
                                <RowTable
                                    key={index + 1}
                                    cells={this.state.cells}
                                    row={row.row}
                                >
                                </RowTable>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;
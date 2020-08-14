import React, { Component } from 'react';
import './style.css'
import ColumnTable from './ColumnTable';
import RowTable from './RowTable';

/**Component Table. The table component receives as properties
 * the columns to be created receiving an array and 
 * the data of the row receiving an array.
 * 
 * <pre>{@code
 * let rows = [{ row: [Array], {row: [Array]}}]
 * let cells = [Collums]
 * }</pre>
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cells: this.props.cells,
            rows: this.props.data
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
                        this.state.rows.map((row, index) => {
                            return (
                                <RowTable
                                    key={index}
                                    id={index}
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
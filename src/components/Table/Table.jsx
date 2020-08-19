import React, { Component } from 'react';
import './style.css'
import ColumnTable from './ColumnTable';
import RowTable from './RowTable';
import connect from 'react-redux'

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
function Table(props) {
    return (
        <table className="customers-Table">
            <thead>
                <tr>
                    {
                        props.cells.map((coll) => {
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
                    props.data.map((row, index) => {
                        return (
                            <RowTable
                                key={index}
                                id={index}
                                cells={props.cells}
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



export default Table;
import React, { Component } from 'react';

class ColumnTable extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <th>{this.props.label}</th>
        )
    }
}

export default ColumnTable;
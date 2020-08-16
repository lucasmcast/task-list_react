import React, { Component } from 'react';

class ColumnTable extends Component {

    render() {
        return (
            <th>{this.props.label}</th>
        )
    }
}

export default ColumnTable;
import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main/Main';

class TaskListView {

    constructor(routes) {
        this.routes = routes;
        this.render()
    }

    render() {
        ReactDOM.render(
            <React.StrictMode>
                <NavBar menuItems={this.routes} />
                <Main/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
}

export default TaskListView;
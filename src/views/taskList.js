import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main/Main';
import TaskModel from '../models/TaskModel';
import TableController from '../controllers/tableController';
import store from '../redux/store'
import { Provider } from 'react-redux'

/**
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
class TaskListView {

    constructor(routes) {
        this.routes = routes;
        this.controller = new TableController()
        this.render();
    }

    async addTask(taskModel){
        let response = await this.controller.save(taskModel)
        return response;
    }

    clickDelete(task){
        this.controller.delete(task.getId())
    }

    clickFinish(task){
        this.controller.edit(task);
        console.log("CONCLUIU", task)
    }

    clickEdit(task){
        this.controller.edit(task);
        console.log("EDITOU", task)
    }
    
    render() {
        let controller = new TableController()
        let tasksDB = controller.getAll();
        let tasks = []
        let routes = this.routes;
        let addTask = this.addTask.bind(this)
        let clickDelete = this.clickDelete.bind(this)
        let clickFinish = this.clickFinish.bind(this)
        let clickEdit = this.clickEdit.bind(this)

        tasksDB.then(function (data){
            for(let i = 0; i < data.length; i++){
                let task = new TaskModel();
                task.setId(data[i].id);
                task.setDescricao(data[i].descricao)
                task.setSituacao(data[i].situacao);
                tasks.push(task);
            }

            ReactDOM.render(
                <Provider store={store}>
                    <NavBar menuItems={routes} />
                    <Main 
                        data={tasks}
                        addTask={addTask}
                        clickDelete={clickDelete}
                        clickFinish={clickFinish}
                        clickEdit= {clickEdit}
                    />
                </Provider>,
                document.getElementById('root')
            );
        })
        
        

        
    }
}

export default TaskListView;
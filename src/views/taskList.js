import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main/Main';
import TaskModel from '../models/TaskModel';
import TableController from '../controllers/tableController';

class TaskListView {

    constructor(routes) {
        this.routes = routes;
        this.render();
    }

    addTask(description){
        let taskModel = new TaskModel()

        taskModel.setDescricao(description)
        taskModel.setSituacao("Pendente")

        let controller = new TableController()

        controller.save(taskModel)
    }

    clickDelete(task){
        let controller = new TableController()
        this.controller.delete(task.getId())
        console.log("APAGOU", task);
    }

    clickFinish(task){
        let controller = new TableController()
        console.log("CONCLUIU", task)
    }

    clickEdit(task){
        let controller = new TableController()
        console.log("EDITOU", task)
    }
    render() {
        let controller = new TableController()
        let tasksDB = controller.getAll();
        let tasks = []
        let routes = this.routes;
        let addTask = this.addTask
        let clickDelete = this.clickDelete
        let clickFinish = this.clickFinish
        let clickEdit = this.clickEdit

        tasksDB.then(function (data){
            for(let i = 0; i < data.length; i++){
                let task = new TaskModel();
                task.setId(data[i].id);
                task.setDescricao(data[i].descricao)
                task.setSituacao(data[i].situacao);
                tasks.push(task);
            }

            ReactDOM.render(
                <React.StrictMode>
                    <NavBar menuItems={routes} />
                    <Main 
                        data={tasks}
                        addTask={addTask}
                        clickDelete={clickDelete}
                        clickFinish={clickFinish}
                        clickEdit= {clickEdit}
                    />
                </React.StrictMode>,
                document.getElementById('root')
            );
        })
        
        

        
    }
}

export default TaskListView;
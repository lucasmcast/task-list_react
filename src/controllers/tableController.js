
import TaskDAO from '../dao/taskDAO'
/**
 * Class Model Table
 * 
 * Manipulate an html table
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 */
export default class TableController{

    constructor(){
        this.taskDao = new TaskDAO();
          
    }

    /**
     * get all data of database
     * 
     * @param {FunctionCallBack} callback 
     */
    async getAll() {
        let tasks = await this.taskDao.getAll();
        return tasks
    }

    delete(id){
        this.taskDao.delete(id);
    }

    /**
     * 
     * @param {TaskModel} task 
     * @param {DOMElement} buttons 
     * @param {TableModel} table 
     * @param {function callback} callback 
     */
    save(task){
       this.taskDao.save(task);
    }

}
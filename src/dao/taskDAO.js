import DataBase from './appDB.js'

/**
 * Class responsible for making persistence in the database
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * 
 */
export default class TaskDAO{
    constructor(){
        this.db = new DataBase();
    }

    /**
     * Save in the database
     * 
     * @param {Task Model} task 
     * @param {Function callback} callback 
     */
    save(task){
        return new Promise((resolve, reject) =>{
            this.db.con((db) => {
                let taskModel = task;
                var transaction = db.transaction(["tasks"], "readwrite");
                // Do something when all the data is added to the database.
                transaction.oncomplete = function(event) {
                    console.log("Success Save!");
                };
    
                transaction.onerror = function(event) {
                    throw new Error("Error Update Data");
                };
                var customerData = [{descricao: taskModel.getDescricao(), situacao: taskModel.getSituacao()}]
                var objectStore = transaction.objectStore("tasks");
                
                customerData.forEach(function(customer) {
                    var request = objectStore.put(customer);
                    request.onsuccess = function(event) {
                        resolve(request.result)
                    };
                });
            });
        });
    }

    /**
     * Get all datas in the database
     * 
     * @param {Function calback} callback 
     */
    getAll(){
        return new Promise((resolve, reject) =>{
            this.db.con((db) => {
                var objectStore = db.transaction(['tasks']).objectStore('tasks');
                var request = objectStore.getAll();
                request.onsuccess = (event) => {
                    resolve(request.result);
                }

                request.onerror = function (event) {
                    throw new Error("Error Update Data");
                }
            });  
        })
        
    }

    edit(task){
        this.db.con((db) =>{
            var objectStore = db.transaction(["tasks"], "readwrite").objectStore("tasks");
            var request = objectStore.get(task.getId());

            request.onsuccess = function(event) {
                
                let data = request.result
                data.descricao = task.getDescricao();
                data.situacao = task.getSituacao();

                let requestUpdate = objectStore.put(data);

                requestUpdate.onerror = function(event) {
                    throw new Error("Error Update Data");
                };

                requestUpdate.onsuccess = function(event) {
                    console.log("Task atualizada com sucesso")
                }
            }

            request.onerror = function(event) {
                throw new Error("Error Update Data");
            }
        });
    }

    getById(id, callback){
        this.db.con((db) => {
            var objectStore = db.transaction(["tasks"]).objectStore("tasks");
            var request = objectStore.get(id);
            request.onerror = function(event){
                throw new Error("Error Update Data");
            };

            request.onsuccess = function(event){
                callback(event.result);
            }
        })
    }

    /**
     * delete data of database
     * 
     * @param {Integer} id 
     */
    delete(id){
        this.db.con((db) => {
            var request = db.transaction(["tasks"], "readwrite")
                .objectStore("tasks")
                .delete(id);
            request.onsuccess = function(event) {
                console.log("Excluido com sucesso")
            };

            request.onerror = function(event) {
                throw new Error("Error Update Data");
            }
        });
    }
}
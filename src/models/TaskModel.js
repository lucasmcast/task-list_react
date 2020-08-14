/**
 * Class model of task creates
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
class TaskModel{
    constructor(){
        this.id = null;
        this.descricao = '';
        this.situacao = '';
        this.botoes = []
    }

    setId(id){
        this.id = id
    }

    setDescricao(descricao){
        this.descricao = descricao
    }

    setSituacao(situacao){
        this.situacao = situacao
    }

    setBotoes(arrayBotoes){
        this.botoes = arrayBotoes;
    }

    getId(){
        return this.id;
    }

    getDescricao(){
        return this.descricao;
    }

    getSituacao(){
        return this.situacao;
    }

    getBotoes(){
        return this.botoes
    }
    
}

export default TaskModel;
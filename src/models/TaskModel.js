class TaskModel{
    constructor(){
        this.id
        this.descricao,
        this.situacao,
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
        return this.id
    }

    /**
     * TODO: Terminar de construir a classe modelo
     */
    
}
const { readFileSync, writeFileSync } = require('fs')
const { promisify } = require('util')


class Database {

    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivo(){
        const arquivo = await readFileSync(this.NOME_ARQUIVO,'utf8')
        return JSON.parse(arquivo.toString())
    }
    
    async escreverarquivo(dados){
        await writeFileSync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }
    
    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        const heroiidComId = {id, ... heroi}

        const dadosFinal = [...dados, heroiidComId]
        const resultado = await this.escreverarquivo(dadosFinal)

        return resultado;
    }

    
    async listar(id){
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter(item => id ? (item.id === id): true)
        //console.log(`Dados Filtrados ` , dadosFiltrados)
        return dadosFiltrados
    }

    async remover(id){
        if (!id) {
            await this.escreverarquivo([])
        }
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if (indice === -1) {
            throw Error('O usuario informado não existe')
        }
        dados.splice(indice,1)
        return await this.escreverarquivo(dados)
    }

    async atualizar(id, modificacoes){
        const dados = await this.obterDadosArquivo()       
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if (indice === -1) {
            throw Error('O usuario informado não existe')
        }
        const atual = dados[indice]
        const objAtualizar = {
            ...atual,
            ...modificacoes
        }
        atual.splice(indice,1)
        
        return await this.escreverarquivo(...dados,objAtualizar)
    }
}

module.exports = new Database();
const assert = require('assert');
const mysql = require('../db/strategies/mysql')
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new mysql())
const MOCK_HEROI_CADASTRAR = {
    nome : 'Gaviao Negro',
    poder : 'flexas'
}


describe('mysql Strategy',function(){
    this.timeout(Infinity)
    this.beforeAll(async function(){
         await context.connect();
    })

    it('Mysql Connection', async function(){
        const result = await context.isConnected();
        assert.equal(result, true)
    })

    it('cadastrar', async function () {
        const result = await context.create(MOCK_HEROI_CADASTRAR)
        console.log(result)

        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })

    it('Listar', async function () {
       const result = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome })


        assert.deepEqual(result , MOCK_HEROI_CADASTRAR)
    })



})

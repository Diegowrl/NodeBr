const assert = require('assert');
const Mongoose = require('mongoose')
const mongodb = require('../db/strategies/mongoDB')
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new mongodb())

describe('MongoDB Suite de testes', function (){
    this.beforeAll(async () => {
        await context.connect()
    })
    
    
    it('verificar conexao', async () => {
        const result = await context.isConnected()
        const expected = 'Connectado'

        assert.deepEqual(result, expected)
    })
})
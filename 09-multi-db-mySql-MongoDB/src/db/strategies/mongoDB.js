const ICrud = require('../strategies/interface/interfaceCrud')
const Moongoose = require('mongoose')

const STATUS = {
    0 : 'Disconectado',
    1 : 'Connectado',
    2 : 'Conectando',
    3 : 'Disconectando'
}


class MongoDb extends ICrud {
    constructor() {
        super()
        this._herois = null;
        this._driver = null
    }

    async isConnected() {
        const state = STATUS[this._driver.readyState];
        if (state == 'Connectado') return state;
        if(state !== 'Conectando' ) return state
        
            await new Promise(resolve => setTimeout(resolve,1000))
       
            return STATUS[this._driver.readyState]
        
    }

    defineModel() {
        const heroisSchema = new Moongoose.Schema({
            nome : {
                type : String,
                required : true
            },
            poder : {
                type : String,
                required : true
            },
            insertedAt : {
                type : Date,
                default : new Date()
            }
        })

        this._herois = Moongoose.model('heroi',heroisSchema)
    }

    connect() {
        Moongoose.connect('mongodb://localhost:27017/herois',
            { useUnifiedTopology: true, useNewUrlParser: true }, function (error) {
                if (!error) return;
                console.log('Falha na conexão', error)
            })

        const connection = Moongoose.connection;
        this._driver =  connection
        connection.once('open', () => console.log('database Rodando!!'))

    }

    async create() {
        const resultCadastrar = await model.create({
            nome: 'Batman',
            poder: 'Dinheiro'
        })
        console.log('result cadastrar', resultCadastrar)
    }
}

module.exports = MongoDb;
const Moongoose = require('mongoose')

Moongoose.connect('mongodb://localhost:27017/herois',
        { useUnifiedTopology: true , useNewUrlParser: true}, function(error){
        if (!error) return;
            console.log('Falha na conexão', error)
    
})

const connection = Moongoose.connection;
connection.once('open',() => console.log('database Rodando!!'))

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

const model = Moongoose.model('heroi',heroisSchema)

async function main (){
    const resultCadastrar = await model.create({
        nome: 'Batman',
        poder: 'Dinheiro'
    })
    console.log('result cadastrar', resultCadastrar)

    const listItens = await model.find()
    console.log('lista', listItens)
}

main()













// setTimeout(()=>{
//     const state = connection.readyState;
//     console.log("State", state)
    
// },1000)

// Stados

// 0 : Disconectado
// 1 : Connectado
// 2 : Conectando
// 3 : Disconectando
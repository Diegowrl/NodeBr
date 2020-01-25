const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function Main() { 
    Commander
        .version('v1')
        .option('-n, --nome [value]',"Nome do heroi")
        .option('-p, --poder [value]', "Poder do Heroi")

        .option('-c, --cadastrar', "Cadastrar um heroi")
        .parse(process.argv)
        const heroi = new Heroi(Commander)


        try {
            if (Commander.cadastrar) {
                //console.log(heroi)
                const resultado = await Database.cadastrar(heroi)
                if (!resultado) {
                    console.log('Heroi não foi cadastrado!')
                    return
                }
                console.log('Heroi Cadastrado com sucesso!')
            }
        } catch (error) {
            console.error('Deu Ruim', error)
        }

 }

 Main()
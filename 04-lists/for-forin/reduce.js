const { obterPessoas } = require('./service')

async function main(param) { 
    try {
       const {results} = await obterPessoas('a')
       const pesos = results.map(item => parseInt(item.height))

       const total = pesos.reduce((anterior,proximo)=>{
           return anterior + proximo
       })
    console.log(total)
    } catch (error) {
        console.error('Deu ruim', error)
    }

}

main()
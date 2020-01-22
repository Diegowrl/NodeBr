const service = require('./service')


async function main() {
    try{
        const result = await service.obterPessoas('a');
        const name = []
        for (let i = 0; i <= result.results.length -1; i++) {
            const pessoa = result.results[i]
            name.push(pessoa.name)

        }
        console.log(name)
    }
    catch(error){
        console.error('Deu Ruim', error)
    }
}

main()


// .then((resultado)=>{
//     console.log(resultado)
// })
// .catch((error)=>{
//     console.error('deu Ruim', error)
// });
const service = require('./service')

async function main() {
    try{
        const result = await service.obterPessoas('a');
                
        // result.results.forEach(item => {
        //     names.push(item.name)
        // });
       const names =  result.results.map((pessoa)=>{
            return pessoa.name
        })

        console.log(names)
        }
    catch(error){
        console.error('Deu Ruim', error)
    }
}

main()
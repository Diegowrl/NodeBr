const ICrud = require('../strategies/interface/interfaceCrud')

class MongoDb extends ICrud{
    constructor(){
        super()
    }

    create(item){
        console.log("O item foi salvo em MongoDB");
    }
}

module.exports = MongoDb;
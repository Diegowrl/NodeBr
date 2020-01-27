const ICrud = require('../strategies/interface/interfaceCrud')

class Myslq extends ICrud{
    constructor(){
        super()
    }

    create(item){
        console.log("O item foi salvo em Mysql");
    }
}

module.exports = Myslq;
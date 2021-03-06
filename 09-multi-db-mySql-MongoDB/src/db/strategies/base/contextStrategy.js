const ICrud = require('../interface/interfaceCrud')
const sequelize = require("sequelize");


class ContextStrategy  extends ICrud{
    constructor(strategy) {
        super()
        this._database = strategy;
    }

    create(item){
        return  this._database.create(item);
    }

    read(item){
        return  this._database.read(item);
    }

    update(id,item){
        return  this._database.update(item);
    }

    delete(id){
        return  this._database.delete(item);
    }

    isConnected(){
        return  this._database.isConnected();
    }

    connect() {
        return this._database.connect()
      }
}

module.exports = ContextStrategy;
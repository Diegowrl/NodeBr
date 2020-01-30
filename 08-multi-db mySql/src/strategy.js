class NotImplementedException extends Error { 
    constructor(){
        super("Not Implemented Exception")
    }
}

class Icrud {
    create(item){
        throw new NotImplementedException()
    }

    read(query){
        throw new NotImplementedException()
    }

    update(id , item){
        throw new NotImplementedException()
    }

    delete(id){
        throw new NotImplementedException()
    }
}

class MongoDb extends Icrud{
    constructor(){
        super()
    }

    create(item){
        console.log("O item foi salvo em MongoDB");
    }
}

class Myslq extends Icrud{
    constructor(){
        super()
    }

    create(item){
        console.log("O item foi salvo em Mysql");
    }
}

class ContextStrategy {
    constructor(strategy) {
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

}

// const contextMongo = new ContextStrategy(new MongoDb())
// contextMongo.create()

// const contextMysql = new ContextStrategy(new Myslq())
// contextMysql.create()

// contextMysql.read()
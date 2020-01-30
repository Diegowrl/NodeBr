const ContextStrategy = require('../src/db/strategies/base/contextStrategy')
const MongoDb = require('./db/strategies/mongoDB')
const Myslq = require('./db/strategies/mysql')


const contextMongo = new ContextStrategy(new MongoDb())
contextMongo.create()

const contextMysql = new ContextStrategy(new Myslq())
contextMysql.create()
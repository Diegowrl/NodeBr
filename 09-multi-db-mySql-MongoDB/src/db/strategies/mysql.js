const ICrud = require('../strategies/interface/interfaceCrud')
const sequelize = require("sequelize");


class Myslq extends ICrud{
    constructor(){
        super()
        this._driver = null
        this._Herois = null
    }

    async isConnected(){
        try {
            await this._driver.authenticate();
            return true;
        } catch (error) {
            console.log('Error', error) 
            return false;
        }
    }


    async defineModel(){
        async function main(){
             this._Herois = this._driver.define("herois",{
                id:{
                    type :sequelize.INTEGER,
                    require: true,
                    primaryKey: true,
                },
                nome:{
                    type:sequelize.STRING,
                    allowNull: false,
                },
                poder:{
                    type:sequelize.STRING,
                    allowNull: false
                }
            },{
                tableName:'tb_herois',
                freezeTableName:false,
                timestamps:false
            })
            
            await this._Herois.sync();
        
            const result = await Herois.findAll({ 
                raw:true 
            })
            console.log("Result ",result)
        }
    }
    
    async create(item){
        const {dataValues} = await this._Herois.create(item)
        return dataValues;
    }

    async read(item = {}){
        return this._Herois.findAll({ where : item , raw : true})

    }

    async connect(){
        this._driver = new sequelize('heroes', 'root',null,{
            host: 'localhost',
            dialect: 'mysql'
        });
        await this.defineModel();

    }

    async update(id,item){
        return await this._Herois.update(item, {where : {id : id}})
    }

    async delete(id){
        const query = id ? {id} : {}
        return this._Herois.destroy({ where : query})
    }

  

}

module.exports = Myslq;
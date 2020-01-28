const sequelize = require("sequelize");

const driver = new sequelize('heroes', 'root',null,{
    host: 'localhost',
    dialect: 'mysql'
});

async function main(){
    const Herois = driver.define("herois",{
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
    
    await Herois.sync();

    const result = await Herois.findAll({ 
        raw:true 
    })
    console.log("Result ",result)

}

main()
//module.exports = driver;
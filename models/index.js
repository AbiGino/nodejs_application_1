
const Sequelize = require('sequelize');
const sequelize= new Sequelize(

    'node_sequelize',
    'root',
    'root',{
        dialect: 'mysql',
}
);

sequelize.authenticate()
.then(()=>{
    console.log('connected!..');
}).catch(err=>{
    console.log('Error : '+ err);
})

const db ={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.products = require('./productModel.js')(sequelize,Sequelize)
db.reviews = require('./reviewModel.js')(sequelize,Sequelize)

module.exports=db;
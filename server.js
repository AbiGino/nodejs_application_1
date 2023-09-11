const express = require('express');
const cors = require('cors');
const db = require('./models/index');

const app = express();
// var corOptions ={
//     origin: 'https://localhost:8081'
// }


//middleware
// app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.sequelize.sync()
.then(()=>{
    console.log('yes re-sync done')
}).catch((error)=>{
    console.log('error: ',error);
})

//router
const router = require('./routes/productRouter');
app.use('/api/products',router)


//testing api
app.get('/',(req,res)=>{
    res.json({message: 'hello from api'})
})

const PORT =  8082

app.listen(PORT ,()=>{
    console.log(`server is running on port ${PORT}`)
})

module.exports = app;
const express = require('express')
const app = express();
const port = process.env.port || 5000;
const cors = require('cors')

const chefs = require('./data/chefs.json')

app.use(cors());

app.get('/',(req,res)=>{
    res.send('italian delicacy up and running')
})

//chefs
app.get('/chefs',(req,res)=>{
    res.send(chefs);
})

app.listen(port,()=>{
    console.log('italian delicacy is running at ',port);
})





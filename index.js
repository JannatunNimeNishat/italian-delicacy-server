const express = require('express')
const app = express();
const port = process.env.port || 5000;
const cors = require('cors')
app.use(cors());
app.get('/',(req,res)=>{
    res.send('italian delicacy up and running')
})


app.listen(port,()=>{
    console.log('italian delicacy is running at ',port);
})





const express = require('express')
const app = express();
const port = process.env.port || 5000;
const cors = require('cors')

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')
app.use(cors());

app.get('/',(req,res)=>{
    res.send('italian delicacy up and running')
})

//chefs
app.get('/chefs',(req,res)=>{
    res.send(chefs);
})
//recipes
app.get('/recipes/:chefs_id',(req,res)=>{
    const chefs_id = req.params.chefs_id;
    console.log('id:',chefs_id);
    const chefsRecipes =  recipes.filter(recipe => recipe.chef_id === parseInt(chefs_id));
    res.send(chefsRecipes);
})


app.listen(port,()=>{
    console.log('italian delicacy is running at ',port);
})





const express = require('express');
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;

const chefData = require('./data/chefData.json')

app.use(cors());

app.get('/', (req, res)=>{
    res.send('RecipeRiot is comming...');
})

app.get('/chefData',(req,res)=>{
    res.send(chefData);
})

app.get('/chefData/:id',(req,res)=>{
    const id = req.params.id
    const myChef = chefData.find(cf => cf.id == id)
    res.send(myChef);
})

app.listen(port, ()=>{
    console.log(`Recipe API is running on port: ${port}`);
});
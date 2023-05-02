const express = require('express');
const app = express();
const port =process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('RecipeRiot is comming...')
})

app.listen(port, ()=>{
    console.log(`Recipe API is running on port: ${port}`)
})
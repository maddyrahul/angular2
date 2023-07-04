const express = require ('express');
const bodyparser =require('body-parser');
const cors=require('cors');
const app=express()

app.use(bodyparser.json());
app.use(cors());

app.listen(4300,()=>
console.log(`server is running on 4300 Port`
))



//Routes
const routeRouter= require('./routes/routes')


app.use('/',routeRouter)
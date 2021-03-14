const express=require('express');

const bodyParser = require('body-parser')
const app=express();



 students=[];
 
app.use(bodyParser.json());
app.get('/getData',(req,res)=>{
    
    res.json(students);


})
 

app.post('/getData',(req,res)=>{
    let requestBode=req.body;
    
    students.push(requestBode);
    res.json(students);


})
 
app.listen(3000,(req,res)=>{
    console.log('Express API is runing at port 3000');
})
/**/ 
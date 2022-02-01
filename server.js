//import express
const express = require('express');
//init express 
const app = express();
//create port 
const port = 4000;
//create middleware
const verifDate=(req,res,next)=>{
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let hours = new Date().getHours();
days[new Date().getDay()] !=='saturday'&& days[new Date().getDay()] !=='sunday'&& hours>9 && hours<17?
 next()
  : console.log('come back on working hours');
}

//creating the server 
app.listen(port,(err)=> 
err? console.log(err):console.log(`server is now listening to ${port}...`));
// routing middleware

app.use(express.static('public'));


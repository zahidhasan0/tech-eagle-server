const express = require('express')
const app =express()
const cors = require('cors');
const port = process.env.PORT || 5000

//use cors
app.use(cors());

//load courses data by from data.json
const courses=require('./data/data.json')

//root directory
app.get('/', (req,res)=>{
    res.send('api running')
})

app.get('/courses', (req,res)=>{
    res.send(courses)
})

app.get('/course/:id', (req,res)=>{
    console.log(req.params.id)
    const id=req.params.id;
    const selectedCourses=courses.find(course=>course.id===id);
    res.send(selectedCourses)
})
app.listen(port, ()=>{
    console.log('techeagle server port is', port)
    })
const express =require('express')
const app=express()
const path=require('path')
var bodyParser=require('body-parser')
const studendetails=require('./data/data.js')

app.use(express.static(path.join(__dirname,"static")))

app.use(bodyParser.json())
app.use(express.urlencoded({extende:false}))
app.set('views','./view')
app.set('view engine','ejs');
app.get('/newform',(req,res)=>{
    res.render('newform.ejs')
})
app.get('/home',(req,res)=>{
    res.render("home.ejs",{studendetails})
})
app.get('/contact',(req,res)=>{
    res.send("CONTACT")
})
app.get('/about',(req,res)=>{
    res.send("ABOUT")
})
app.post('/information',(req,res)=>{
    const {name,email,password,rollno}=req.body
    
    const newStudent={
        name:name,
        email:email,
        password:password,
        rollno:rollno
    }
    studendetails.push(newStudent);
    res.redirect('/home')
})
app.get('/all',(req,res)=>{
    res.send(studendetails)
})
app.listen(3000,()=>{
    console.log("server is running at port 3000")
})
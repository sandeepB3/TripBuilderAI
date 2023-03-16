require('dotenv').config({ path: '.env' })
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const cors=require('cors')
const mongoose= require('mongoose')
const bodyParser=require('body-parser')
const User=require("./models/user")
const passport=require('passport')
const session=require('express-session')
const passportLocal=require('passport-local')


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("MONGO CONNECTION OPEN!!")
})
.catch(err=>{
    console.log(err)
})

const db= mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open",()=>{
    console.log("Database connected")
})

const app=express();

app.use(bodyParser.json())
app.use(cors())
const sessionConfig={
    name:'nigga',
    secret:'nicesecret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires:Date.now()+1000*60*60*24*7,
        maxAge:1000*60*60*24*7
    }
}
app.use(session(sessionConfig))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new passportLocal(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
const users={};

app.get('/register',(req,res)=>{
    res.send(users);
})
app.post('/register',async(req,res)=>{
    const id=uuidv4();
    const {username,password}=req.body
    
    const user=new User({username})
    // console.log(password)
    
    const registeredUser=await User.register(user,password)
    // user.save()
    // const user = new User({username});
    // await user.setPassword(password);
    // await user.save();
    console.log("registered")
    res.status(201).send(users[id])
})
app.post('/login',passport.authenticate('local',{failureRedirect:'/login'}),async(req,res)=>{
   
    // const {username,password}=req.body
    
    // const user=new User({username})
    // // console.log(password)
    
    // const registeredUser=await User.register(user,password)
    // // user.save()
    // // const user = new User({username});
    // // await user.setPassword(password);
    // // await user.save();
    console.log("logged in")
    res.status(201).send("logged in")
})
app.get('/isSignedIn',async(req,res)=>{
res.status(201).send({isSignedIn})
})
app.listen(4000,()=>{
    console.log('Listening on 4000')
})
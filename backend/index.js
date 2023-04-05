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
const gpt3API = require('openai')
// import { Configuration, OpenAIApi } from 'openai';

const configuration = new gpt3API.Configuration({
    apiKey: "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"
});

const openai = new gpt3API.OpenAIApi(configuration);

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
    try{
    const {username,password} = req.body
    
    const user = new User({username})
    // console.log(password)
    
    const registeredUser = await User.register(user, password)
    // user.save()
    // const user = new User({username});
    // await user.setPassword(password);
    // await user.save();
    req.login(registeredUser,err=>{
        if (err){
            console.log(err)
        }
    console.log("registered")
    res.status(201).send(registeredUser)
    })
    }catch(e){
        res.status(401).send(e)
    }
    
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

//GPT3
const basePromptPrefix = "This is a travel agency which helps the user to generate a travel itinerary for his/her vacation based on the user's budget and other preferences given below:\n\n"
const userLocation = "User Destination: ";
const startDate = "Start Date: ";
const endDate = "End Date: "
const hotel = "Hotel Name: "
const attractions = "List of Attractions: ";
const budget = "User Budget: "
const basePromptPostfix = "\nGenerate a detailed itinerary from the Attractions to visit array that optimally fits for the duration of start and end date. Choose only maximum of 2 to 3 attractions to visit per day. Optimise user's time to make the most of the trip. Also mention some places to eat along the way.\n\nItinerary: "

app.post('/gptPrompt',async(req,res)=>{
    //GPT3 API Call
    console.log(`\nAPI: ${basePromptPrefix}${userLocation} ${req.body.destination}\n${startDate} ${req.body.startDate}\n${endDate} ${req.body.endDate}\n${hotel} ${req.body.hotel}\n${budget} ${req.body.budget}\n\n${attractions} ${req.body.attractions.join(', ')}\n${basePromptPostfix}\n`)

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix}${userLocation} ${req.body.destination}\n${startDate} ${req.body.startDate}\n${endDate} ${req.body.endDate}\n${hotel} ${req.body.hotel}\n${budget} ${req.body.budget}\n${attractions} ${req.body.attractions.join(', ')}\n${basePromptPostfix}\n`,
        temperature: 0.7,
        max_tokens: 2500,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();
    console.log(basePromptOutput);

    res.status(200).json({ output: basePromptOutput });
})


app.get('/isSignedIn',async(req,res)=>{
res.status(201).send({isSignedIn})
})

app.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) { console.log(err); }
    });
    console.log("logged out");
    res.status(200);
});


app.listen(4000,()=>{
    console.log('Listening on 4000')
})
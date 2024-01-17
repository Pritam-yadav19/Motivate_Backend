const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const Actiesmodel = require('./models/Acties')

const app = express()
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb+srv://pritamy192000:Pritam1302!@cluster13021.2btvddl.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("connectec to mongodb");
})
.catch((error)=>{
    console.error("mongodb connect error:", error);
})

// mongoose.connect("mongodb://localhost:27017/tasks", { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
//     console.log("Connected to MongoDB");
// })
// .catch((error) => {
//     console.error("MongoDB connection error:", error);
// });

app.post('/Logins', (req,res) => {
    const {email,password} = req.body;
    Actiesmodel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){ 
                res.json("success!")
            }
            else {
               res.json("password incorrect")
            }
        }
        else {
            res.json("no record existed")
        }
    })
    
})



app.post('/', async(req,res) => {       //post method sends request(data to upload) to mongodb!! and response is received!
    try{
        console.log("Received data:", req.body);
        const result = await Actiesmodel.create(req.body);
        res.json(result);
    } catch(err){
        res.json(err);
    }
    
})


app.get('/', (req, res) => {
    res.send('Hello, World!'); // Replace with your actual response
  });
  

app.listen(3001, ()=> {
    console.log("server runn");
})


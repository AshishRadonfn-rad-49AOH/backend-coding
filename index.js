const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require("./src/routes/route")
const app = express()
const {multererror } =require("./src/multer-error/error")
const cors = require("cors")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config()


mongoose.connect("mongodb+srv://ashish2132:2vnf5TGDQgRP7ydu@cluster0.czfb8.mongodb.net/backend", { useNewUrlParser: true })
.then(() => console.log("MongoDb is Connected..."))
.catch(err => console.log(err))
app.use(cors())
app.use("/",route)
app.use(multererror)
app.listen(process.env.PORT, ()=>
    console.log("Express App Running On Port 3000")
)
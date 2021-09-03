const express = require('express');
const cors = require('cors');
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();

const RouteTech = require('./src/routes/Serice_Provider/Technician/technician.router');
const RoutePlant = require('./src/routes/Serice_Provider/Plant/plant.router');
const RouteFood = require('./src/routes/Serice_Provider/Food/food.router');

const RouteClient = require('./src/routes/Client/client.router');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('tiny'))
dotenv.config();

app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, "public/images");
  },
  filename:(req, file, cb) => {
    cb(null, req.body.name);
  } 
})

const uploadClient = multer({storage});
app.post("/client/upload", uploadClient.single("file"), (req, res) => {
  try{
    return res.status(200).json("File uploaded");
  }
  catch(err){
    console.log(err);
  }
})

const uploadService = multer({storage});
app.post("/service/upload", uploadService.single("file"), (req, res) => { 
  try{
    return res.status(200).json("File uploaded");
  }
  catch(err){
    console.log(err);
  }
})

app.use('/service', RouteTech);   
app.use('/service', RoutePlant); 
app.use('/service', RouteFood);

app.use('/client', RouteClient);

module.exports = app;

const port = process.env.PORT || 4000;    

app.listen(port, () => {
  console.log('App is running on port ', port);  
});
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

// Impoprt Routes
const authRoutes = require('./routes/auth');

//App
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes Middleware
app.use('/api', authRoutes);

//Routes
app.get('/', function(req,res){
    res.send("Hello World");
});

const port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log("Server is running at port", port)
});
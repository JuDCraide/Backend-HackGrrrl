const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes')

const app = express();
const server = require('http').Server(app);

mongoose.connect(`mongodb+srv://jdcraide:jdcraide@cluster0.igrne.mongodb.net/hackgrrrl?retryWrites=true&w=majority`, 
    { useUnifiedTopology: true,useNewUrlParser: true  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 3333);
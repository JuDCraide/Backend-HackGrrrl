const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes')

const app = express();
const server = require('http').Server(app);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DATA_BASE}?retryWrites=true&w=majority`, 
    { useUnifiedTopology: true,useNewUrlParser: true  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 3333);
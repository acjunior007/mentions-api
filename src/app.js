'use strict';

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// conexao com o mongodb
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('connected', ()=>{
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured\n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected')
});

process.on('SIGINT', ()=>{
    db.close(() =>{
        console.log('Mongoose default connection is disconnected due to application terminator');
        process.exit(0);
    });
});

// load models
const Mentions = require('./models/mentions');

// load routers

// index
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

// mentions
const mentionsRoutes = require('./routes/mentions-routers');
app.use('/mentions', mentionsRoutes);


module.exports = app;
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const Database = require('./src/models/database');
const apiRoutes = require('./src/routes');
//const login = require('./src/components/Login');

const MongoClient = require('mongodb').MongoClient;

const DB_HOST = "mongodb+srv://Halv:iviURuJ9zpvKyIzg@cluster0.kcql9.mongodb.net/sample_mflix?retryWrites=true&w=majority";

if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config();
}

const port = 3000;

let database;

app.use('/assets', express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
    const url = path.join(__dirname, 'public', 'index.html');
    res.sendFile(url);
});



app.use(router);
app.use('/api', apiRoutes);

//app.use('/user', login)




// Connect to MongoDB
MongoClient.connect(DB_HOST, {
    useUnifiedTopology: true
}, function (err, client) {
    if (err) {
        console.log('Failed to connect to MongoDB');
    } else {
        console.log('Se conecto a la base de datos');

        database = client.db();

        Database.setDatabase(database);

        app.listen(port, () => {
            console.log(`App is listening in port ${port}`);
        });
    }
});


const { Db } = require('mongodb');
const mongoose = require('mongoose');
const uri = "mongodb+srv://Halv:vyHykVpyy08pkAO6@cluster0.kcql9.mongodb.net/Cluster0?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("Salas").collection("Sala1");
//   client.close();
// });
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=> console.log("connected to db..."))
.catch((err) => console.log(err));



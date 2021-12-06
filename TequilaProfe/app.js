const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const apiRoutes = require('./src/routes');
const Sala = require('./src/models/sala');
const User = require('./src/models/users');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config();
}

const port = 3001;


const swaggerOptions = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            title: "Swagger Test API",
            description: "test api for swagger documentation",
            version: "1.0.0",
            servers: ['http://localhost:' + port],
            contact: {
                name: "Halv",
                correo: "is710115@iteso.mx"
            }
        }
    },
    apis: ['app.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use('/assets', express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
    const url = path.join(__dirname, '/public', 'Login.html');
    res.sendFile(url);
});

app.listen(port, () => {
    console.log('App is listening in port: ' + port);
});


const { Db } = require('mongodb');
const mongoose = require('mongoose');
const uri = "mongodb+srv://Halv:vyHykVpyy08pkAO6@cluster0.kcql9.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("connected to db..."))
    .catch((err) => console.log(err));



/********************************************************************************************* 
 * Salas Endpoints
/*********************************************************************************************/

/** 
 * @swagger
 * /Sala:
 *  post:
 *    description: crear Sala
 *    parameters:
 *      - in: body
 *        name: name
 *        description: Sala name
 *        type: string  
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request
*/
app.post('/sala', (req, res) => {
    Sala.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err))
});

/** 
 * @swagger
 * /Sala/:id/link:
 *  get:
 *    description: link a la Sala
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request
*/
app.get('/sala/:id/link', (req, res) => {
    let link = "http://127.0.0.1:3000/sala/" + req.params.id
    Sala.findByIdAndUpdate(req.header('id_sala'), { url: link }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(link);
        }
    })
        .then((result) => {
            return result;
        })
        .catch((err) => console.log(err))

});

/** 
 * @swagger
 * /Sala/:id:
 *  get:
 *    description: User get por id
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request
*/
app.get('/sala/:id', (req, res) => {
    Sala.findOne({ "id_sala": req.params.id })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => console.log(err))
    //console.log(req.params.id_sala)
});


/** 
 * @swagger
 * /Sala/:id:
 *  post:
 *    description: actualizar sala
 *    parameters:
 *      - in: body
 *        name: message
 *        description: the content of the message
 *        type: string
 *      - in: body
 *        name: date
 *        description: message date
 *        type: string
 *      - in: body
 *        name: correo
 *        description: user correo
 *        type: string
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request
*/
app.put('/sala/:id', (req, res) => {
    Sala.findOne({ "id_sala": req.params.id })
        .then((result) => {
            const array = result.mensajes;
            array.push(req.body)
            result.mensajes = array;
            result.url = "http://127.0.0.1:3000/sala/" + req.params.id;

            Sala.findOneAndUpdate({ "id_sala": req.params.id }, result, { upsert: true }, function (err, doc) {
                if (err) return res.send(500, { error: err });
                return res.send('Succesfully saved.');
            });
        })
});

/*********************************************************************************************
 * Users Endpoints
/*********************************************************************************************/

/** 
 * @swagger
 * /users/:correo:
 *  get:
 *    description: User get by correo
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request
*/
app.get('/users/:correo', (req, res) => {
    User.findOne({ "correo": req.params.correo })
        .then((result) => {

            if (result.password === req.body.password) {
                res.send("Loggin.....")
                console.log(result.password)
                console.log(req.body.password)
            } else {
                res.send("failed to login")
                console.log(result.password)
                console.log(req.body.password)
            }
        })
        .catch((err) => console.log(err));

});


/** 
 * @swagger
 * /users:
 *  post:
 *    description: create user
 *    parameters:
 *      - in: body
 *        name: username
 *        description: correo of the user
 *        type: string
 *      - in: body
 *        name: password
 *        description: users password
 *        type: string
 *    responses:
 *      200:
 *        description: success response
 *      400:
 *        description: bad data request
*/
app.post('/user', (req, res) => {
    console.log(req.body.correo);
    console.log(req.body.password);
    const user = new User({
        correo: req.body.correo,
        password: req.body.password
    });

    user.save()
        .then((result => {
            res.send(result);
        })
        )
        .catch((err) => console.log(err))
})

app.use(router);
app.use('/api', apiRoutes);
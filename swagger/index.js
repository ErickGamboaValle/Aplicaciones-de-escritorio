const express = require ('express')
const app = express()

const swaggerJsdoc = require ('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const port = process.env.PORT || 3000;



const swaggerOptions = {
    swaggerDefinition:{
        swagger: "2.0",
        info:{
            "title":"Swagger ",
            "description":"test api",
            "version":"1.0.0",
            "servers":[`https://localhost:${port}`],
            "contact":{
                "name":"",
                "email":""
            }

        }
    },
    apis:['index.js']
}


/**
 * @swagger
 * /:
 *  get:
 *    description: api loadin endpoint
 *    responses:
 *      200:
 *        description: success call to the endpoint
 *      400:
 *         description: bad endpoint
 */
app.get('/', (req,res)=>{
   res.send('api works')
});

/**
 * @swagger
 * /users:
 *  get:
 *    description: api loading endpoint user
 *    responses:
 *      200:
 *        description: success call to the endpoint
 *      400:
 *         description: bad endpoint
 */

app.get('/users', (req, res)=>{
    res.send('get users')
})

/**
 * @swagger
 * /users:
 *  post:
 *    description: api loading endpoint
 *    parameters:
 *      - in: body
 *        name: username
 *        description: email of the user
 *        type: string 
 *      - in: body  
 *        name: password
 *        description: user password
 *        type: string 
 *    responses:
 *      200:
 *        description: success call to the endpoint
 *      400:
 *         description: bad endpoint
 */
app.get('/users/:id', (req, res)=>{
    res.send('get user ')
})

app.post('/users', (req, res)=>{
    res.send('create user endpoint')
})

app.put('/users/:id', (req, res)=>{
    res.send('update user endpoint')
})

app.get('/sessions', (req, res)=>{
    res.send('get sessions')
    
})

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(port, () => {
    console.log(`app is listening in port ${port} `)
})
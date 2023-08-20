import express from 'express'
import apis from './apis.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import connect from './connection.js'

const app = express()
const PORT = process.env.PORT || 8080

connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/test', (req, res) => {
    res.send({"message": "yo"})
})

app.use('/', apis)

app.listen(PORT, () => {
    console.log("Server is up on Port ", PORT)
})
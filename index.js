const express = require ('express')
const app = express()
const models = require('./models')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended : true
}))

app.get('/', (req,res) => {
    res.send('Welcome to my superhero api')
})

require('./route/superhero')(app)


models
    .sequelize
    .sync()
    .then(() => {
        app.listen(3002, console.log(`Server is listening on port 3002`))
    })
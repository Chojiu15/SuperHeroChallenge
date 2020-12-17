const models = require('../models')
const superhero = require('../models/superhero')


module.exports = app => {
    app.get('/superheros', (req, res) => {
        models
        .SuperHero
        .findAll()
        .then(superhero => res.json(superhero))
    })

    app.get('/superheros/:id', (req, res) => {
        models
        .SuperHero
        .findByPk(req.params.id)
        .then(superhero => res.json(superhero))
    })

    app.post('/superheros', (req, res) => {
        models
        .SuperHero
        .create(req.body)
        .then(superhero => res.json(superhero))
    })

    app.put('/superheros/:id', (req, res) => {
        models
        .SuperHero
        .update(req.body, {
            where : {
                id : req.params.id
            }
        })
        .then(superhero => res.json(superhero))
    })

    app.delete('/superheros/:id', (req, res) => {
        models
        .SuperHero
        .destroy({
            where : {
                id : req.params.id
            }
        })
        .then(() => res.send('Superhero deleted'))
     })


}

const mongoose = require('mongoose')

const directorSchema = mongoose.Schema({
    name: { type: String, index: true }
}, { collection: 'directores'})

const Director = mongoose.model('Director', directorSchema)

Director.find().exec((err, directores) => {
    //console.log(directores)
})

module.exports = Director

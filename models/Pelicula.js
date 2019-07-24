
const mongoose = require('mongoose')

const peliculaSchema = mongoose.Schema({
    name: { type: String, index: true },
    director: { type: String, index: true },
    publication_date: { type: Date, index: true }



}, { collection: 'peliculas'})

const Pelicula = mongoose.model('Pelicula', peliculaSchema)

Pelicula.find().exec((err, peliculas) => {
    //console.log(peliculas)
})

module.exports = Pelicula


 const express = require('express')
 const router = express.Router()
 const Director = require('../models/Director')
 const Pelicula = require('../models/Pelicula')


router.get('/todos', async (req, res, next) => {

    try{
        const directores = await Director.find().exec()
        res.json({ success: true, result: directores })

    }catch(err){
        next(err)
        return
    }
    
 })



router.post('/todos', async (req, res, next) => {
    try {
        const data = req.body

        const director = new Director(data)
        const directorGuardado = await director.save() 

        res.json({
            success: true,
            result: directorGuardado
        })

    } catch (err) {
        next(err)
        return
    }

})

router.get('/:id/peliculas', async (req, res, next) => {
    try {
        const id = req.params.id

        const director = await Director.findById(id).exec()

        const pelis = await Pelicula.find({ director: director.name}).exec()

        res.json({
            success: true,
            result: pelis
        })


    } catch (err) {
        next(err)
        return
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id

        const director = await Director.findById(id).exec() 
        res.json({
            success: true,
            result: director
        })


    } catch (err) {
        next(err)
        return
    }
})


router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id

        await Director.deleteMany({
            _id: id
        }).exec()
        res.json({
            success: true
        })

    } catch (err) {
        next(err)
        return
    }
})
 


 module.exports = router

 const express = require('express')
 const router = express.Router()
 const Director = require('../models/Director')

router.get('/todos', async (req, res, next) => {

    try{
        const directores = await Director.find().exec()
        res.json({ success: true, result: directores })

    }catch(err){
        next(err)
        return
    }
    
 })


 router.post('/todas', async (req, res, next) => {
    try {
        const data = req.body

        const pelicula = new Pelicula(data)
        const peliculaGuardada = await pelicula.save() 

        res.json({
            success: true,
            result: peliculaGuardada
        })

    } catch (err) {
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

 module.exports = router
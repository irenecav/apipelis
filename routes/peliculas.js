
 const express = require('express')
 const router = express.Router()
 const Pelicula = require('../models/Pelicula')

router.get('/todas', async (req, res, next) => {

    try{
        const peliculas = await Pelicula.find().exec()
        res.json({ success: true, result: peliculas })

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



 module.exports = router
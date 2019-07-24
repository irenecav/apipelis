'use strict'

/**
 * Populate the DB with initial data
 */
const readline = require('readline')

const db = require('./lib/connectMongoose')
const Director = require('./models/Director')
const directoresData = require('./data/directores.json') 
const Pelicula = require('./models/Pelicula')
const peliculasData = require('./data/peliculas.json') 

db.once('open', async ()=> {
    try{

        const respuesta = await preguntaUsuario('¿Estas seguro que quieres inicializar la base de datos? (no)')
        
        if(respuesta.toLowerCase() !== 'si'){
            console.log('Abortado!')
            process.exit(0)
        }

        await initModel(Director, directoresData, 'directores') 
        await initModel(Pelicula, peliculasData, 'peliculas')


        db.close()

    }catch(err){
        console.log('Hubo un error', err)
        process.exit(1) 
    }

})


function preguntaUsuario(pregunta){
return new Promise(( resolve, reject) => {
    const interfaz = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

interfaz.question(pregunta, answer =>{
    interfaz.close()
    resolve(answer)
    return
})

})
}


async function initModel(Model, data, modelName){
    const deleted = await Model.deleteMany()
    console.log(`Eliminados ${deleted.n} ${modelName}` )
   const insertado = await Model.insertMany(data)
   console.log(`Insertado ${insertado.length} ${modelName}. `)
    
}
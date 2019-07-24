'use strict'

/**
 * Crear los datos iniciales  de la base de datos
 */
//ponemos primeros los require de node, despues los de los paketes de npm y mas tarde os propios de nuestra aplicacion 
const readline = require('readline')

const db = require('./lib/connectMongoose')
const Director = require('./models/Director')
const directoresData = require('./data/directores.json') 
const Pelicula = require('./models/Pelicula')
const peliculasData = require('./data/peliculas.json') 

db.once('open', async ()=> {
    try{

        //preguntar al usuario si quiere borrar la base de datos.
        const respuesta = await preguntaUsuario('¿Estas seguro que quieres inicializar la base de datos? (no)')
        
        if(respuesta.toLowerCase() !== 'si'){
            console.log('Abortado!')
            process.exit(0)
        }

       // await initAnuncios()
        await initModel(Director, directoresData, 'directores') 
        await initModel(Pelicula, peliculasData, 'peliculas')


        db.close()

    }catch(err){
        console.log('Hubo un error', err)
        process.exit(1) //ha terminado el proceso de erros
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
//ahora creamos los anuncios iniciales. Que estan en un fichero JSON de la carpeta data
   const insertado = await Model.insertMany(data)
   console.log(`Insertado ${insertado.length} ${modelName}. `)
    
}
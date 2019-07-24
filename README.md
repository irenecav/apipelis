# APIPELIS

#### NECESITAS MONGODB y NODE INSTALADO 

Para inicializar el proyecto:

```shell
npm install
```

Verifica la cadena de conexión a la base de datos en lib/connectMongoose.js

Utilizar el script de inicialización de la base de datos con:

```shell
npm run install_db
```

## Arranque

Para arrancar el proyecto usar:

* En producción:

```shell
npm start
```

* En desarrollo:

```shell
npm run dev
```

## Rutas del API

#### Retorna una lista de peliculas

* http://localhost:3000/pelicula/todas

#### Retorna una lista de directores

* http://localhost:3000/director/todos

#### Retorna una lista de películas según el director

* http://localhost:3000/director/id:director/peliculas


#### Otras rutas.

Para eliminar una película

* http://localhost:3000/pelicula/id:

Para eliminar un director

* http://localhost:3000/director/id:

Para añadir una película utilizar POST

* http://localhost:3000/pelicula/todas

Para añadir un director utilizar POST

* http://localhost:3000/director/todos



## Otra información


```shel
./bin/mongod --dbpath ./data/db --directoryperdb
```


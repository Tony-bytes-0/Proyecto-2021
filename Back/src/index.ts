import "reflect-metadata"

import app from './app'
import {appDataSource} from './db'
 // //rutas
// //const routes = require('./src/routes/crud') //no me deja, me da error
// import router from './routes/crud.js' //me da error igualmente
// //const router = require('./src/routes/crud')
// app.use(router)//importe de las rutas
// app.use(Express.json())

// app.get('/', (req, res) => {
//     res.send('por defecto')
// })
async function main(){
    try {
        await appDataSource.initialize()
        app.listen(4000)
        console.log('servidor corriendo en 3000')
    } catch (error) {
        console.log(error)
    }
}

main()

  

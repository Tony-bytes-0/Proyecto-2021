import { Router } from "express";
import Express  from "express";

const router = Router()
router.use(Express.json())

router.get('/getall', (req, res) => {
    res.send('prueba de sonido')
    console.log('este es el body del request:  ', req.body)
})

router.get('/users', (req, res ) => {
    res.json({
        username: 'Tony',
        lastname: 'Camorra'
    })

    router.post('/users/:id', (req, res) => {
        console.log(' aqui yo punia el body', req.body)
        console.log('estos son los parametros enviados', req.params)
        res.send(req.body)
    })
})

export default router 

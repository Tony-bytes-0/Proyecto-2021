import {Router} from 'express'
import { getUsers, createUser, updateUser, deleteUser, getUser } from '../controllers/user.controllers'

const router = Router()

router.get('/users', getUsers)//sin parametros 

router.post('/users', createUser)//objeto con: |name (string), lastName (string)|

router.put('/users/:id', updateUser)//id(en aprametro post) y objeto con: |name (string), lastName (string)|

router.delete('/users/:id', deleteUser)//solo recibe id por parametro 

router.get('/users/:id', getUser)//solo recibe id por parametro 



export default router
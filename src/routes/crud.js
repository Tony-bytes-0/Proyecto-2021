import { Router } from 'express';
import getAll  from '../controllers/crudDriver.js'//, getOne, create, putOne, deleteOne 

const router = Router();

// let getAll = async function(req, res){
//     res.send('accediendo a getAll')
// }
router.get('/g', getAll)

// router.get('/getone/:id', getOne)

// router.post('/create', create)

// router.delete('/deleteone/:id', deleteOne)

// router.put('/putone/:id', putOne)

export default router
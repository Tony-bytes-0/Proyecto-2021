const {Router} = require('express');
const {getAll, getOne, create, putOne, deleteOne} = require('../controllers/crudDriver')

const router = Router();

router.get('/data', getAll)

router.get('/data/:id', getOne)

router.post('/data', create)

router.delete('/data/:id', deleteOne)

router.put('/data/:id', putOne)

module.exports = router;

const pool = require('../dbcrud');

const getAll = async(req, res, next) => {
    try {
        const x = await pool.query('SELECT * FROM usuarios');
        res.json(x.rows)
    } catch (error) {
        console.log(error.message)
    }
}
const getOne = async(req, res, next) => {
    try {const id = req.params.id;//asignar el id que que pasa por parametro a "id", luego el query
    console.log('la id es: ', id)
        const x = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
        res.send(x)
    } catch (error) {
        console.log(error.message)
    }
}
const create = async(req, res, next) => {
    try {const {identificacion,nombre,apellido,nacimiento,direccion,sangre} = req.body;//asignar datos del json a la constante correspondiente
        const x = await pool.query('INSERT INTO "usuarios"("identificacion","nombre","apellido","nacimiento","direccion","sangre")\
        VALUES($1,$2,$3,$4,$5,$6) RETURNING *', [identificacion,nombre,apellido,nacimiento,direccion,sangre]);res.send(x);
    } catch (error) {console.log(error.message);res.send('ha ocurrido un error');}

}
const putOne = async(req, res, next) => {
    try {const id = req.params.id; 
    const {identificacion,nombre,apellido,nacimiento,direccion,sangre} = req.body;
    const x = await pool.query('UPDATE usuarios SET identificacion=$1, nombre=$2, apellido=$3, nacimiento=$4, direccion=$5, sangre=$6 WHERE id=$7',
    [identificacion, nombre, apellido, nacimiento, direccion, sangre, id ]);//mosca, el id del registro a editar esta al final!
    res.send(x);
    } catch (error) {console.log(error.message);res.send('ha ocurrido un error');}
}
const deleteOne = async(req, res, next) => {
    try {const id = req.params.deleteId;//asignar el id que que pasa por parametro a "id", luego el query
        const x = await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
        res.send(x)
    } catch (error) {
        console.log(error.message)
        res.send('ha ocurrido un error');
    }
}

module.exports ={ getAll, getOne, putOne, create, deleteOne }
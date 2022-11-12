const { Pool } = require('pg')
//bases de datos activas:
//usuarios--> id serial, nombre, apellido, cedula, nacimiento, telefono/ todo - nacimiento es varchar(50);
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',		
	password:'lonson123',
	database: 'dev',
	port:5432
})

const getData = async() =>{let x = [];//lista con los valores 
	try{console.log('obteniendo datos');
		const response = await pool.query('SELECT * from usuarios');
		response.rows.map((e) => x.push(e));
		//console.log(x)
		return x;}
	catch(e){console.log(e, 'ocurrio un error :(');}
}//0 insert [5 values], 
//1 select [id], 
//2  update [5 values + id (6)], 
//3 delete[solamente id]
const changue = async(op, dataArray) => {sql = [
	'insert into usuarios(nombre, apellido, cedula, nacimiento, telefono) values($1,$2,$3,$4,$5)',
	'select * from usuarios where id=$1', 
	'UPDATE usuarios set nombre=$1, apellido=$2, cedula=$3, nacimiento=$4, telefono=$5 WHERE id=$6',
	'DELETE from usuarios WHERE id=$1'];let message =['INSERT', 'SELECT', 'UPDATE', 'DELETE'];

	try{const response = await pool.query(sql[op], dataArray);
		if (op === 1);console.log(response.rows,message[op],' realizado con exito!!!');
		/*console.log(response);*/
		return response;}
		catch(e){console.log(e)};}

//getData();

//changue([3],[8]);

//const a = getData().then((x) => {console.log('a punto de print!  ');console.log(x)}, () => console.log('fallida! :('));//para obtener objeto con datos de la bd!!

module.exports = pool;


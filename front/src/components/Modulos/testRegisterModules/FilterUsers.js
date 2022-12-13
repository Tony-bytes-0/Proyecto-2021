import { TextField, Grid, Button } from "@mui/material";
import {Table} from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//React
import { useState } from "react";
//Axios
import axios from "axios"

function BasicTable(props) {
  return <Grid container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{/* aqui defino la cantidad de filas! */}
            <TableCell align="left"><b>ID</b></TableCell>
            <TableCell align="left"><b>Cedula</b></TableCell>
            <TableCell align="right"><b>Nombre</b></TableCell>
            <TableCell align="right"><b>Apellido</b></TableCell>
            <TableCell align="right"><b>Genero</b></TableCell>
            <TableCell align="right"><b>Telefono</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
            <TableRow key={props.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={() => {
                alert('Cedula: ' + props.cedula + ' Seleccionada!')}
                }>
              <TableCell align="left">{props.rows.id}</TableCell>
              <TableCell align="left">{props.rows.identificacion}</TableCell>
              <TableCell align="right">{props.rows.nombre}</TableCell>
              <TableCell align="right">{props.rows.apellido}</TableCell>
              <TableCell align="right">{props.rows.sexo}</TableCell>
              <TableCell align="right">aqui deberia ir el telefono</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
}
export default function FilterUsers(props){
  const [userFind, setUsers] = useState({})//aqui se almacenan los resultados
  const getUsers = () =>{
    axios.get('http://localhost:300/person/' + dni)
    .then(response => {
      setUsers(response.data)
      console.log(userFind)
    })
    .catch(e => {
      alert('ocurrio algun error al intentar buscar usuarios')
    })
  }
  //React - Variables de Estado
  const [dni, setDni] = useState('')
  const handleDni = (event) => { setDni(event.target.value) }//DNI

    return<>
        <Grid container style={{"padding":"2%"}}>
          <Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b>Buscar Usuarios por ID</b></h4></div> </Grid>

            <Grid item xs={10}>
                <TextField fullWidth label="Id de Usuario" type={'number'} variant="filled" onChange={handleDni}/>
            </Grid>

            <Grid item xs={2} >
              <div className="centrate" style={{"position":"relative","top":"10%"}}>
                <Button variant='contained' fullWidth onClick={getUsers}>Buscar!</Button>
              </div>
            </Grid>

                <BasicTable rows = {userFind} />
        </Grid>
    </>
}
import { Grid, Button } from "@mui/material";
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
  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{/* aqui defino la cantidad de filas! */}
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Cedula</b></TableCell>
            <TableCell align="right"><b>Nombre</b></TableCell>
            <TableCell align="right"><b>Apellido</b></TableCell>
            <TableCell align="right"><b>Genero</b></TableCell>
            <TableCell align="right"><b>Telefono</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={() => {
                alert('Cedula: ' + row.cedula + ' Seleccionada!')}
                }>
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="right">{row.identificacion}</TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.apellido}</TableCell>
              <TableCell align="right">{row.sexo}</TableCell>
              <TableCell align="right">aqui deberia ir el telefono </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
}
export default function FilterUsers(props){
  const [usersArray, setUsers] = useState([])
  const getUsers = () =>{
    axios.get('http://localhost:300/person')
    .then(response => {
      setUsers(response.data)
      console.log(response.data)
    })
    .catch(e => {
      alert('ocurrio algun error al intentar buscar usuarios')
    })
  }

    return<>
        <Grid container style={{"padding":"2%"}}>
          <Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b>Buscar Usuarios</b></h4></div> </Grid>
            <Grid item xs={12} >
                <div className="centrate" style={{"position":"relative","top":"10%"}}>
                    <Button variant='contained' fullWidth onClick={getUsers}>Mostrar todos los usuarios</Button>
                </div>    
            </Grid>

            <Grid item xs={12}>
                <BasicTable rows = {usersArray} />
            </Grid>
        </Grid>
    </>
}
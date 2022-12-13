import { TextField, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

//React
import { useState } from "react";
//Axios
import axios from "axios"

function BasicTable(props) {
  if(props.rows != null){
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
  }else{
    return<Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid item xs={12} className="centrate">No se Encontraron Resultados</Grid>
    </Grid>
  }
  
}
export default function FilterUsers(props){
  const [userFind, setUsers] = useState({})//aqui se almacenan los resultados
  const getUsers = () =>{
    axios.get('http://localhost:300/person/' + dni)
    .then(response => {
      setUsers(response.data)
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
import { TextField, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

//React
import { useState } from "react";
//Axios
import axios from "axios"
//Redux
import { useDispatch } from "react-redux";
    //reducers
    import { addUserData } from "../../../indexModles/features/userData/userData";


function BasicTable(props) {
    //Redux
    const dispatch = useDispatch()
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
                dispatch(addUserData(
                    props.rows
                ))
            }}>
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

export default function FilterUsers(){//MAIN
  const [userFind, setUsers] = useState({})//aqui se almacenan los resultados

  const getUsers = () =>{
    axios.get('http://localhost:300/person/' + id)
    .then(response => {
      setUsers(response.data)
    })
    .catch(e => {
      alert('ocurrio algun error al intentar buscar usuarios')
    })
    .finally(() => {console.log('se termino la busqueda!')})
  }
  //React - Variables de Estado
  const [id, setID] = useState('')
  const handleid = (event) => { setID(event.target.value) }//id

    return<>
        <Grid container style={{"padding":"2%"}}>
          <Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b> Buscar Usuarios por ID </b></h4></div> </Grid>

            <Grid item xs={10}>
                <TextField fullWidth label="ID del Usuario" variant="filled" onChange={handleid}/>
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
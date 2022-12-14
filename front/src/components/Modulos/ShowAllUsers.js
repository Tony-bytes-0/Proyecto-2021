//React
import { useState } from "react";
//Mui
import { Grid, Button,Table,TableBody,TableCell, TableContainer, TableHead, TableRow, Paper, Modal, ButtonGroup } from "@mui/material";
//Axios
import axios from "axios"

const emptyObject = {id:"",  identificacion:"", nombre:"", apellido:"", sexo:""}//estado inicial del estado del usuario seleccionado

function BasicTable(props) {
  const [modalState, setModal] = useState(false)
  function openModal(rowId){//al abrir la modal, se llenan los datos del usuario seleccionado: "selected"
    setModal(true); setSelected(props.rows[rowId-1])//aqui selecciono el usuario en base a su posicion en lista de props
  } 
  const closeModal = () => {setModal(false)}

  const [selected, setSelected] = useState(emptyObject)

  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{/* aqui defino la cantidad de filas! */}
            <TableCell><b>ID</b></TableCell>
            <TableCell align="right"><b>Nombre</b></TableCell>
            <TableCell align="right"><b>Apellido</b></TableCell>
            <TableCell align="right"><b>Cedula</b></TableCell>
            <TableCell align="right"><b>Genero</b></TableCell>
            <TableCell align="right"><b></b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.apellido}</TableCell>
              <TableCell align="right">{row.identificacion}</TableCell>
              <TableCell align="right">{row.sexo}</TableCell>
              <TableCell align="right"><Button variant='contained' onClick={() => {openModal(row.id)}}>Examinar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Modal open={modalState} disableScrollLock={false} onClose={closeModal}>
      <Grid container direction="column" alignItems="center" justifyContent="center">
        <div className='modalCentratedSmall'>
        <Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b>Datos del Usuario</b></h4></div> </Grid>

            <Grid item xs={12} className='centrate'> ID: {selected.id} </Grid>
            <Grid item xs={12} className='centrate'> Nombre: {selected.nombre} </Grid>
            <Grid item xs={12} className='centrate'>Apellido: {selected.apellido}</Grid>
            <Grid item xs={12} className='centrate'>Cedula: {selected.identificacion}</Grid>
            <Grid item xs={12} className='centrate'>Genero:  {selected.sexo} </Grid>
            

            <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons" className="basicBorders">
            <Button variant="contained" onClick={closeModal} className='basicBorders'>Volver</Button>
            <Button variant="contained" onClick={closeModal}>Eliminar Usuario</Button>
            </ButtonGroup>

        </div>
      </Grid>
    </Modal>
    </>
}
export default function FilterUsers(props){//Main
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
//React
import { useState } from "react";
import ClipLoader from 'react-spinners/ClipLoader';
//Mui
import { Grid, Button,Table,TableBody,TableCell, TableContainer, TableHead, TableRow, Paper, Modal, ButtonGroup } from "@mui/material";
//Axios
import axios from "axios"
//Redux
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "../../indexModles/features/userData/userList";




//tengo que cerrar las modeles al eliminar un archivo!!!!!!!!!!!!!!!!!




const emptyObject = {id:"",  identificacion:"", nombre:"", apellido:"", sexo:""}//estado inicial del estado del usuario seleccionado


function BasicTable(props) { const [selected, setSelected] = useState(emptyObject)
  //WEAS DE LA MODAL
  const [modalState, setModal] = useState(false)
    function openModal(rowId){//al abrir la modal, se llenan los datos del usuario seleccionado: "selected"
        setModal(true); 
        //buscar en la lista de objetos, por ID
        const found = userList.find( x =>  x.id === rowId)
        if (found){ setSelected(found) }
        else{ console.log('ocurrio algun error al buscar el id: ', rowId) }
    } 
  const closeModal = () => {setModal(false)}
    //Modal de confirmacion
    const [confirm, setConfirm] = useState(false)
    const openConfirm = () => {setConfirm(true)}
    const closeConfirm = () => {setConfirm(false)}

    function normalize(){//al finalizar, vuelve al estado inicial
<<<<<<< HEAD
      console.log('estoy en normalize')
      document.getElementById('getBtn').click()
=======
      setLoading(true)
      //document.getElementById('getUsersBtn').click() //boton feo
      console.log('Dentro del normalize')
      // axios.get('http://localhost:300/person')
      //   .then(response => { dispatch(updateUsers(response.data)); })
      //   .catch(e => { return e });
>>>>>>> d4dd573b84d8bfd2136532819d1ebf208fa07beb
      setConfirm(false)
      setModal(false)
      setLoading(false)
    }

<<<<<<< HEAD
    //CRUD
    const userList = useSelector(state => state.userList)


=======
    //Redux
    const userList = useSelector(state => state.userList)

>>>>>>> d4dd573b84d8bfd2136532819d1ebf208fa07beb
    function deleteUser(id){
        axios.delete('http://localhost:300/person/' + id)
            .then(response => {
                console.log('se ha borrado con exito el usuario: ', response)
            })
            .catch(e => {
                console.log('ocurrio algun tipo de error')
            })
<<<<<<< HEAD
            .finally(() => {
                console.log('finally!')
                normalize()
            })
            
    }

=======
        console.log('antes del normalize')    
        normalize()//cierra modales, reinicia la interfaz
            
    }

    //Spinner
    const [loading, setLoading] = useState(false);
>>>>>>> d4dd573b84d8bfd2136532819d1ebf208fa07beb

  return <>
    {loading ? (
      <div className="spinnerContainer">
        <ClipLoader color={'#52C5BC'} size={500} />
        <StaticTableData />
      </div>
    ) : (<Grid container><Grid item xs={12}><div className="centrate">Pantalla de carga</div></Grid></Grid>) }

    <TableContainer component={Paper} >
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

          {userList.map((row) => (
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

    {/* Modal de Vista de datos del usuario*/}
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
            <Button variant="contained" onClick={openConfirm}>Eliminar Usuario</Button>
            </ButtonGroup>

        </div>
      </Grid>
    </Modal>
    {/* modal de confirmacion */}
    <Modal open={confirm} onClose={closeConfirm}>
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <div className='modalCentratedSmall'>Borrar este Usuario?</div>

            <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons" className="basicBorders">
            <Button variant="contained" onClick={closeConfirm} className='basicBorders'>Volver</Button>
            <Button variant="contained" onClick={() => {deleteUser(selected.id)}}>Confirmar</Button>
            </ButtonGroup>
        </Grid>
    </Modal>
    </>
}

function StaticTableData (){
  <TableContainer component={Paper} >
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
        </Table>
        </TableContainer>
}



export default function FilterUsers(props){//Main
  const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    async function getUsers() {
        setLoading(true)
        axios.get('http://localhost:300/person')
            .then(response => {
                dispatch(updateUsers(response.data));
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                return e;
            });
    }

    return<>
        <Grid container style={{"padding":"2%"}}>
          <Grid item xs = {12} ><div className="centrate separator basicBorders tittle"><h4><b>Buscar Usuarios</b></h4></div> </Grid>
          
            <Grid item xs={12} >
                <div className="centrate" style={{"position":"relative","top":"10%"}} >
<<<<<<< HEAD
                    <Button id='getBtn' variant='contained' fullWidth onClick={() => {getUsers()}}>Mostrar todos los usuarios</Button>
=======
                <Button id='getUsersBtn' variant='contained' fullWidth onClick={() => {getUsers()}}>Mostrar todos los usuarios</Button>
>>>>>>> d4dd573b84d8bfd2136532819d1ebf208fa07beb
                </div>    
            </Grid>

            
            {loading ? (
              <div className="spinnerContainer">
                <ClipLoader color={'#52C5BC'} size={500} />
                <StaticTableData />
              </div>
              ) : (
                <BasicTable />
              )
            }
            
        </Grid>
    </>
}
import { TextField, Grid, Button } from "@mui/material";
import {Table} from "@mui/material";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const testObjects = [
    {
        "id":"01",
        "cedula":"27080311",
        "nombre":"Tony",
        "apellido":"Gonzalez",
        "genero":"Masculino",
        "telefono":"04248754443"
    },
    {
        "id":"02",
        "cedula":"30303030",
        "nombre":"Jose",
        "apellido":"Ramirez",
        "genero":"Masculino",
        "telefono":"04248754443"
    },
    {
      "id":"",
      "cedula":"",
      "nombre":"",
      "apellido":"",
      "genero":"",
      "telefono":""
    }

]

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
              <TableCell align="right">{row.cedula}</TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.apellido}</TableCell>
              <TableCell align="right">{row.genero}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
}
export default function FilterUsers(props){
    return<>
        <Grid container style={{"padding":"2%"}}>
            <Grid item xs={10}>
                <TextField fullWidth label="Cedula" type={'number'} variant="filled" />
            </Grid>
            <Grid item xs={2} >
            <div className="centrate" style={{"position":"relative","top":"10%"}}>
              <Button variant='contained' fullWidth >Buscar!</Button>
            </div>
                
            </Grid>

            <Grid item xs={12}>
                <BasicTable rows = {testObjects} />
            </Grid>
        </Grid>
    </>
}
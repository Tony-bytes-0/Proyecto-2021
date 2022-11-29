//Modulos
import AllergiesList from "./AllergiesList"
import CronicDiseasesList from "./CronicDiseasesList"
import DiscapacitiesList from "./DiscapacitiesList"
import SymptomSelect from "./SymptomSelect"
//MUI
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl} from "@mui/material"
//arrays
import { allergies, cronicDiseases, discapacities } from "../Independientes/staticValuesList"

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


export default function TestMedical(props){
    return<>
    <Grid container>
        {/* <Grid item xs = {12}> </Grid> */}
        <Grid item xs = {12}><div className="centrate SIDEBAR basicBorders">Datos de la Historia Medica</div> </Grid>{/* SEPARADOR */}

        <Grid item xs = {6}>
        <FormControl fullWidth sx={{"padding":"3%"}}>
                <InputLabel>Relacion con el Ambulatorio</InputLabel>
                <Select label="Genero" variant="filled">
                    <MenuItem >Paciente</MenuItem>
                    <MenuItem >Medico</MenuItem>
                    <MenuItem >Enfermera</MenuItem>
                    <MenuItem >Personal del Ambulatorio</MenuItem>
                </Select>
            </FormControl>
            
        </Grid>

        <Grid item xs = {6}> 
            <FormControl fullWidth sx={{"padding":"3%"}}>
                <InputLabel>Fecha de Consulta</InputLabel>
                <TextField id="date"  type="date" defaultValue="2000-01-01" InputLabelProps={{shrink: true}} variant="filled" />    
            </FormControl>
        </Grid>

        <Grid item xs = {12}><div className="centrate SIDEBAR basicBorders">Padecimientos</div> </Grid>{/* SEPARADOR */}
        <Grid container spacing={2} sx={{"padding":"2%"}}>
            <Grid item xs = {4}> <AllergiesList data={allergies} /> </Grid>
            <Grid item xs = {4}> <CronicDiseasesList data={cronicDiseases} /> </Grid>
            <Grid item xs = {4}> <DiscapacitiesList data={discapacities} /> </Grid>
        </Grid>
        <Grid item xs = {12}><div className="centrate SIDEBAR basicBorders" >Sintomas</div> </Grid>{/* SEPARADOR */}

        <SymptomSelect />


    </Grid>
    </>
}
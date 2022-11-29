//Modulos
import AllergiesList from "./AllergiesList"
import CronicDiseasesList from "./CronicDiseasesList"
import DiscapacitiesList from "./DiscapacitiesList"
import SymptomSelect from "./SymptomSelect"
//MUI
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, TableContainer,Table, Paper, TableHead, TableBody, TableRow, TableCell, Button} from "@mui/material"
//arrays
import { allergies, cronicDiseases, discapacities, symptoms } from "../Independientes/staticValuesList"

function BasicTable(props) {
    return <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow>{/* aqui defino la cantidad de filas! */}
              <TableCell align="center"><h4><b>Sintoma</b></h4></TableCell>
              <TableCell align="center"><h4><b>Gravedad</b></h4></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {props.rows.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">ejemplo de weas</TableCell>
                <TableCell align="center">otroejemplo</TableCell>
                <TableCell align="center"><Button variant="contained">botoncito</Button></TableCell>
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

        <Grid container>
            <BasicTable rows={symptoms} />
        </Grid>
    </Grid>
    </>
}
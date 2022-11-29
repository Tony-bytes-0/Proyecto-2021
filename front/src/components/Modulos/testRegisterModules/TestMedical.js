//Modulos
import AllergiesList from "./AllergiesList"
import CronicDiseasesList from "./CronicDiseasesList"
import DiscapacitiesList from "./DiscapacitiesList"
//MUI
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl} from "@mui/material"
//arrays
import { allergies, cronicDiseases, discapacities } from "../Independientes/staticValuesList"


export default function TestMedical(props){
    return<>
    <Grid container>
        {/* <Grid item xs = {12}> </Grid> */}
        <Grid item xs = {12}><div className="centrate SIDEBAR basicBorders">Separador!</div> </Grid>

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
                <TextField id="date"  type="date" defaultValue="2017-05-24" InputLabelProps={{shrink: true}} variant="filled" />    
            </FormControl>
        </Grid>

        <Grid item xs = {12}><div className="centrate SIDEBAR basicBorders">Sintomas</div> </Grid>

        <Grid item xs = {4}> <AllergiesList data={allergies} /> </Grid>
        <Grid item xs = {4}> <CronicDiseasesList data={cronicDiseases} /> </Grid>
        <Grid item xs = {4}> <DiscapacitiesList data={discapacities} /> </Grid>
    </Grid>
    </>
}
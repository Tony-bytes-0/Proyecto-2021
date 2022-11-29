//React
import { useState } from "react"
//MUI
import { Grid, FormControl, InputLabel, MenuItem, Select, Button} from "@mui/material"
//Modulos
import {symptoms} from "../Independientes/staticValuesList"

export default function SymptomSelect(){
    const[symptom, setSymptom] = useState('')
    const handleSymptom = (event) => { setSymptom(event.target.value) }
    return<>
        <Grid container >
            <Grid item xs={10}>
                <FormControl fullWidth sx={{"padding":"3%"}}>
                    <InputLabel>Sintomas</InputLabel>
                    <Select label="Genero" variant="filled" value={symptom} onChange={handleSymptom}>
                        {symptoms.map((e) => <MenuItem value={e} key={e}>{e}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={2} >
                <div className="centrate" style={{"position":"relative","top":"30%"}}>
                    <Button variant='contained' fullWidth >Agregar</Button>
                </div>
            </Grid>
        </Grid>
    </>
}
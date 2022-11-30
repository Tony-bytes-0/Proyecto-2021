//React
import { useState } from "react"
//MUI
import { Grid, FormControl, InputLabel, MenuItem, Select, Button} from "@mui/material"
 //redux
import { useDispatch, useSelector } from 'react-redux';
import { addSymptom } from "../../../indexModles/features/Symptoms/ActiveSymptoms";//lista por defecto
import { removeSymptom } from "../../../indexModles/features/Symptoms/symptomList";
//Modulos
//import {symptoms} from "../Independientes/staticValuesList"


export default function SymptomSelect(){
    //React States
    const[symptom, setSymptom] = useState('')
    const handleSymptom = (event) => { setSymptom(event.target.value);}

    //Redux
    const dispatch = useDispatch() 

    //estados - SELECTOR DE SINTOMA
    const symptomList = useSelector(state => state.symptomList)//valor del selector de sintomas

    
    
    return<>
        <Grid container >
            <Grid item xs={10}>
                <FormControl fullWidth sx={{"padding":"3%"}}>
                    <InputLabel>Sintomas</InputLabel>
                    <Select label="Genero" variant="filled" value={symptom} onChange={handleSymptom}>
                        {symptomList.map((e) => <MenuItem value={e} key={e}>{e}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={2} >
                <div className="centrate" style={{"position":"relative","top":"30%"}}>
                    <Button variant='contained' fullWidth onClick={() => {
                        dispatch(addSymptom(symptom))
                        dispatch(removeSymptom(symptom))
                    }}>Agregar</Button>
                </div>
            </Grid>
        </Grid>
    </>
}
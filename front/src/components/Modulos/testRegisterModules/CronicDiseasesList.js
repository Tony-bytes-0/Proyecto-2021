import { Switch, FormGroup, FormControlLabel } from "@mui/material"
import { cronicDiseases } from "../Independientes/staticValuesList"

export default function CronicDiseasesList(props){
    return<>
        <FormGroup orientation="horizontal">
            <FormControlLabel control={<Switch />} label='Enfermedades Cronicas' />
            <FormControlLabel disabled control={<Switch />} label={cronicDiseases[0]} />
            <FormControlLabel disabled control={<Switch />} label={cronicDiseases[1]} />
            <FormControlLabel disabled control={<Switch />} label={cronicDiseases[2]} />
            <FormControlLabel disabled control={<Switch />} label={cronicDiseases[3]} />
            <FormControlLabel disabled control={<Switch />} label={cronicDiseases[4]} />
        </FormGroup>
    </>
}
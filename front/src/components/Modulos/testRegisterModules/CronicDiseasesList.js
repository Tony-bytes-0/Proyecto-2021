import { Switch, FormGroup, FormControlLabel } from "@mui/material"
import { useState } from "react"

export default function CronicDiseasesList(props){
    const [hideCronic, toggleCronic] = useState(true)
    const handleChange = (event) => { if (event.target.checked) { toggleCronic(false) } else { toggleCronic(true) } }//disable de las enfermedades cronicas

    const [epilepsia, setEpilepsia] = useState(false)
    const handleEpilepsia = () => {if(epilepsia){setEpilepsia(false)}  else{setEpilepsia(true)}}
    return<>
        <FormGroup orientation="horizontal">
            <FormControlLabel control={<Switch />} onChange={handleChange} label='Enfermedades Cronicas' />
            <FormControlLabel disabled={hideCronic}  control={<Switch />} onChange={handleEpilepsia} label={'Epilepsia'} />
            <FormControlLabel disabled={hideCronic}  control={<Switch />} label={'Cancer'} />
            <FormControlLabel disabled={hideCronic} control={<Switch />} label={'Diabetes'} />
            <FormControlLabel disabled={hideCronic} control={<Switch />} label={'Artritis'} />
            <FormControlLabel disabled={hideCronic} control={<Switch />} label={'Asma'} />
        </FormGroup>
    </>
}
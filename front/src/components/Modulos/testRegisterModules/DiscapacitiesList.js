import { Switch, FormGroup, FormControlLabel } from "@mui/material";
import { useState } from "react";
const discapacities = ['Miopia', 'Autismo', 'Sordo', 'Mudo']

export default function DiscapacitiesList(props){

    const [discapacidades, setDiscapacidades] = useState(true)
    const toggleDiscapacities = (event) => { if (event.target.checked) {setDiscapacidades(false)}  else{setDiscapacidades(true)}}

    return<>
        <FormGroup orientation="horizontal">
            <FormControlLabel control={<Switch />} label='Discapacidades' onChange={toggleDiscapacities} />
            <FormControlLabel disabled={discapacidades} control={<Switch />} label={'Miopia'} />
            <FormControlLabel disabled={discapacidades} control={<Switch />} label={'Autismo'} />
            <FormControlLabel disabled={discapacidades} control={<Switch />} label={'incapaz para oir'} />
            <FormControlLabel disabled={discapacidades} control={<Switch />} label={'incapacidaz de Hablar'} />
        </FormGroup>
    </>
}
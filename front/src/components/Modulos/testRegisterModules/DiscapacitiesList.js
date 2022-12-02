import { Switch, FormGroup, FormControlLabel } from "@mui/material"
import { discapacities } from "../Independientes/staticValuesList"

export default function DiscapacitiesList(props){
    return<>
        <FormGroup orientation="horizontal">
            <FormControlLabel control={<Switch />} label='Discapacidades' />
            <FormControlLabel disabled control={<Switch />} label={discapacities[0]} />
            <FormControlLabel disabled control={<Switch />} label={discapacities[1]} />
            <FormControlLabel disabled control={<Switch />} label={discapacities[2]} />
            <FormControlLabel disabled control={<Switch />} label={discapacities[3]} />
            <FormControlLabel disabled control={<Switch />} label={discapacities[4]} />
        </FormGroup>
    </>
}
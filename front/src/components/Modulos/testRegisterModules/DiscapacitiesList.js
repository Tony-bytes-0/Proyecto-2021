import { Switch, FormGroup, FormControlLabel } from "@mui/material"

export default function DiscapacitiesList(props){
    return<>
        <FormGroup orientation="horizontal">
            <FormControlLabel control={<Switch />} label='Discapacidades' />
            <FormControlLabel disabled control={<Switch />} label={props.data[0]} />
            <FormControlLabel disabled control={<Switch />} label={props.data[1]} />
            <FormControlLabel disabled control={<Switch />} label={props.data[2]} />
            <FormControlLabel disabled control={<Switch />} label={props.data[3]} />
            <FormControlLabel disabled control={<Switch />} label={props.data[4]} />
        </FormGroup>
    </>
}
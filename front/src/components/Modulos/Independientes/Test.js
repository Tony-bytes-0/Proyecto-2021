import { Grid, TextField, InputLabel, Select, MenuItem  } from "@mui/material"

const smallWidth = { width: '25%', maxWidth: '25%' }
//sx={{ width: '25%' }}
export function Test (props){
    return <>
            
    <Grid container >
        <Grid Item xs={10} >
            <TextField sx={smallWidth} label="Cedula" variant="outlined" />
            <TextField sx={smallWidth} label="Nombre" variant="outlined" spacing={20}/>
            <TextField sx={smallWidth} label="Apellido" variant="outlined" spacing={20}/>
            <Select label={"Genero"} sx={smallWidth}>
                <MenuItem >Masculino</MenuItem>
                <MenuItem >Femenino</MenuItem>
            </Select>
            <Grid item xs={3}>AQUI VA</Grid>
        </Grid>

        <Grid Item>
            <TextField sx={smallWidth} label="Telefono" variant="outlined" />
            <TextField sx={smallWidth} label="Telefono de Emergencia" variant="outlined" spacing={20}/>
            {/*aqui va la fecha */}
            <Select label="Tipo de Sangre" sx={smallWidth}>
                <MenuItem >A +</MenuItem>
                <MenuItem >A -</MenuItem>
                <MenuItem >B +</MenuItem>
                <MenuItem >B -</MenuItem>
                <MenuItem >O +</MenuItem>
                <MenuItem >O -</MenuItem>
                <MenuItem >AB +</MenuItem>
                <MenuItem >AB -</MenuItem>
            </Select>
        </Grid>
    </Grid>
    </>
}
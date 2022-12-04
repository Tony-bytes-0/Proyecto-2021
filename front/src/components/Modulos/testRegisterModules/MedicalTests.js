//React
import { useState } from "react"

//MUI Components
// import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Avatar, Button   } from "@mui/material"
import { Button, Grid } from "@mui/material"


export default function MedicalTests(){
    //const [show, toggleShow ] = useState()


    return<>
        <Grid container>
            <div className="centrate">
                <Button variant="contained" style={{"margin":"2%"}}>Añadir Chequeos a Realizar</Button>
            </div>
        </Grid>
    </>
}
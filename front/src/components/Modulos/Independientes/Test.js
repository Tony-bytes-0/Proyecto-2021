//React
import { useState } from "react"
//modulos
import FilterUsers from "../registerModules/FilterUsers"
import TestMedical from "../testRegisterModules/TestMedical"
//MUI
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Avatar, Button   } from "@mui/material"
import blueLobster from './blue-Lobster.jpg'


const smallWidth = { width: '25%', maxWidth: '25%' }

//sx={{ width: '25%' }}
export function Test (props){
    const [renderRegister, toggleRegister] = useState(true)//para mostrar el registrar o buscar personas

    if(renderRegister){
        return<>
            <Grid container>
                <Grid item xs={12}> <FilterUsers /> </Grid> 
            </Grid>
            <Button variant="contained" style={{"padding":"2%"}} onClick={() => {toggleRegister(false)}} >Usuario Nuevo</Button>
            <TestMedical />
        </>
    }
    else {return <>
    <div className="flexible centrate verticalFlex" >
        <InputLabel>Ingresar Foto de Perfil</InputLabel>
        <Avatar sx={{ width: 100, height: 100 }} alt="blueLobster" src={blueLobster} onClick={()=>{alert('desplegar pestaña para ingresar joto')}} />
    </div>
    
    <Grid container sx={{"padding":"2%"}} spacing={1}>
        <Grid item xs={12} >{/*esto es un row basicamente*/}
            <TextField sx={smallWidth} label="Cedula" variant="filled" />
            <TextField sx={smallWidth} label="Nombre" variant="filled"/>
            <TextField sx={smallWidth} label="Apellido" variant="filled" />

            <FormControl sx = {smallWidth}>
                <InputLabel>Genero</InputLabel>
                <Select label="Genero" variant="filled">
                    <MenuItem >Masculino</MenuItem>
                    <MenuItem >Femenino</MenuItem>
                </Select>
            </FormControl>
        </Grid>  
        

        <Grid item xs = {12}>
            <TextField label="Telefono"  sx={smallWidth}  variant="filled" />
            <TextField label="Telefono de Emergencia" sx={smallWidth} variant="filled" />
            <TextField label="Naciemiento" id="date"  type="date" defaultValue="2017-05-24" InputLabelProps={{shrink: true}} variant="filled" />
            <FormControl sx = {smallWidth}>
                <InputLabel>Tipo de Sangre</InputLabel>
                <Select variant="filled" id="genderValue" label="Genero">
                    <MenuItem >A +</MenuItem> <MenuItem >A -</MenuItem>
                    <MenuItem >B +</MenuItem> <MenuItem >B -</MenuItem>
                    <MenuItem >O +</MenuItem> <MenuItem >O -</MenuItem>
                    <MenuItem >AB +</MenuItem> <MenuItem >AB -</MenuItem>
                </Select>
            </FormControl>   
        </Grid>
        {/* Esto debe quedar al final */}
        <Grid item xs={2}>
            <Button variant="contained" style={{"margin":"2%"}} onClick={() => {toggleRegister(true)}}>Borrar Datos</Button>
        </Grid>

        <TestMedical />
        
    </Grid>
    </>}
    
}

//             <Select label={"Genero"} sx={smallWidth}>
//                 <MenuItem >Masculino</MenuItem>
//                 <MenuItem >Femenino</MenuItem>
//             </Select>

// <TextField sx={smallWidth} label="Cedula" variant="outlined" />
// <TextField sx={smallWidth} label="Nombre" variant="outlined" spacing={20}/>
// <TextField sx={smallWidth} label="Apellido" variant="outlined" spacing={20}/>

// <Select label="Tipo de Sangre" sx={smallWidth}>


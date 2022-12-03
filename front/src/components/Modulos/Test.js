//React
import { useState } from "react"
//modulos
import FilterUsers from "./registerModules/FilterUsers"
import TestMedical from "./testRegisterModules/TestMedical"
//MUI
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Avatar, Button   } from "@mui/material"
import blueLobster from './Independientes/blue-Lobster.jpg'


const smallWidth = { width: '25%', maxWidth: '25%' }

//sx={{ width: '25%' }}
export function Test (props){
    const [renderRegister, toggleRegister] = useState(true)//para mostrar el registrar o buscar personas
    //Estado de variables de datos
    const [bloodType, setBloodType] = useState('')//tipo de sangre
    const handleBloodType = (event) => { setBloodType(event.target.value) }

    const [gender, setGender] = useState('')//genero
    const handleGender = (event) => { setGender(event.target.value) }
    //direccion
    const [municipio, setMunicipio] = useState('')
    const handleMunicipio = (event) => { setMunicipio(event.target.value) }

    const [Parroquia, setParroquia] = useState('')
    const handleParroquia = (event) => {setParroquia(event.target.value)}

    const [sector, setSector] = useState('')
    const handleSector = (event) => {setSector(event.target.value)}


    //
    if(renderRegister){
        return<>
            <Grid container>
                <Grid item xs={12}> <FilterUsers /> </Grid> 
            </Grid>
            <div className="centrate">
                <Button variant="contained" style={{"padding":"2%"}} onClick={() => {toggleRegister(false)}} >Usuario Nuevo</Button>
            </div>
            
            <TestMedical />
        </>
    }
    else {return <>
    <div className="flexible centrate verticalFlex" >
        <InputLabel><h5><b>Ingresar Foto de Perfil</b></h5></InputLabel>
        <Avatar sx={{ width: 100, height: 100 }} alt="blueLobster" src={blueLobster} onClick={()=>{alert('desplegar pestaña para ingresar joto')}} />
    </div>
    
    <Grid container sx={{"padding":"2%"}} spacing={1}>
        <Grid item xs={12} >{/*esto es un row basicamente*/}
            <TextField sx={smallWidth} label="Cedula" variant="filled" type={'number'}/>
            <TextField sx={smallWidth} label="Nombre" variant="filled"/>
            <TextField sx={smallWidth} label="Apellido" variant="filled" />

            <FormControl sx = {smallWidth}>
                <InputLabel>Genero</InputLabel>
                <Select label="Genero" variant="filled" value = {gender} onChange={handleGender}>
                    <MenuItem value={'Masculino'}>Masculino</MenuItem>
                    <MenuItem value={'Femenino'}>Femenino</MenuItem>
                </Select>
            </FormControl>
        </Grid>  
        

        <Grid item xs = {12}>
            <TextField label="Telefono"  sx={smallWidth}  variant="filled" type={'number'}/>
            <TextField label="Telefono de Emergencia" sx={smallWidth} variant="filled" type={'number'}/>
            <TextField label="Nacimiento" id="date"  type="date" defaultValue="2000-01-01" InputLabelProps={{shrink: true}} variant="filled" />
            <FormControl sx = {smallWidth}>
                <InputLabel>Tipo de Sangre</InputLabel>
                <Select variant="filled" id="BloodType" label="Genero" value={bloodType} onChange={handleBloodType}>
                    <MenuItem value={'A+'} >A +</MenuItem> <MenuItem value={'A-'}>A -</MenuItem>
                    <MenuItem value={'B+'}>B +</MenuItem> <MenuItem value={'B-'}>B -</MenuItem>
                    <MenuItem value={'O+'}>O +</MenuItem> <MenuItem value={'O-'}>O -</MenuItem>
                    <MenuItem value={'AB+'}>AB +</MenuItem> <MenuItem value={'AB-'}>AB -</MenuItem>
                </Select>
            </FormControl>   
        </Grid>

{/* SEPARADOR */}        <Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b>Direccion</b></h4></div> </Grid>                      {/* SEPARADOR */}

        <Grid item xs = {4}>
            <FormControl fullWidth>
                <InputLabel>Municipio</InputLabel>
                <Select variant="filled" id="BloodType" label="Genero" value={municipio} onChange={handleMunicipio}>
                    <MenuItem value={'Andrés Eloy Blanco'} >Andrés Eloy Blanco</MenuItem> <MenuItem value={'Andrés Mata'}>Andrés Mata</MenuItem>
                    <MenuItem value={'Arismendi'}>Arismendi</MenuItem> <MenuItem value={'Benítez'}>Benítez</MenuItem>
                    <MenuItem value={'Bermúdez'}>Bermúdez</MenuItem> <MenuItem value={'Bolívar'}>Bolívar</MenuItem>
                    <MenuItem value={'Cajigal'}>Sucre</MenuItem> <MenuItem value={'AB-'}>Cruz Salmerón Acosta</MenuItem>
                </Select>
            </FormControl>  
        </Grid>

        <Grid item xs = {4}>
            <FormControl fullWidth>
                <InputLabel>Parroquia</InputLabel>
                <Select variant="filled" id="BloodType" label="Genero" value={Parroquia} onChange={handleParroquia}>
                    <MenuItem value={'Altagracia'} >Altagracia</MenuItem> <MenuItem value={'Ayacucho'}>Ayacucho</MenuItem>
                    <MenuItem value={'Santa Ines'}>Santa Ines</MenuItem> <MenuItem value={'Raul Leoni'}>Raul Leoni</MenuItem>
                    <MenuItem value={'San Juan'}>San Juan</MenuItem> <MenuItem value={'Santa Fe'}>Santa Fe</MenuItem>
                    <MenuItem value={'Valentin Valiente'}>Valentin Valiente</MenuItem>
                </Select>
            </FormControl>  
        </Grid>

        <Grid item xs = {4}>
            <FormControl fullWidth >
                <InputLabel>Sector</InputLabel>
                <Select variant="filled" id="BloodType" label="Genero" value={sector} onChange={handleSector}>
                    <MenuItem value={'Los Chaimas'} >Los Chaimas</MenuItem> <MenuItem value={'Cantarrana'}>Cantarrana</MenuItem>
                    <MenuItem value={'El Peñon'}>El Peñon</MenuItem> <MenuItem value={'El Bosque'}>Perimetral</MenuItem>
                    <MenuItem value={'Caiguire'}>Caiguire</MenuItem> <MenuItem value={'Brasil'}>Brasil</MenuItem>
                    <MenuItem value={'Centro'}>Centro</MenuItem> <MenuItem value={'Llanada'}>Llanada</MenuItem>
                </Select>
            </FormControl>  
        </Grid>

        {/* Esto debe quedar al final */}
        <Grid item xs={2}>
            <div className="centrate">
                <Button variant="contained" style={{"margin":"2%"}} onClick={() => {toggleRegister(true)}}>Borrar Datos</Button>
            </div>
        </Grid>

        <TestMedical />

        <Grid item xs = {12}>
            <div className="centrate">
                <Button variant="contained" style={{"margin":"2%"}}>Registar</Button>
            </div>
        </Grid>
        
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


//React
import { useState } from "react"
//modulos
import FilterUsers from "./registerModules/FilterUsers"
import UserData from "./testRegisterModules/UserData"
import MedicalRecord from "./testRegisterModules/MedicalRecord"

//MUI
import { Button } from "@mui/material"


export function Test (props){
    const [renderRegister, toggleRegister] = useState(true)//para mostrar el registrar o buscar personas

    if(renderRegister){
        return<>
            <FilterUsers />{/* Busqueda de usuarios */}

            <div className="centrate">
                <Button variant="contained" style={{"padding":"2%"}} onClick={() => {toggleRegister(false)}} >Usuario Nuevo</Button>
            </div>
            
            <MedicalRecord />{/* Registro de Historia Medica */}
            
            <div className="centrate">   <Button variant="contained" style={{"margin":"2%"}}>Registar</Button>   </div>
        </>
    }


    
    else {return <>
        <UserData />{/* Ingresar los Datos */}

            <div className="centrate horizontalFlex">
                <Button variant="contained" style={{"margin":"2%"}} onClick={() => {toggleRegister(true)}}>Borrar Datos</Button>
                <Button variant="contained" style={{ "margin": "2%" }} onClick={() => {alert('sin funciones') }}>Listo</Button>
            </div>

        <MedicalRecord /> {/* Registro de Historia Medica */}

        <div className="centrate">   <Button variant="contained" style={{"margin":"2%"}}>Registar</Button>   </div>
        
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


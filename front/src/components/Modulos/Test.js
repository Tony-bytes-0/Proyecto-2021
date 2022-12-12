//React
import { useState } from "react"
//MUI
import { Button } from "@mui/material"

//Redux
import { useDispatch } from "react-redux"
import { clearData } from "../../indexModles/features/userData/userData"

//modulos
import FilterUsers from "./registerModules/FilterUsers"
import UserData from "./testRegisterModules/UserData"
import MedicalRecord from "./testRegisterModules/MedicalRecord"


export function Test (props){
    const dispatch = useDispatch()
    const [renderRegister, toggleRegister] = useState(false)//para mostrar el registrar o buscar personas

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
                <Button variant="contained" style={{"margin":"2%"}} onClick={() => {
                    dispatch(clearData())
                    toggleRegister(true)
                }}>Borrar Datos</Button>
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


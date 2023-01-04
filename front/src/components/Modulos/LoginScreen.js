import { Avatar, Button, Grid, TextField } from "@mui/material";
//React
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
//Redux
import { useSelector } from "react-redux";

const sm = { width: '100%', maxWidth: '100%', padding: '10px' }

export default function LoginScreen(){
    const navigate = useNavigate()
    const [login, setLogin] = useState(true)
    const localUsers = useSelector(state => state.localUsers)

    const[user, setUser] = useState(''); const handleUser = (event) => {setUser(event.target.value)}
    const[password, setPassword] = useState(''); const handlePassword = (event) => {setPassword(event.target.value)}
    const[confirm, setConfirm] = useState(''); const handleConfirm = (event) => {setConfirm(event.target.value)}
    
    function resetInputs(){setUser(''); setPassword(''); setConfirm('')}
    //function createObject(){return {"usuario":user, "contraseña":password} }
    function loginAction(){navigate('/register')}
    function validateUser(){
        let validate = false
        localUsers.forEach(element => { if(element.usuario === user && element.clave === password){ validate = true } });

        if(validate){
            alert('inicio de sesion exitoso, accediendo')
            loginAction()
        }
    }

    if(login)return<><Grid container direction='column' alignContent='center' justifyContent='center' align='center' spacing={10}>

        <Grid item xs = {12}></Grid>
        <Grid item xs = {12}><div className="login verticalFlex centrate">
            <Avatar alt='User' />
            <TextField sx={sm} variant="filled" label='Usuario' onChange={handleUser} value={user} />
            <TextField sx={sm} variant="filled" label='Contraseña' type="password" onChange={handlePassword} value={password} />

            <div className="basicBorders"><Button variant="contained" color="success"  onClick={() => {
                //loginAction()
                validateUser()
                resetInputs()
            }}>Ingresar</Button></div>

            <div className="basicBorders"><Button variant="contained" onClick={() => {
                resetInputs()
                setLogin(false)
            }}>Crear Usuario</Button></div>

        </div></Grid>

    </Grid></>



    else return<><Grid container direction='column' alignContent='center' justifyContent='center' align='center' spacing={10}>

        <Grid item xs = {12}></Grid>
        <Grid item xs = {12}><div className="login verticalFlex centrate">
            <TextField sx={sm} variant="filled" label='Nuevo Nombre de Usuario' onChange={handleUser} value={user} />
            <TextField sx={sm} variant="filled" label='Contraseña' type="password" onChange={handlePassword} value={password} />
            <TextField sx={sm} variant="filled" label='Repetir Contraseña' type="password" onChange={handleConfirm} value={confirm} />

            <div className="basicBorders"><Button variant="contained" color="success" onClick={() => setLogin(true)}>Crear</Button></div>
            <div className="basicBorders"><Button variant="contained" onClick={() => setLogin(true)}>Volver a Ingresar</Button></div>
            
        </div></Grid>

    </Grid></>
}
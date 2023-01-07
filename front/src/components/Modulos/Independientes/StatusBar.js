//React
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
//MUI
import { Avatar } from "@mui/material"
import { deepPurple} from '@mui/material/colors';
import {Button, Modal} from "@mui/material";
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { disconect } from "../../../indexModles/features/users/loginController";

function LoggedData() {
    const [modal] = useState(true); 
    const closeModal = () => {navigate('/')};
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loggedUser = useSelector(state => state.loginController)
    

    //console.log(loggedUser) //Dev
    if(loggedUser.usuario !== false) return <div className="verticalFlex"><b>{loggedUser.usuario}</b>
        <div className="flexible"><a className='hoverDown' onClick={() => {
            dispatch(disconect())
            navigate('/')
        }}>Cerrar Sesion</a></div>
    </div>
    //else return <b>Desconectado</b>
    else return <> {/* Logeadon't */}
        <Modal open={modal} onClose={closeModal} disableScrollLock={false} ><div className='modalColor modalCentratedSmall verticalFlex centrate'>
            Para Continuar, es Necesario Ingresar un Usuario
            <Button variant='contained' onClick={() => navigate('/')} >Iniciar Sesion</Button>
        </div></Modal>
    </>
}

export default function StatusBar(){//Main
    
    return <div className="STATUSBAR right">
        <div className="horizontalFlex">
            <LoggedData  />
            <Avatar sx={{ bgcolor: deepPurple[500] }}></Avatar>
        </div>
    </div>
}
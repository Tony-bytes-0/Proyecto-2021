import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

import { createStoreHook } from 'react-redux';

//Redux


export default function SideBar(props) {
//sx={{ width: '25%' }} 
    const navigate = useNavigate()

        return <div className='SIDEBAR'>
            <ButtonGroup fullWidth={true} 
                disableElevation
                variant="contained"
                orientation="vertical"
                aria-label="Disabled elevation buttons">

                    <Button  variant='contained' onClick={() => {navigate('/')}} 
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Registro de Historia Medica
                    </Button>

                    <Button variant='contained' onClick={() => {navigate('/')}}
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Consulta
                    </Button>

                    <Button variant='contained' onClick={() => {navigate('/')}} 
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Registrar personas
                    </Button>

                    <Button variant='contained' onClick={() => {alert('debo mostrar el estate de redux aqui')}} 
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Boton de prueba -Redux getState-
                    </Button>
            </ButtonGroup>
        </div>
}

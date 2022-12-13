//React
import {useNavigate} from 'react-router-dom';

//MUI
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';


export default function SideBar(props) {

    const navigate = useNavigate()

        return <div className='SIDEBAR'>
            <ButtonGroup fullWidth={true} 
                disableElevation
                variant="contained"
                orientation="vertical"
                aria-label="Disabled elevation buttons">

                    <Button  variant='contained' onClick={() => {navigate('/users')}} 
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Registro de Personas
                    </Button>

                    <Button  variant='contained' onClick={() => {navigate('/')}} 
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Registro de Historia Medica
                    </Button>

                    <Button variant='contained' onClick={ () => {navigate('/showAllUsers')} }
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Ver Todos los Usuarios
                    </Button>

                    
                    {/* <Button variant='contained' onClick={ printStoreData }
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Ver Redux Storage
                    </Button> */}
            </ButtonGroup>
        </div>
}

import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

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
                        Registro
                    </Button>

                    <Button variant='contained' onClick={() => {navigate('/query')}}
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Consulta
                    </Button>

                    <Button variant='contained' onClick={() => {navigate('/test')}} 
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Test
                    </Button>
            </ButtonGroup>
        </div>
}

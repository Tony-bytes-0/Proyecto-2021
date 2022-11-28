import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { Grid, ButtonGroup } from '@mui/material';

export default function SideBar(props) {
//sx={{ width: '25%' }} 
    const navigate = useNavigate()

        return (<ButtonGroup
            className='SIDEBAR'
            disableElevation
            variant="contained"
            orientation="vertical"
            aria-label="Disabled elevation buttons">
                <Button variant='contained' onClick={() => {navigate('/')}}>Registro</Button>
                <Button variant='contained' onClick={() => {navigate('/query')}}>Consulta</Button>
                <Button variant='contained' onClick={() => {navigate('/test')}}>Test</Button>
        </ButtonGroup>);
}

import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';

export default function SideBar(props) {

    const navigate = useNavigate()

        return (<div className='col-1.5 verticalFlex SIDEBAR'>
            <Button variant='contained' onClick={() => {navigate('/')}}>Registro</Button>
            <Button variant='contained' onClick={() => {navigate('/query')}}>Consulta</Button>
        </div>);
}

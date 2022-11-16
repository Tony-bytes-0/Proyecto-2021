import {useNavigate} from 'react-router-dom';


export default function SideBar(props) {

    const navigate = useNavigate()

        return (<div className='col-1.5 verticalFlex SIDEBAR'>
            <button className='btn btn-primary basicBorders' onClick={() => {navigate('/')}}>Registro</button>
            <button className='btn btn-primary basicBorders' onClick={() => {navigate('/query')}}>Consulta</button>
        </div>);
}

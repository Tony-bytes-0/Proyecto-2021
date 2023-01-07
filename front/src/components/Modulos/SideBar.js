//React
import {useNavigate} from 'react-router-dom';


//MUI
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

// function LoggedData(props){
//     const navigate = useNavigate()
//     const [modal] = useState(true); const closeModal = () => navigate('/')
//     function validate(){if(props.user !== false){
//         return {"user":props.user, "status": "Conectado" } }
//         else return {"user":"a", "status":"Desconectado"}
//     }

//     var message =  validate()
    
//     if(props.user)return<div className='centrate verticalFlex'>
//         <b>{message.status}</b>
//         <b>Bienvenido: {message.user}</b>
//     </div>
//     else return <> {/* Logeadon't */}
//     <Modal open={modal} onClose={closeModal} disableScrollLock={false} ><div className='modalColor modalCentratedSmall verticalFlex centrate'>

//         Adonde tan deslogueado mi rey?
//         <Button variant='contained' onClick={() => navigate ('/')} >Pa la Playstore</Button>
//         {/* <img src = {playstore} alt='palaPlaystore' className='flexible'  */}

//     </div></Modal>
//     </>
// }


export default function SideBar() {//MAIN
    //const loggedUser = useSelector(state => state.loginController)
    const navigate = useNavigate()

        return <div className='SIDEBAR'>
            
            <ButtonGroup  
                disableElevation
                variant="contained"
                orientation="vertical"
                aria-label="Disabled elevation buttons">

                    <Button  variant='contained' onClick={() => {navigate('/users')}} 
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Registro de Personas
                    </Button>

                    <Button  variant='contained' onClick={() => {navigate('/register')}} 
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Registro de Historia Medica
                    </Button>

                    <Button variant='contained' onClick={ () => {navigate('/showAllUsers')} }
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Ver Todos los Usuarios
                    </Button>

                    <Button variant='contained' onClick={ () => {navigate('/AllergiesCrud')} }
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Gestionar Alergias 
                    </Button>
                    
                    {/* <Button variant='outlined' size='small' onClick={ () => {
                        dispatch(disconect())
                        navigate('/') //DEV
                    }}
                        sx = {{"padding":"15px","marginTop":"20px"}}>
                        Cerrar Sesion
                    </Button> */}

                
            </ButtonGroup>
        </div>
}

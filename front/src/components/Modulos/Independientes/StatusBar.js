//React
//import { useNavigate } from "react-router-dom";
//import useState from "react"
//MUI
import { Avatar } from "@mui/material"
import { deepPurple} from '@mui/material/colors';
//import {Button, Modal} from "@mui/material";
//Redux
import { useSelector } from 'react-redux';

function LoggedData(props) {
    // const navigate = useNavigate()
    const loggedUser = useSelector(state => state.loginController)
    // const [modal] = useState(true); const closeModal = () => navigate('/')
    // function validate() {
    //     if (loggedUser.usuario !== false) {
    //         return { "user": loggedUser.usuario, "status": "Conectado" }
    //     }
    //     else return { "user": "a", "status": "Desconectado" }
    // }
    //var message = validate()
    console.log(loggedUser)
    if(loggedUser.usuario !== false) return <b>usuario Logeado: {loggedUser.usuario}</b>

    else return <b>Desconectado</b>
    
    // else return <> {/* Logeadon't */}
    //     <Modal open={modal} onClose={closeModal} disableScrollLock={false} ><div className='modalColor modalCentratedSmall verticalFlex centrate'>

    //         Adonde tan deslogueado mi rey?
    //         <Button variant='contained' onClick={() => navigate('/')} >Pa la Playstore</Button>
    //         {/* <img src = {playstore} alt='palaPlaystore' className='flexible'  */}

    //     </div></Modal>
    // </>
}

export default function StatusBar(){//Main
    
    return <div className="STATUSBAR right">
        <div >
            <LoggedData  />
            <Avatar sx={{ bgcolor: deepPurple[500] }}></Avatar>
        </div>
    </div>
}
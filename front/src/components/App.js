//modulos
import Register from './Modulos/Register';
import Query from './Modulos/Query'
import { Test } from './Modulos/Independientes/Test';
import SideBar from './Modulos/SideBar';
//React-Router
import {BrowserRouter, Route, Routes} from 'react-router-dom'
//import MedicalRecord from './Modulos/MedicalRecord';
//MUI Components
import { Grid } from '@mui/material';


export default function Application(){

    return<>
        <BrowserRouter>
            <Routes>
                <Route path ='/' element = {<> {/*Ruta de inicio*/}
                    
                    <div id='RegisterMainframe' className='col'>
                        <Register />
                        
                    </div>
                </>} />

                <Route path='/query' element = {<> 
                    <SideBar />
                    <Query />
                </>} />

                <Route path='/test' element ={<>
                    <Grid container>
                        <Grid item xs={2} > <SideBar /> </Grid> 
                        <Grid item xs={10}> <Test /> </Grid>
                    </Grid>
                    
                     
                </> } />
                
                
            </Routes>
        </BrowserRouter>
    </>
}

//esto era lo viejo, en forma de clase
// export default class App extends Component{state = {active:"Registro"};//active es accesible desde onClickFunction
    
//     render(){
//         let activeContent = 'componente por defecto :)';/*componente a renderizar depende de this.state.active*/
        
//         if(this.state.active === "Registro")activeContent = <Register renderMedicalRecord={true} />
//         else if(this.state.active === "Consulta")activeContent = <Query />
        
//         return<>
//         <div className='verticalFlex'>
//             <h1>INFORMACION DE REDUX</h1>
//             <div>
//                 sexoooote
//             </div>
//         </div>
        
//             <SideBar options={['Registro', 'Consulta']} 
//                 onClickFunction={async(param) => {/*cambiar this.state.active de <App>*/
//                     await this.setState({active:param});
//                 } 
//             }/>
//             {activeContent}{/* contenido principal, depende de this.state.active de <App> */}     
//     </>}
// }
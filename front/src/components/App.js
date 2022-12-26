//modulos
import { Test } from './Modulos/Test';
import SideBar from './Modulos/SideBar';
import UserData from './Modulos/testRegisterModules/UserData';
import ShowAllUsers from  './Modulos/ShowAllUsers';
import AllergiesCrud from './Modulos/AllergiesCrud';

//React-Router
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//MUI Components
import { Grid } from '@mui/material';




export default function Application(){

    return<>
        <BrowserRouter>
            <Routes>


                <Route path='/' element ={<>
                    <Grid container>
                        <Grid item xs={2} > <SideBar /> </Grid> 
                        <Grid item xs={10}> <Test /> </Grid>
                    </Grid>                     
                </> } />

                <Route path='/users' element ={<>
                    <Grid container>
                        <Grid item xs={2} > <SideBar /> </Grid> 
                        <Grid item xs={10}> <UserData togglePost={true} /> </Grid>
                    </Grid>                     
                </> } />

                <Route path='/showAllUsers' element ={<>
                    <Grid container>
                        <Grid item xs={2} > <SideBar /> </Grid> 
                        <Grid item xs={10}> <ShowAllUsers/> </Grid>
                    </Grid>                     
                </> } /> 

                <Route path='/AllergiesCrud' element ={<>
                    <Grid container>
                        <Grid item xs={2} > <SideBar /> </Grid> 
                        <Grid item xs={10}> <AllergiesCrud/> </Grid>
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
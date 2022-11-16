import SideBar from './Modulos/SideBar';

import Register from './Modulos/Register';
import Query from './Modulos/Query'
//React-Router
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// 11 azules coste 16 / 8 rojos - coste 13
//dobles
// 17  /  17 rojos

//a sacar, algo azul, un invocador rojo, para meter tierra roja

export default function Application(){

    return<>
        <BrowserRouter>
            <Routes>
                <Route path ='/' element = {<> {/*Ruta de inicio*/}
                    <SideBar />
                    <Register renderMedicalRecord = {true}/>
                </>} />

                <Route path='/query' element = {<> 
                    <SideBar />
                    <Query />
                </>} />
                
                
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
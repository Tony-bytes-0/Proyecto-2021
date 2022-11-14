import SideBar from './Modulos/SideBar';

import Register from './Modulos/Register';
// import Query from './Modulos/Query';
//redux
//import { useSelector } from 'react-redux';

export default function Application(){

    return<>
        <SideBar options={['Registro', 'Consulta']}/>
        <Register renderMedicalRecord = {true} />    
    </>
};

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
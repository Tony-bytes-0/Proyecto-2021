import {Component} from 'react';//https://youtube.com/shorts/xE4b844LDEQ?feature=share
import SideBar from './Modulos/SideBar';

import Register from './Modulos/Register';
import Query from './Modulos/Query';

export default class App extends Component{state = {active:"Registro"};//active es accesible desde onClickFunction
showStates = () => {console.log('active: ', this.state.active)};//depuracion
    render(){
        let activeContent = 'componente por defecto :)';/*componente a renderizar depende de this.state.active*/
        
        if(this.state.active === "Registro")activeContent = <Register renderMedicalRecord={true} />
        else if(this.state.active === "Consulta")activeContent = <Query />
        
        return<>
            <SideBar options={['Registro', 'Consulta']} 
                onClickFunction={async(param) => {/*cambiar this.state.active de <App>*/
                    await this.setState({active:param});
                } 
            }/>
            {activeContent}{/* contenido principal, depende de this.state.active de <App> */}
        
        
        
    </>}
}

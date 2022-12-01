import React, { Component} from 'react';//{}

import pencil from '../QueryModules/pencil.png'
import query from '../QueryModules/query.png'
import trash from '../QueryModules/trashcan.png'
//se importan las imagenes para poder enviarlas al componente FieldMap ya renderizadas
//import { viewHide } from './sameMethods';

import Register from '../Register';

//recibe una lista con objetos
export default class ObjectRow extends Component {

    render() {
        let tupples = this.props.objects.map((e) => Object.values(e));//lista de objetos => lista con sus values

        return (<div className='verticalFlex'>
            <div className='col' style={{"display":"flex"}}>{/* fila con valores estaticos*/}
                {this.props.format.map((e)=>
                    <Slice  values={e} key={e + 'idx'}  />
                )}
            </div>

            {tupples.map((list) => //aqui esta la magia
                <MultiSlices values={list} key={list[0] + ' id'} listId = {list[0]} />
            )}

        </div>);
    }
}
 
export function Slice(props){//genera un cuadradito con info
    return<span className='square col-1 fitContent'>{props.values}</span>}

export function MultiSlices(props){//genera multiples <Slice> a partir de una lista
        return<div className='col' style={{"display":"flex"}}>{/*fragmento de fila dinamica!*/}
            {props.values.map((value) => <Slice values={value} key={value + 'ids'}/>)}
            <EditButtons id ={ props.listId } /> {/* Aqui tengo el ID del registro en la  BBDD */}
        </div>        
}
class EditButtons extends Component{//botonera
    state = {modalOpen:false}

    editModalScreen = function(){return(
        <div id='Modal Screen' className='modalScreen rounded'>
            <button className='btn btn-danger' style={{"marginLeft":"96.5%"}} onClick={() => {this.toggleModal()}}>X</button>
            <Register />
        </div>
    )}

    toggleModal = function(){
        if(this.state.modalOpen){this.setState({modalOpen:false})}
        else{this.setState({modalOpen:true})}
    }
    render(){ 

        let modalScreen = ' ';
        if (this.state.modalOpen){modalScreen = this.editModalScreen()}
        else {modalScreen = ' '}

        return<>{modalScreen}{/*Aqui muestro la modal cuando se abra*/}
            <div className = 'col align-self-end'>
                <button className='btn btn-primary' onClick={() => { this.toggleModal() }}>{}<img className='micro' src={pencil} alt='icon' /></button>
                <button className='btn btn-primary'><img className='micro' src={query} alt='icon' /></button>
                <button className='btn btn-primary'><img className='micro' src={trash} alt='icon' /></button>
            </div>
        </>
    }
};

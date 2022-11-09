import React, { Component } from 'react';//if(document.getElementById('Checkbox').checked) {console.log(e , ' checkbox esta seleccionado');



export default class Symtomps extends Component {
    delete = function(id, symptom ){
        //document.getElementById(id).remove() borrar nodo
        this.props.onClickFunction(id, symptom)//borrar del estado por ende, del renderizado
    }
    autoUnCheck = function(id, id2){//desmarca las opciones no seleccionadas
        document.getElementById(id).checked = false
        document.getElementById(id2).checked = false
    }

    render() { 
        return (<div id={this.props.id} className='row symtomsContainer SIDEBAR container-fluid autoBorders' >
                <label className='col-1'>Sintoma:</label> 
                <label className='col'><b>{this.props.symptom}</b></label>

                <label className='col-1'>Gravedad: </label>
                <label className='col-1'><b>Leve</b></label>
                <input className='col-1' type='checkbox' value='1' id={this.props.id+'leveCheckbox'} 
                    onClick={() => {this.autoUnCheck(this.props.id+'moderadoCheckbox', this.props.id+'severoCheckbox')}}>
                
                </input>

                <label className='col-1'><b>Moderado</b></label>
                <input className='col-1' type='checkbox' value='2' id={this.props.id+'moderadoCheckbox'}
                    onClick={() => {this.autoUnCheck(this.props.id+'leveCheckbox', this.props.id+'severoCheckbox')}}>
                </input>

                <label className='col-1'><b>Severo</b></label>
                <input className='col-1' type='checkbox' value='3' id={this.props.id+'severoCheckbox'}
                    onClick={() => {this.autoUnCheck(this.props.id+'leveCheckbox' , this.props.id+'moderadoCheckbox' )}}>
                </input>
            
            <button className='col-1 btn btn-danger fitContent' style={{"fontSize":"2vh"}} 
                onClick={() =>{this.delete(this.props.id, this.props.symptom)}}
            >Eliminar</button>
        </div>);
    }
}
 

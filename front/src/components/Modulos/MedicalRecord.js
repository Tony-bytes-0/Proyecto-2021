import React, { Component } from 'react';
import FieldMap from './Independientes/FieldMap';
import SimplePicker from './Independientes/SimplePicker';
import Section from './Independientes/Section';

import Symtomps from './medicalRecordModules/Symtomps'

export default class MedicalRecord extends Component {
    state = {globalId:0,
            symtompsList:['Fiebre','Malestar','Etc','Dolor de Cabeza','Nauseas','Mareos','Tos','Tos Seca','Insomnio'],
            activeSymtomps:[],

            temperature:['Celcius', 'Farenheit', 'Kelvin'], 
            reasons:['Consulta','Tratamiento','Emergencia'],
    }
    addSymptom = function(add){
        let list = this.state.activeSymtomps
        let newObj = {id:this.idManager(), x:add}

        list.push(newObj)
        this.setState({activeSymtomps:list})

        let toDelete = function(current){
            return current !== document.getElementById('Sintomas: id').value
        }
        let newSymptomList = this.state.symtompsList.filter(toDelete)
        console.log('lista editada: ',newSymptomList)
        this.setState({symtompsList:newSymptomList})
        console.log('este es el state actual: ', this.state.symtompsList)
        //alert(JSON.stringify(this.state.activeSymtomps, null, 4))// pa ver el estado

        console.log(JSON.stringify(list))//depuracion!!!
    }
    idManager = function(){
        this.setState({globalId:this.state.globalId + 1})
        return this.state.globalId
    }
    getSelectorValue = function(){let id = 'Sintomas: id'
        return document.getElementById(id).value
    }
    getInvisibleValue = function (id, symptom){
        document.getElementById('programaticLabel').value = id
        document.getElementById('programaticLabel2').value = symptom
        document.getElementById('programaticButton').click()
    }
    deleteActiveSymptom = function(){
        //al borrar el elemento, se elimina del loas activos del estado
        let newState = function(obj){
            let toDelete = document.getElementById('programaticLabel').value
            return obj.id !== parseInt( toDelete, 10)
        }
        let newList = this.state.activeSymtomps.filter(newState)        
        this.setState({activeSymtomps:newList})
        //reestablecer valor en la lista del selector, para poder volver a seleccionarlo
        let restore = this.state.symtompsList
        restore.push(document.getElementById('programaticLabel2').value)
        this.setState({symtompsList:restore})
    }
     
    render() { 
        return (<>
        <input id='programaticLabel' className='invisible'></input>
        <input id='programaticLabel2' className='invisible'></input>
        <button id='programaticButton' className='invisible' onClick={() => {
            this.deleteActiveSymptom()
        }}></button>

            <div id='Medical Record 1st' className='row container-fluid smallMargin'>
                    {['Altura: ','Peso: ', 'Presion Arterial: '].map( e => 
                        <FieldMap type={'input'} fields={e} key={e + 'id'}/>
                     )}
                     <div className='col contentFit'>
                        <FieldMap type={'input'} fields={"Temperatura: "}/>
                        <SimplePicker label={"Grados: "} list={this.state.temperature} />
                     </div>
            </div>

            <div id='Medical Record 2st' className='row container-fluid smallMargin'>
                <SimplePicker label={"Motivo Visita: "} list={this.state.reasons} />
                <div className="col">           
                    <label className="col"><b>Fecha de Consulta: '</b></label>
                    <input className="simpleInput" type="date" ></input>
                </div> 
            </div>

            <Section tittle={'Sintomas'} classes={'azul-Oscuro smallMargin'}/>

            <div id='Medical Record 3st' className='row container-fluid smallMargin'>
                <SimplePicker label={'Sintomas: '} list={this.state.symtompsList} />
                <button className='btn btn-success col-2' onClick={() => {
                    this.addSymptom(this.getSelectorValue())}
                }>Añadir</button>
            </div>
            {this.state.activeSymtomps.map((e) => 
                <Symtomps symptom={e.x} key={e.id} id={e.id} onClickFunction={this.getInvisibleValue}/> 
            )}
        </>);
    }
}
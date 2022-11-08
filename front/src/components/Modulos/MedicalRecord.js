import React, { Component } from 'react';
import FieldMap from './Independientes/FieldMap';
import SimplePicker from './Independientes/SimplePicker';
import Section from './Independientes/Section';

import Symtomps from './medicalRecordModules/Symtomps'

let staticValuesList = {
    temperature:['Celcius', 'Farenheit', 'Kelvin'], reasons:['Consulta','Tratamiento','Emergencia'],
    symtompsList:['Fiebre','Malestar','Etc']
}

export default class MedicalRecord extends Component {
    addSymptom = function(add){
        let list = this.state.symptomsList
        let newObj = {id:this.idManager(), x:add}

        list.push(newObj)
        this.setState({symptomsList:list})
        //alert(JSON.stringify(this.state.symptomsList, null, 4)) pa ver el estado
    }
    idManager = function(){
        this.setState({globalId:this.state.globalId + 1})
        return this.state.globalId
    }
    getValue = function(){let id = 'Sintomas: id'
        return document.getElementById(id).value
    }
    state = {globalId:0,
        symptomsList:[]
    }
     
    render() { 
        return (<>
            <div id='Medical Record 1st' className='row container-fluid smallMargin'>
                    {['Altura: ','Peso: ', 'Presion Arterial: '].map( e => 
                        <FieldMap type={'input'} fields={e} key={e + 'id'}/>
                     )}
                     <div className='col contentFit'>
                        <FieldMap type={'input'} fields={"Temperatura: "}/>
                        <SimplePicker label={"Grados: "} list={staticValuesList.temperature} />
                     </div>
            </div>

            <div id='Medical Record 2st' className='row container-fluid smallMargin'>
                <SimplePicker label={"Motivo Visita: "} list={staticValuesList.reasons} />
                <div className="col">           
                    <label className="col"><b>Fecha de Consulta: '</b></label>
                    <input className="simpleInput" type="date" ></input>
                </div> 
            </div>

            <Section tittle={'Sintomas'} classes={'azul-Oscuro smallMargin'}/>

            <div id='Medical Record 3st' className='row container-fluid smallMargin'>
                <SimplePicker label={'Sintomas: '} list={staticValuesList.symtompsList} />
                <button className='btn btn-success col-2' onClick={() => {
                    this.addSymptom(this.getValue())}
                }>Añadir</button>
            </div>
            {this.state.symptomsList.map((e) => <Symtomps symptom={e.x} key={e.id} id={e.id}/>)}
        </>);
    }
}
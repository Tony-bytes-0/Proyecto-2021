import { useState } from 'react';
import FieldMap from './Independientes/FieldMap';
import SimplePicker from './Independientes/SimplePicker';
import Section from './Independientes/Section';
import Symtomps from './medicalRecordModules/Symtomps'

//redux
import { useSelector } from 'react-redux';


export default function MedicalRecord (props)  {
    const symptoms = useSelector(state => state.activeSymptoms)

    let symtompsList = ['Fiebre','Malestar','Etc','Dolor de Cabeza','Nauseas','Mareos','Tos','Tos Seca','Insomnio']
    let temperature = ['Celcius', 'Farenheit', 'Kelvin']
    let reasons = ['Consulta','Tratamiento','Emergencia']

        return <>
            <div id='Medical Record 1st' className='row container-fluid smallMargin'>
                    {['Altura: ','Peso: ', 'Presion Arterial: '].map( e => 
                        <FieldMap type={'input'} fields={e} key={e + 'id'}/>
                     )}
                     <div className='col contentFit'>
                        <FieldMap type={'input'} fields={"Temperatura: "}/>
                        <SimplePicker label={"Grados: "} list={temperature} />
                     </div>
            </div>

            <div id='Medical Record 2st' className='row container-fluid smallMargin'>
                <SimplePicker label={"Motivo Visita: "} list={reasons} />
                <div className="col">           
                    <label className="col"><b>Fecha de Consulta: '</b></label>
                    <input className="simpleInput" type="date" ></input>
                </div> 
            </div>

            <Section tittle={'Sintomas'} classes={'azul-Oscuro smallMargin'}/>

            <div id='Medical Record 3st' className='row container-fluid smallMargin'>
                <SimplePicker label={'Sintomas: '} list={symtompsList} />
                <button className='btn btn-success col-2' >Añadir</button>
            </div>

            {symptoms.map((e) => <Symtomps key={e.id} id={e.id} symptom={e.body} 
                leve={e.leve} moderado={e.moderado} severo={e.severo} />)}
            
            
            
        </>
}
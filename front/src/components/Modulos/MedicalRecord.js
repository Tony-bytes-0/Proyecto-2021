//React
import FieldMap from './Independientes/FieldMap';
import SimplePicker from './Independientes/SimplePicker';
import Section from './Independientes/Section';
import Symtomps from './medicalRecordModules/Symtomps'

//redux
import { useDispatch, useSelector } from 'react-redux';
import { addSymptom } from '../../indexModles/features/Symptoms/ActiveSymptoms';
import { removeSymptom } from '../../indexModles/features/Symptoms/symptomList';//para mostrar la lista de sintomas



export default function MedicalRecord (props)  {
    var listIsEmpty = false
    //redux
    const dispatch = useDispatch()//para usar los metodos declarados del store
    //estados - SELECTOR DE SINTOMA
    const activeSymptoms = useSelector(state => state.activeSymptoms)//sintomas activos por defecto = [] 
    const symptomList = useSelector(state => state.symptomList)//valor del selector de sintomas
    //Validaciones de Selector mediante estado de la lista

    let checkListForEmptyValues = function(target){ return target === '' ? true : false } // if(target === ''){ return true }; else{ return false } equivalente!

    let temperature = ['Celcius', 'Farenheit', 'Kelvin']
    let reasons = ['Consulta','Tratamiento','Emergencia']

        return <>
            <div id='Medical Record 1st' className='row container-fluid smallMargin'>
                    {['Altura: ','Peso: ', 'Presion Arterial: '].map( e => 
                        <FieldMap type={'input'} fields={e} key={e + 'id'} dataType = {'number'}/>
                     )}
                     <div className='col contentFit'>
                        <FieldMap type={'input'} fields={"Temperatura: "} dataType = {'number'}/>
                        <SimplePicker label={"Grados: "} list={temperature} dataType = {'number'} />
                     </div>
            </div>

            <div id='Medical Record 2st' className='row container-fluid smallMargin'>
                <SimplePicker label={"Motivo Visita: "} list={reasons} />
                <div className="col">           
                    <label className="col"><b>Fecha de Consulta: </b></label>
                    <input className="simpleInput" type="date" ></input>
                </div> 
            </div>

            <Section tittle={'Sintomas'} classes={'azul-Oscuro smallMargin'}/>

            <div id='Medical Record 3st' className='row container-fluid smallMargin'>
                <SimplePicker label={'Sintomas: '} list={symptomList} />
                <button id='addBtn' className='btn btn-success col-2' 
                onClick={() => {
                    let target = document.getElementById('Sintomas: id').value;
                    //si tratas de añadir un elemento vacio, desactiva el boton (se activa al eliminar un elemento de la lista)
                    if (checkListForEmptyValues(target)){ document.getElementById('addBtn').disabled = true }

                    else{
                        dispatch(addSymptom(target))//añadir el valor en el selector
                        dispatch(removeSymptom(target))//quitar el mismo valor de la lista de seleccionables
                    }
                }} disabled={listIsEmpty}>Añadir</button>
            </div>

            {activeSymptoms.map((e) => <Symtomps key={e.id} id={e.id} symptom={e.body}  />)}
            
            
            
        </>
}
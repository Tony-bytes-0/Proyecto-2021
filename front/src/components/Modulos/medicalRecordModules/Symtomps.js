//redux
import { removeSymptom } from '../../../indexModles/features/Symptoms/ActiveSymptoms';
import { useDispatch } from 'react-redux';

export default function Symtomps(props){
    //redux
    const dispatch = useDispatch()
    
    let autoUnCheck = function(id, id2){//desmarca las opciones no seleccionadas
        document.getElementById(id).checked = false
        document.getElementById(id2).checked = false
    }
    let deleteSymptom = function(deleteId){
        console.log('accediendo a borrar el registro con id: ', deleteId)
    }
        return (<div id={props.id} className='row symtomsContainer SIDEBAR container-fluid autoBorders' >
                
                {/* <button onClick={() => {
                    markCheckboxes(//chequear si las casillas deberian marcarse
                    [props.id + 'moderadoCheckbox', props.id + 'severoCheckbox', props.id + 'leveCheckbox'],
                    [props.leve, props.moderado, props.severo]
                )
                }}> </button> */}

                <label className='col-1'>Sintoma:</label> 
                <label className='col'><b>{props.symptom}</b></label>

                <label className='col-1'>Gravedad: </label>
                <label className='col-1'><b>Leve</b></label>
                <input className='col-1' type='checkbox' value='1' id={props.id+'leveCheckbox'} 
                    onClick={() => {autoUnCheck(props.id+'moderadoCheckbox', props.id+'severoCheckbox')}} >
                
                </input>

                <label className='col-1'><b>Moderado</b></label>
                <input className='col-1' type='checkbox' value='2' id={props.id+'moderadoCheckbox'}
                    onClick={() => {autoUnCheck(props.id+'leveCheckbox', props.id+'severoCheckbox')}}>
                </input>

                <label className='col-1'><b>Severo</b></label>
                <input className='col-1' type='checkbox' value='3' id={props.id+'severoCheckbox'}
                    onClick={() => {autoUnCheck(props.id+'leveCheckbox' , props.id+'moderadoCheckbox' )}}>
                </input>
            
            <button className='col-1 btn btn-danger fitContent' style={{"fontSize":"2vh"}} 
            onClick={() => {dispatch(removeSymptom(props.id))}}>Eliminar</button>
        </div>);
}
 

export default function Symtomps(props){

    let autoUnCheck = function(id, id2){//desmarca las opciones no seleccionadas
        document.getElementById(id).checked = false
        document.getElementById(id2).checked = false
    }
    

        return (<div id={props.id} className='row symtomsContainer SIDEBAR container-fluid autoBorders' >
                <label className='col-1'>Sintoma:</label> 
                <label className='col'><b>{props.symptom}</b></label>

                <label className='col-1'>Gravedad: </label>
                <label className='col-1'><b>Leve</b></label>
                <input className='col-1' type='checkbox' value='1' id={props.id+'leveCheckbox'} 
                    onClick={() => {autoUnCheck(props.id+'moderadoCheckbox', props.id+'severoCheckbox')}}>
                
                </input>

                <label className='col-1'><b>Moderado</b></label>
                <input className='col-1' type='checkbox' value='2' id={props.id+'moderadoCheckbox'}
                    onClick={() => {autoUnCheck(props.id+'leveCheckbox', props.id+'severoCheckbox')}}>
                </input>

                <label className='col-1'><b>Severo</b></label>
                <input className='col-1' type='checkbox' value='3' id={props.id+'severoCheckbox'}
                    onClick={() => {autoUnCheck(props.id+'leveCheckbox' , props.id+'moderadoCheckbox' )}}>
                </input>
            
            <button className='col-1 btn btn-danger fitContent' style={{"fontSize":"2vh"}} >Eliminar</button>
        </div>);
}
 

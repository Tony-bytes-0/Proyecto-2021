import FieldMap from "./FieldMap";

export default function SimplePicker(props){ 
        return (<div 
                    className='col simpleInput'
                    style={props.styles} >
                        <label className='simpleInput'><h5><b>{props.label}</b></h5></label>
                    <select id={props.label + 'id'} 
                        className='simpleInput'> 
                        {props.list.map(e => <FieldMap type={'option'} fields={e} key={e + 'id'}/>)}
                    </select> 
                    
                 </div>);
}

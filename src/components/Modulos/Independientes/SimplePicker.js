import FieldMap from "./FieldMap";

export default function SimplePicker(props){ 
        return (<div 
                    className={'col simpleInput '+ props.className}
                    style={props.styles} >
                        <label className='simpleInput'><h5><b>{props.label}</b></h5></label>
                    <select id={props.label} 
                        className='simpleInput'> 
                        {props.list.map(e => <FieldMap type={'option'} fields={e} key={e + 'id'}/>)}
                    </select> 
                    
                 </div>);
}

import { useState } from "react"

function CheckBox(props){
    return<div className="col-12">
        <label className="col">{props.label}</label>
        <input className="col-1" type = 'checkbox' id={props.label}></input>
    </div>
}

export default function MultiCheckbox(props){
    const [CheckState, changueState] = useState(false)

    if(CheckState){
        return <div className="col">
            <label>{props.label}</label>
            <input id={props.label} type = 'checkbox' 
                onClick={() => {changueState(false)}} >
            </input>

        <div id = 'AllergiesContainer' className="row">
            {props.values.map((e) => <CheckBox label = {e} key={e+' key'} />)}
        </div>

        </div>
    }
    else{
        return (<div className="col">
            <label className="col">{props.label}</label>
            <input className="col-1" id={props.label} type = 'checkbox' 
                onClick={() => {changueState(true)}} >
            </input>
        </div>)
    }
    
}
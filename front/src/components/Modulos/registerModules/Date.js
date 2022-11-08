import React, { Component } from 'react';

export default class Date extends Component {
    state = {  } 
    render() { 
        return (<div className='centrate verticalFlex col'>
            <label style={{"margin":"10px"}}><b>Fecha de Nacimiento:</b></label>
            <input type="date" min="1920-04-01" max="2022-08-15" ></input>
        </div>);
    }
}
 

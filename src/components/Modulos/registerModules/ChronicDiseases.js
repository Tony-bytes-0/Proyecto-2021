import React, { Component } from 'react';
import SimplePicker from '../Independientes/SimplePicker';


export default class ChronicDiseases extends Component {
    state = {  } 
    render() {return(
        <div className='container VerticalFlex centrate'  >
            <div id='vertical_DIV' className='container horizontalFlex centrate' >
                <SimplePicker label={'Enfermedades Cronicas'} 
                    list={['enfermedad_1','enfermedad_2','enfermedad_3','enfermedad_4']} id={'disease'}  />
                <div className='flex' >
                    <b><h5>Enfermedades padecidas</h5></b>
                </div>
            </div>
            <button className='centrate btn btn-primary basicBorders'>Agregar</button>
        </div>
    )}
}
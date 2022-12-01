import React, { Component } from 'react';
import img from './blue-Lobster.jpg'

export default class InputFile extends Component {state={img:img}
    render() {
        return(<div className='verticalFlex centrate'>
            <img alt='img' src={this.state.img} width='100px' height='100px' className='rounded-circle'/>
            <input type="file" className='col'/>
            <label className='col'><b>Inserte una Foto</b></label>
        </div>
    )}
}
 

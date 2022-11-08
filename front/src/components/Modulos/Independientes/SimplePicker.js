import React, { Component } from 'react';
import FieldMap from "./FieldMap";

export default class SimplePicker extends Component { 
    render() { 
        return (<div 
                    className='col simpleInput'
                    style={this.props.styles} >
                        <label className='simpleInput'><h5><b>{this.props.label}</b></h5></label>
                    <select id={this.props.label + 'id'} 
                        className='simpleInput'> 
                        {this.props.list.map(e => <FieldMap type={'option'} fields={e} key={e + 'id'}/>)}
                    </select> 
                    
                 </div>);
    }
}

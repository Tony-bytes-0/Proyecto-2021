import React, { Component } from 'react';

export default class StatusBar extends Component { 
    render() {
        return (<span className='centrate STATUSBAR'><b><h1>{this.props.status}</h1></b></span>);
    }
}
 

import React, { Component } from 'react';

export default class Section extends Component {
    render() { 
        return (<div className={this.props.classes}>
            <b className='centrate' style={this.props.styles}>
                <h2>{this.props.tittle}</h2>
            </b>
        </div>);
    }
}
 
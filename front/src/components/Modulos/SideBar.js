import React, { Component } from 'react';
import FieldMap from './Independientes/FieldMap';


export default class SideBar extends Component {

    render() { 
        return (<div className='col-1.5 verticalFlex SIDEBAR'>
            {
                this.props.options.map((e) => <FieldMap 
                    type={'button'} fields={e} 
                    key={e + 'id'} 
                    id={e}
                    styles={{"margin":"7px","padding":"15px"}} 
                onClickFunction={this.props.onClickFunction}
                />)
            }
        </div>);
    }
}

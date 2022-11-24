import React, { Component } from 'react';

export default class FieldMap extends Component {
state = { buttonId:this.props.id, //asignar id dinamicos a los botones generados
    buttonDefaultClasses:'btn btn-primary '
}
    render()
    {if(this.props.type === 'input'){
        return(<>
            <div className = 'col'>{/*estilos estaticos + estilos ingresados*/}
                <label><b>{this.props.fields} :</b></label>
                <input
                    id={this.props.fields}
                    className = 'simpleInput'
                    type={this.props.dataType}
                    placeholder={this.props.fields} 
                    style={this.props.styles}/>
            </div>
        </>)

    }else if(this.props.type === 'option'){
        return( <option 
                value={this.props.fields}
                className='col' 
                id={this.props.id}>
                {this.props.fields}{/*aqui va cada campo de la lista*/}
            </option> )

    }else if(this.props.type === 'button'){
        return( <button 
            className={this.state.buttonDefaultClasses + this.props.classes}
            style={this.props.styles} 
            id={this.props.id}>
                {this.props.fields}
                {this.props.img}
            </button>)
    }
}//render  close
}//class close
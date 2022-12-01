import React, { Component } from 'react';
import Section from './Independientes/Section';
import FieldMap from './Independientes/FieldMap';
import SimplePicker from './Independientes/SimplePicker';
import ObjectRow from './Independientes/ObjectRow';


export default class Query extends Component {
    state = {format:["Id","Cedula","Nombre","Apellido","Nacimiento","Telefono","Genero","Tipo de Sangre"],     
        objectDemo:{
            "id":"0001",
            "dni":"27080301",
            "name":"Monica",
            "lastname":"Perez",
            "date":"01-10-1999",
            "tlf":"04248754443",
            "gender":"Female",
            "bloodtype":"A+"    
        },
        Jhon:{
            "id":"0005",
            "dni":"31104308",
            "name":"Jhon",
            "lastname":"pepe",
            "date":"30-11-1964",
            "tlf":"1273981723",
            "gender":"Masculino",
            "bloodtype":"A+"    
        }      
    } 
    render() { 
        return (<div id='Query-primera-fila' className='col container-fluid focusContent'>

            
            <div className='row col-12'>
                <SimplePicker label={"Filtro:"} list={['Cedula','Nombre','Apellido']} />
                <FieldMap type={'input'} fields={'Busqueda'} />
                <button className=' col-2 btn btn-primary' onClick={() =>{alert('BUSCANDO!')}}>
                    Buscar
                </button>
                <Section tittle={''} classes={'azul- centrate smallMargin'}/>
                <Section tittle={'Resultados'} classes={'azul-Oscuro centrate smallMargin'}/>
                

                <ObjectRow objects={[this.state.objectDemo,this.state.Jhon]}
                format={this.state.format} />
            </div>

        </div>);
    }
}

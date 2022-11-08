import React, { Component } from 'react';
import FieldMap from '../Independientes/FieldMap';
//index de municipios
//andresEloy-0, Andres-1, Arismendi-2, Benitez-3, 
export default class Direction extends Component {
    state = {empty:['--Seleccione--'],
        municipios:['Andrés Eloy Blanco', 'Andrés Mata', 'Arismendi', 'Benítez', 'Bermúdez', 'Bolívar', 'Cajigal' ,
        'Cruz Salmerón Acosta', 'Libertador', 'Mariño', 'Mejía', 'Montes', 'Ribero', 'Sucre', 'Valdez'],

        parroquias:[//aqui van parroquias de cada municipio
            'Mariño', 'Rómulo Gallegos',// andres eloy
            'San José de Areocuar','Tavera Acosta',//andres mata
             'Río Caribe','Antonio José de Sucre','El Morro de Puerto Santo','Puerto Santo','San Juan de las Galdonas',//arismendi
            'El Pilar','El Rincón','General Francisco Antonio Vázquez','Guaraúnos','Tunapuicito','Unión',//benitez
             'Santa Catalina','Santa Rosa','Santa Teresa','Bolívar','Maracapana',//bermudez
            'Mariguitar',//bolivar
             'Libertad','El Paujil','Yaguaraparo',//cajigal 
             'Araya','Chacopata','Manicuare',//curz salmeron acosta 
            'Tunapuy', 'Campo Elias',//libertador 
             'Irapa','Campo Claro','Marabal','San Antonio de Irapa','Soro',//mariño
            'San Antonio del Golfo',//mejia 
             'Cumanacoa','Arenas','Aricagua','Cocollar','San Fernando','San Lorenzo',//montes 
             'Cariaco','Catuaro','Rendón','Santa Cruz','Santa María',//ribero 
            'Altagracia', 'Santa Inés', 'Valentín Valiente ', 'Ayacucho ', 'San Juan', 'Raúl Leoni', 'Gran Mariscal',// sucre
             'Cristóbal Colón','Bideau','Punta de Piedras','Güiria',//valdez 
        ]
        ,
        sectores:['El Salao', 'Cantarrana', 'El peñon']
            
    }
    render() { 
        return (<div className='row container-fluid'>
            <div style={{"margin":"auto"}} className='col'>
                <label ><h3><b>Municipio:</b></h3></label>
                <select id='municipio' className='container basicBorders'>
                        {this.state.municipios.map( e => 
                                <FieldMap type={'option'} fields={e} key={e + 'idMunicipio'}/>
                        )}
                </select>
            </div>

            <div style={{"margin":"auto"}} className='col'>
                <label ><h3><b>Parroquia: </b></h3></label>
                <select id='parroquia' className='container basicBorders'>
                    {this.state.parroquias.map( e => 
                        <FieldMap type={'option'} fields={e} key={e + 'idParroquia'} id={e + 'idParroquia'}/>
                    )}
                </select>
            </div>

            <div style={{"margin":"auto"}} className='col'>
                <label ><h3><b>Sector: </b></h3></label>
                <select id='Sector' className='container basicBorders' >
                    {this.state.sectores.map( e => 
                        <FieldMap type={'option'} fields={e} key={e + 'idParroquia'} id={e + 'idParroquia'}/>
                    )}
                </select>
            </div> 
        </div>);
    }
}
 

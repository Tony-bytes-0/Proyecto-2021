import { useState } from 'react';

import Section from './Independientes/Section';
import FieldMap from './Independientes/FieldMap';
import Direction from './registerModules/Direction';
import Date from './registerModules/Date';
import SimplePicker from './Independientes/SimplePicker';
import InputFile from './Independientes/InputFile';
import MultiCheckbox from './Independientes/MultiCheckbox';
import { RegisterQueryGrid } from './registerModules/RegisterQueryGrid';
//axios
//import axios from 'axios';
import { genders, allergies, cronicDiseases, discapacities, bloodTypes, registerTargetIds } from './Independientes/staticValuesList';//listas de datos estaticos
import { getUserValues } from './Independientes/globalMethods';

function Register () {
    const [renderRegister, toggleRegister] = useState(false)//para mostrar el registrar o buscar personas
    const [queryUsers] = useState([//arrays con datos de prueba, simula usuarios encontrados
        ['27080311','tony','Gonzalez','masculino','19-11-1999','O-'],
        ['22333555','pepe','ramirez','masculino','01-11-1999','A']
    ])
    if(renderRegister)
        return <>
                <Section tittle={'Informacion Personal'} classes={'azul-Oscuro smallMargin'}/>
                <InputFile classes={"centrate"} />
                
                <div id='1st Row' className='row container-fluid'>
                    <FieldMap type={'input'} fields={'Cedula'} key={'Cedula'} dataType = {'number'} />
                    {['Nombre','Apellido'].map( e => 
                        <FieldMap type={'input'} fields={e} key={e + 'id'}/>
                     )}
                     <SimplePicker label={"Genero"} list={genders} />
                </div>


                <div id='2d Row' className='row container-fluid'>
                    {['Telefono','Telefono de Emergencia'].map( e =>         <FieldMap type={'input'} fields={e} key={e + 'id'}/>      )}
                    <Date/>
                    <SimplePicker label={'Tipo de Sangre'} list={bloodTypes} className={'col-2'} />
                </div>

                <Section tittle={'Relacion con el ambulatorio'} classes={'azul-Oscuro smallMargin'} />
                <div id='3rd Row' className='row container-fluid'>
                    <SimplePicker label={"Relacion con el ambulatorio"} list={['Paciente','Medico','Enfermera']} />
                </div>

                <Section tittle={'Caracteristicas'} classes={'azul-Oscuro smallMargin'} />{/*Separador*/}
                
                <div id='Cuarta Fila' className='row container-fluid'>
                    {/* <SimplePicker label={'Alergias'} list={allergies} /> asi era antes xd*/}
                    <MultiCheckbox label = {'Alergias'} values = {allergies} />
                    <MultiCheckbox label = {'Enfermedades Cronicas'} values = {cronicDiseases} />
                    <MultiCheckbox label = {'Discapacidades'} values = {discapacities} />
                </div>

                <Section tittle={'Direccion'} classes={'azul-Oscuro smallMargin'} />{/*Separador*/}

                <Direction/>

                <div className='container centrate end smallMargin'>
                    <button className='centrate btn btn-primary' 
                    onClick={async() => {
                        console.log( getUserValues(registerTargetIds) )
                    }}>Registrar</button>
                    <button className='btn btn-primary' onClick={() => {
                        toggleRegister(false)
                    }}>Limpiar los datos</button>
                </div>
        </>
        //aqui esta lo que se muestra cuando no hay nada
        else{
            return<>
                <RegisterQueryGrid dataArray = {['Cedula','Nombre','Apellido','Genero','Nacimiento','Tipo de Sangre']} rows = {queryUsers} />

                    <button className='btn btn-primary centrate' style={{"marginBottom":"10%","marginTop":"5%"}} onClick={() => {
                        toggleRegister(true)
                    }}> Añadir Nuevo </button>
                
            </>
        }
}
 
export default Register;
import Section from './Independientes/Section';
import FieldMap from './Independientes/FieldMap';
import Direction from './registerModules/Direction';
import Date from './registerModules/Date';
import SimplePicker from './Independientes/SimplePicker';
import InputFile from './Independientes/InputFile';
import MultiCheckbox from './Independientes/MultiCheckbox';
//axios
//import axios from 'axios';
import { genders, allergies, cronicDiseases, discapacities, bloodTypes, registerTargetIds } from './Independientes/staticValuesList';//listas de datos estaticos
import { getUserValues } from './Independientes/globalMethods';

function Register () {
        return <>
                <Section tittle={'Informacion Personal'} classes={'azul-Oscuro smallMargin'}/>
                <InputFile classes={"centrate"} />
                
                <div id='Primera Fila' className='row container-fluid'>
                    <FieldMap type={'input'} fields={'Cedula'} key={'Cedula'} dataType = {'number'} />
                    {['Nombre','Apellido'].map( e => 
                        <FieldMap type={'input'} fields={e} key={e + 'id'}/>
                     )}
                     <SimplePicker label={"Genero"} list={genders} />
                </div>

                <div id='Tercera Fila' className='row container-fluid'>
                    <Date/>
                    <SimplePicker label={'Tipo de Sangre'} list={bloodTypes} className={'col-2'} />
                </div>

                <Section tittle={'Caracteristicas'} classes={'azul-Oscuro smallMargin'} />{/*Separador*/}
                
                <div id='Segunda Fila' className='row container-fluid'>
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
                </div>
        </>
}
 
export default Register;
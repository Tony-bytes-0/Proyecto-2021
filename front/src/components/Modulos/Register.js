import Section from './Independientes/Section';
import FieldMap from './Independientes/FieldMap';
import Direction from './registerModules/Direction';
import Date from './registerModules/Date';
import SimplePicker from './Independientes/SimplePicker';
import InputFile from './Independientes/InputFile';
import MedicalRecord from './MedicalRecord';

//axios
import axios from 'axios';

import { genders, allergies, cronicDiseases, discapacities, bloodTypes } from './Independientes/staticValuesList';


function Register () {

        let medicalRecord = <MedicalRecord />
        return <div id='RegisterMainFrame' className='col'>
            
                {medicalRecord}
                <Section tittle={'Informacion Personal'} classes={'azul-Oscuro smallMargin'}/>
                <InputFile classes={"centrate"} />
                
                <div id='Primera Fila' className='row container-fluid'>
                    
                    {['Cedula: ','Nombre: ','Apellido: '].map( e => 
                        <FieldMap type={'input'} fields={e} key={e + 'id'}/>
                     )}
                     <SimplePicker label={"Genero: "} list={genders} />
                </div>

                <div id='Tercera Fila' className='row container-fluid'>
                    <Date/>
                    <SimplePicker label={"Tipo de Sangre: "} list={bloodTypes} divClasses={"col"}/>
                </div>

                <Section tittle={'Caracteristicas'} classes={'azul-Oscuro smallMargin'} />{/*Separador*/}
                
                <div id='Segunda Fila' className='row container-fluid'>
                    <SimplePicker label={'Alergias: '} list={allergies} />
                    <SimplePicker label={'Enfermedades Cronicas: '} list={cronicDiseases} />
                    <SimplePicker label={'Discapacidades: '} list={discapacities} />
                    <SimplePicker label={'Tipo de Sangre: '} list={bloodTypes} />
                </div>

                <Section tittle={'Direccion'} classes={'azul-Oscuro smallMargin'} />{/*Separador*/}

              
                <Direction/>


                <div className='container centrate end smallMargin'>
                    <button className='centrate btn btn-primary' onClick={async() => {
                        const x = await axios.get('https://dummyjson.com/users'); 
                        console.log(x);

                    }}> PROBANDO API</button>
                    <button className='centrate btn btn-primary'>Registrar</button>
                </div>
        </div>
}
 
export default Register;
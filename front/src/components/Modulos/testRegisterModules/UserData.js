//React
import { useState } from 'react'

//MUI Components
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Avatar, Button  } from "@mui/material"

//Redux
import { useDispatch} from 'react-redux'
import { addUserData } from '../../../indexModles/features/userData/userData'

//Axios
import axios from "axios"

//Modulos
import blueLobster from '../Independientes/blue-Lobster.jpg'


export default function UserData(props){//MAIN
    const dispatch = useDispatch()

    //Estado de variables de datos
    const [dni, setDni] = useState('')
    const handleDni = (event) => { setDni(event.target.value) }//DNI

    const [name, setName] = useState('')
    const handleName = (event) => { setName(event.target.value)}//NAME

    const [lastName, setLastName] = useState('')
    const handleLastName = (event) => {setLastName(event.target.value)}//LASTNAME
        
    const [gender, setGender] = useState('')
    const handleGender = (event) => { setGender(event.target.value) }//GENDER
    
    const [cellphone, setCellphone] = useState('')
    const handleCellphone = (event) => {setCellphone(event.target.value)}//CELLPHONE

    const [emergency, setEmergency] = useState('')
    const handleEmergency = (event) => {setEmergency(event.target.value)}//EMERGENCY

    const [birthdate, setBirthdate] = useState('')
    const handleBirthdate = (event) => {setBirthdate(event.target.value)}//BIRTHDATE

    const [bloodType, setBloodType] = useState('')
    const handleBloodType = (event) => { setBloodType(event.target.value) }//BLOODTYPE

    //direccion
    const [municipio, setMunicipio] = useState('')
    const handleMunicipio = (event) => { setMunicipio(event.target.value) }//MUNICIPIO
    
    const [parroquia, setParroquia] = useState('')
    const handleParroquia = (event) => { setParroquia(event.target.value) }//PARROQUIA
    
    const [sector, setSector] = useState('')
    const handleSector = (event) => { setSector(event.target.value) }//SECTOR

    function clearInputs(){
        ['dni','name','lastName','cellphone','emergency'].map ((e) => {
            return document.getElementById(e).value = ''
        })
        setBirthdate('');setBloodType('');setMunicipio('');setParroquia('');setSector('');setGender('')
    }

    function createDataObject (){
        const unusedData = cellphone + emergency + municipio + parroquia;console.log('datos que aun no uso ', unusedData);
        return {
            nombre:name,
            apellido:lastName,
            "identificacion":dni,
            "fecha_de_nacimiento":birthdate,
            "direccion":sector,
            "tipo_sangre": bloodType,
            "sexo":gender,
            // "cellphone":cellphone,
            // "emergencyNumber":emergency,
            // "municipio":municipio,
            // "parroquia":parroquia,
        }
    }

    function postPerson(object){
        const check = Object.values(object).map((e) => {//validacion de campos vacios
            if(e === undefined || e === ''){return false}
            else{return true} })

        if(check.includes(true)){//si todos los campos contienen datos:

            axios.post('http://localhost:300/person', object)
        .then((response) =>{
            alert('usuario creado con exito');
            clearInputs()
        })
        .catch((response) => {
            alert('ocurrio un error, recargue la paguina :(')
        })
        console.log('postPerson end')
        }
        
    }

    function RenderedButton(props){
        if(props.togglePost){//boton que post
        return<><div className='centrate'>
        <Button variant="contained" style={{ "margin": "2%" }} onClick={() => {
            const allData = createDataObject()
            //dispatch(addUserData(allData)) no se si te necesito por ahora xd
            postPerson(allData)
        }}>Crear Usuario</Button>
        </div></>
        }
        else{//boton que guarda en state
        return<><div className='centrate'>
            <Button variant="contained" style={{ "margin": "2%" }} onClick={() => {
            const allData = createDataObject()
            dispatch(addUserData(allData))
        }}>Listo</Button>
        </div></>
        }
        
    }
    const smallWidth = { width: '25%', maxWidth: '25%' }
    return<>
        <div className="flexible centrate verticalFlex" >
                <InputLabel><h5><b>Ingresar Foto de Perfil</b></h5></InputLabel>
                <Avatar sx={{ width: 100, height: 100 }} alt="blueLobster" src={blueLobster} onClick={()=>{alert('desplegar pestaña para ingresar foto')}} />
            </div>
            
            <Grid container sx={{"padding":"2%"}} spacing={1}>
                <Grid item xs={12} >{/*esto es un row basicamente*/}
                    <TextField sx={smallWidth} label="Cedula" variant="filled" type={'number'} id='dni' onChange={handleDni}  />
                    <TextField sx={smallWidth} label="Nombre" variant="filled" id= 'name' onChange={handleName} />
                    <TextField sx={smallWidth} label="Apellido" variant="filled" id = 'lastName' onChange={handleLastName}  />

                    <FormControl sx = {smallWidth}>
                        <InputLabel>Genero</InputLabel>
                        <Select label="Genero" variant="filled" value = {gender} onChange={handleGender}>
                            <MenuItem value={'Masculino'}>Masculino</MenuItem>
                            <MenuItem value={'Femenino'}>Femenino</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>  
                

                <Grid item xs = {12}>
                    <TextField label="Telefono" sx={smallWidth} variant="filled" type={'number'} id='cellphone' onChange={handleCellphone}  />
                    <TextField label="Telefono de Emergencia" sx={smallWidth} variant="filled" id='emergency' onChange={handleEmergency} type={'number'}/>
                    <TextField label="Nacimiento" type="date" defaultValue="2000-01-01" InputLabelProps={{shrink: true}} variant="filled" onChange={handleBirthdate} />
                    <FormControl sx = {smallWidth}>
                        <InputLabel>Tipo de Sangre</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={bloodType} onChange={handleBloodType}>
                            <MenuItem value={'A+'} >A +</MenuItem> <MenuItem value={'A-'}>A -</MenuItem>
                            <MenuItem value={'B+'}>B +</MenuItem> <MenuItem value={'B-'}>B -</MenuItem>
                            <MenuItem value={'O+'}>O +</MenuItem> <MenuItem value={'O-'}>O -</MenuItem>
                            <MenuItem value={'AB+'}>AB +</MenuItem> <MenuItem value={'AB-'}>AB -</MenuItem>
                        </Select>
                    </FormControl>   
                </Grid>

        {/* SEPARADOR */}        <Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b>Direccion</b></h4></div> </Grid>                      {/* SEPARADOR */}

                <Grid item xs = {4}>
                    <FormControl fullWidth>
                        <InputLabel>Municipio</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={municipio} onChange={handleMunicipio}>
                            <MenuItem value={'Andrés Eloy Blanco'} >Andrés Eloy Blanco</MenuItem> <MenuItem value={'Andrés Mata'}>Andrés Mata</MenuItem>
                            <MenuItem value={'Arismendi'}>Arismendi</MenuItem> <MenuItem value={'Benítez'}>Benítez</MenuItem>
                            <MenuItem value={'Bermúdez'}>Bermúdez</MenuItem> <MenuItem value={'Bolívar'}>Bolívar</MenuItem>
                            <MenuItem value={'Cajigal'}>Sucre</MenuItem> <MenuItem value={'AB-'}>Cruz Salmerón Acosta</MenuItem>
                        </Select>
                    </FormControl>  
                </Grid>

                <Grid item xs = {4}>
                    <FormControl fullWidth>
                        <InputLabel>parroquia</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={parroquia} onChange={handleParroquia}>
                            <MenuItem value={'Altagracia'} >Altagracia</MenuItem> <MenuItem value={'Ayacucho'}>Ayacucho</MenuItem>
                            <MenuItem value={'Santa Ines'}>Santa Ines</MenuItem> <MenuItem value={'Raul Leoni'}>Raul Leoni</MenuItem>
                            <MenuItem value={'San Juan'}>San Juan</MenuItem> <MenuItem value={'Santa Fe'}>Santa Fe</MenuItem>
                            <MenuItem value={'Valentin Valiente'}>Valentin Valiente</MenuItem>
                        </Select>
                    </FormControl>  
                </Grid>

                <Grid item xs = {4}>
                    <FormControl fullWidth >
                        <InputLabel>Sector</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={sector} onChange={handleSector}>
                            <MenuItem value={'Los Chaimas'} >Los Chaimas</MenuItem> <MenuItem value={'Cantarrana'}>Cantarrana</MenuItem>
                            <MenuItem value={'El Peñon'}>El Peñon</MenuItem> <MenuItem value={'El Bosque'}>Perimetral</MenuItem>
                            <MenuItem value={'Caiguire'}>Caiguire</MenuItem> <MenuItem value={'Brasil'}>Brasil</MenuItem>
                            <MenuItem value={'Centro'}>Centro</MenuItem> <MenuItem value={'Llanada'}>Llanada</MenuItem>
                        </Select>
                    </FormControl>  
                </Grid>
            </Grid>

            {<RenderedButton togglePost = {props.togglePost} />/*este es el boton de listo que envia los datos*/}
            <div className='centrate'><Button variant={'contained'} onClick={clearInputs}>Limpiar Datos</Button></div>
            {/*al llamar UserData desde Crear usuario, me permite hacer un POST, del resto me permite encapsular los datos unicamente*/}

        </>
}

/* <div className='centrate'>
<Button variant="contained" style={{ "margin": "2%" }} onClick={() => {
    const allData = createDataObject()
    dispatch(addUserData(allData))
    postPerson(allData)
    console.log('datos del objeto enviado: ', allData)
}}>Listo</Button>

</div> */
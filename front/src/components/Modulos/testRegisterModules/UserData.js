//React
import { useState } from 'react'

//MUI Components
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Avatar, Button, Modal  } from "@mui/material"

//Redux
import { useDispatch} from 'react-redux'
import { addUserData } from '../../../indexModles/features/userData/userData'
import { togglefilterUser, toggleUserData } from '../../../indexModles/features/registerController/registerController'

//Axios
import axios from "axios"

//Modulos
import blueLobster from '../Independientes/blue-Lobster.jpg'
import { oc, sectorList, parroquiaList, municipioList, bloodList } from '../Independientes/staticValuesList'//objeto con personas estatico



export default function UserData(props){//MAIN
    const dispatch = useDispatch()
    //Estado de variables de datos
    const [dni, setDni] = useState(''); const handleDni = (event) => { setDni(event.target.value) }//DNI
    const [name, setName] = useState(''); const handleName = (event) => { setName(event.target.value)}//NAME
    const [lastName, setLastName] = useState(''); const handleLastName = (event) => {setLastName(event.target.value)}//LASTNAME   
    const [gender, setGender] = useState(''); const handleGender = (event) => { setGender(event.target.value) }//GENDER   
    const [cellphone, setCellphone] = useState(''); const handleCellphone = (event) => {setCellphone(event.target.value)}//CELLPHONE
    const [emergency, setEmergency] = useState(''); const handleEmergency = (event) => {setEmergency(event.target.value)}//EMERGENCY
    const [birthdate, setBirthdate] = useState(''); const handleBirthdate = (event) => {setBirthdate(event.target.value)}//BIRTHDATE
    const [bloodType, setBloodType] = useState(''); const handleBloodType = (event) => { setBloodType(event.target.value) }//BLOODTYPE
    const [municipio, setMunicipio] = useState(''); const handleMunicipio = (event) => { setMunicipio(event.target.value) }//MUNICIPIO
    const [parroquia, setParroquia] = useState(''); const handleParroquia = (event) => { setParroquia(event.target.value) }//PARROQUIA
    const [sector, setSector] = useState(''); const handleSector = (event) => { setSector(event.target.value) }//SECTOR


    const [welcome, setWelcome] = useState(true)//para hacer acciones solamente al cargar la pagina :)
    if(welcome && props.toggleUpdate){//esto trigerea al abrir la modal de edicion
        setWelcome(false)
        setUpdateValues()
    }

    function clearInputs(){
        setName('');setDni('');setLastName('');setGender('');setCellphone('');setEmergency('');
        setBloodType('');setMunicipio('');setParroquia('');setSector('');setBirthdate('2000-01-01');
    }

    function createDataObject (){//extends
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
    //Post
    function postPerson(object){//extends
        
        const check = Object.values(object).map((e) => {//validacion de campos vacios
            if(e === undefined || e === ''){return false}
            else{return true} })

        if(check.includes(true)){//si alguno de los campos contienen datos:

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
    //Update
    function setUpdateValues(){//extends
        setDni(props.target.identificacion);setName(props.target.nombre);setLastName(props.target.apellido);setGender(props.target.sexo);
        setBirthdate(props.target.fecha_de_nacimiento)
        setSector(props.target.direccion);
    }
    function updatePerson(object, id){//extends
        console.log('este es el objeto parametro y el id', id)

        axios.put('http://localhost:300/person/' + id, object)
        .then((response) =>{
            clearInputs()   
            document.getElementById('normalize').click()
            alert('Usuario Actualizado con exito');
        })
        .catch((response) => {
            alert('ocurrio un error, recargue la paguina :(')
        })
    } 
    //Renderizado Dinamico
    function RenderedButton(){
        if(props.togglePost){//boton que post
        return<><div className='centrate'>
        <Button variant="contained" style={{ "margin": "2%" }} onClick={() => {
            const allData = createDataObject()
            postPerson(allData)
        }}>Crear Usuario</Button>
        </div></>
        }

        else if(props.toggleUpdate){
            return <><div className='centrate'>
            <Button variant="contained" style={{ "margin": "2%" }} onClick={() => {
                const allData = createDataObject()
                updatePerson(allData, props.target.id)
            }}>Actualizar</Button>
        </div></>}
        
        else{//boton que guarda en state
        return<><div className='centrate'>
            <Button variant="contained" style={{ "margin": "2%" }} onClick={() => {
            const allData = createDataObject()
            dispatch(addUserData(allData))//añadir datos al state
            dispatch(toggleUserData(false))//cerrar modulo de ingresar datos
        }}>Listo</Button></div>

        <div className='centrate'>
            <Button variant="contained" style={{ "margin": "2%" }} onClick={() => {
            dispatch(toggleUserData(false))
            dispatch(togglefilterUser(true))
        }}>Buscar Usuarios</Button>
        </div></>
        }
    }

    //Dev
    const [modal, setModal] = useState(false)
    const handleOpen = () => {setModal(true)}
    const handleClose = () => {setModal(false)}    
    const sm = { width: '25%', maxWidth: '25%' }

    function RenderDevBtn(){
        if(props.togglePost){
            return <div className='centrate'><Button variant={'contained'} onClick={ handleOpen } >Insertar Datos estaticos</Button></div>
        }
        
        else{ return <></>}
    }
    
    return<>
        <div className="flexible centrate verticalFlex" >
                <InputLabel><h5><b>Ingresar Foto de Perfil</b></h5></InputLabel>
                <Avatar sx={{ width: 100, height: 100 }} alt="blueLobster" src={blueLobster} onClick={()=>{alert('desplegar pestaña para ingresar foto')}} />
            </div>
            
            <Grid container sx={{"padding":"2%"}} spacing={1}>
                <Grid item xs={12} >{/*esto es un row basicamente*/}
                    <TextField sx={sm} label="Cedula" variant="filled" type= {'number'} value={dni} onChange = {handleDni}  />
                    <TextField sx={sm} label="Nombre" variant="filled" value = {name} onChange = {handleName} />
                    <TextField sx={sm} label="Apellido" variant="filled" value = {lastName} onChange = {handleLastName}  />

                    <FormControl sx = {sm}>
                        <InputLabel>Genero</InputLabel>
                        <Select label="Genero" variant="filled" value = {gender} onChange={handleGender}>
                            <MenuItem value={'masculino'}>Masculino</MenuItem>
                            <MenuItem value={'femenino'}>Femenino</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>  
                

                <Grid item xs = {12}>
                    <TextField label="Telefono" sx={sm} variant="filled" type={'number'} value = {cellphone}  onChange={handleCellphone}  />
                    <TextField label="Telefono de Emergencia" sx={sm} variant="filled" type={'number'} value = {emergency} onChange={handleEmergency} />
                    <TextField label="Nacimiento" type="date" value={birthdate} InputLabelProps={{shrink: true}} variant="filled" onChange={handleBirthdate} />
                    <FormControl sx = {sm}>
                        <InputLabel>Tipo de Sangre</InputLabel>
                        <Select label="Tipo de Sangre" variant="filled" id="BloodType" value={bloodType} onChange={handleBloodType}>
                            {bloodList.map((e) => <MenuItem key={e+'blood'} value={e}>{e}</MenuItem>)}
                        </Select>
                    </FormControl>   
                </Grid>

                {/* SEPARADOR */}<Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b>Direccion</b></h4></div> </Grid>{/* SEPARADOR */}

                <Grid item xs = {4}>
                    <FormControl fullWidth>
                        <InputLabel>Municipio</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={municipio} onChange={handleMunicipio}>
                            {municipioList.map((e) => <MenuItem value={e} key={e+'mun'}>{e}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Grid>

                <Grid item xs = {4}>
                    <FormControl fullWidth>
                        <InputLabel>parroquia</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={parroquia} onChange={handleParroquia}>
                            {parroquiaList.map((e) => <MenuItem value={e} key={e+'parr'}>{e}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Grid>

                <Grid item xs = {4}>
                    <FormControl fullWidth >
                        <InputLabel>Sector</InputLabel>
                        <Select variant="filled" id="BloodType" label="Genero" value={sector} onChange={handleSector}>
                            {sectorList.map((e) => <MenuItem value={e} key={e+'sec'}>{e}</MenuItem> )}
                        </Select>
                    </FormControl>  
                </Grid>
            </Grid>

            {<RenderedButton togglePost = {props.togglePost} />/*Listo / Crear Usuario / Actualizar */}

            <div className='centrate'><Button variant={'contained'} onClick={clearInputs}>Limpiar Datos</Button></div>

            {/* dev */}
                <RenderDevBtn />
            {/* dev */}

            <Modal open={modal} onClose={handleClose}>
                <div className='centrate verticalFlex modalMedium'>
                    <Button variant='contained' className='basicBorders' onClick={() => {postPerson(oc.irumi)} }>Insertar Irumi!</Button>
                    <Button variant='contained' className='basicBorders' onClick={() => {postPerson(oc.monica)} }>Insertar Monica!</Button>
                    <Button variant='contained' className='basicBorders' onClick={() => {postPerson(oc.poison)} }>Insertar Poison!</Button>
                    <Button variant='contained' className='basicBorders' onClick={() => {postPerson(oc.tomate)} }>Insertar Tomate!</Button>
                    <Button variant='contained' className='basicBorders' onClick={() => {postPerson(oc.omega)} }>Insertar Omega!</Button>
                    <Button variant='contained' className='basicBorders' onClick={() => {postPerson(oc.karen)} }>Insertar Karen!</Button>
                    <Button variant='contained' className='basicBorders' onClick={() => {postPerson(oc.rebecca)} }>Insertar Rebecca!</Button>

                    <Button variant='contained' className='basicBorders' style={{"margin":"40px"}} onClick={handleClose}>Cerrar modal alv</Button>
                </div>
            </Modal>

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
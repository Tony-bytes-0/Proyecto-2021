//React
import { useState } from "react"
//Redux
 import { useDispatch, useSelector } from 'react-redux';
 import { addSymptom } from "../../../indexModles/features/Symptoms/ActiveSymptoms";//lista por defecto
 import { removeSymptom } from "../../../indexModles/features/Symptoms/symptomList";
//MUI
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, TableContainer,Table, Paper, TableHead, TableBody, TableRow, TableCell, Button} from "@mui/material"
//arrays
import { allergies, cronicDiseases, discapacities } from "../Independientes/staticValuesList"

//Modulos
import AllergiesList from "./AllergiesList"
import CronicDiseasesList from "./CronicDiseasesList"
import DiscapacitiesList from "./DiscapacitiesList"


function SymptomSelect(){//selector
  //React States
  const[symptom, setSymptom] = useState("")
  const handleSymptom = async(event) => { setSymptom(await event.target.value) }
  const [disableBtn, setBtn] = useState(false)//controlar el boton

  //Redux
  const dispatch = useDispatch() 
  const symptomList = useSelector(state => state.symptomList)//valor del selector de sintomas


  return<>
      <Grid container >
          <Grid item xs={10}>
              <FormControl fullWidth sx={{"padding":"3%"}}>
                  <InputLabel>Sintomas</InputLabel>
                  <Select label="Genero" variant="filled" value={symptom} onChange={handleSymptom}>
                      {symptomList.map((e) => <MenuItem value={e} key={e}>{e}</MenuItem>)}
                  </Select>
              </FormControl>
          </Grid>
          <Grid item xs={2} >
              <div className="centrate" style={{"position":"relative","top":"30%"}}>
                  <Button variant='contained' disabled={disableBtn} fullWidth onClick={() => {
                    
                    dispatch(addSymptom(symptom))//añadir estado activo
                    dispatch(removeSymptom(symptom))//remover el mismo estado del selector

                    // console.log('primero elemento: ', symptomList[0],' valor select: ', symptom)
                    // if(symptom === ""){console.log('el symptom quedo vacio')}
                    // setSymptom(symptomList[0])
                    //if(symptomList.length > 0){setSymptom(symptomList[0]); console.log('segunda condicion!??!?!?!?!')}

                  }}>Agregar</Button>

              </div>
          </Grid>
      </Grid>
  </>
}


function BasicTable() {//tabla donde se reflejan los sintomas
  const activeSymptoms = useSelector(state => state.activeSymptoms)//sintomas activos por defecto = [] 
  
    return <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow>{/* aqui defino la cantidad de filas! */}
              <TableCell align="center"><h4><b>Sintoma</b></h4></TableCell>
              <TableCell align="center"><h4><b>Gravedad</b></h4></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {activeSymptoms.map((e) => (
              <TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{e.body}</TableCell>
                <TableCell align="center">aqui va la severidad</TableCell>
                <TableCell align="center"><Button variant="contained">botoncito</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
  }


export default function TestMedical(){//MAIN
  //Estados React
  const [relation, setRelation] = useState('')
  const handleRelation = (event) => { setRelation(event.target.value);} 

    return<>
    <Grid container>
        {/* <Grid item xs = {12}> </Grid> */}
        <Grid item xs = {12}><div className="centrate SIDEBAR basicBorders">Datos de la Historia Medica</div> </Grid>{/* SEPARADOR */}

        <Grid item xs = {6}>
        <FormControl fullWidth sx={{"padding":"3%"}}>
                <InputLabel>Relacion con el Ambulatorio</InputLabel>
                <Select label="Genero" variant="filled" value={relation} onChange={handleRelation}>
                    <MenuItem value={'Paciente'} >Paciente</MenuItem>
                    <MenuItem value={'Medico'}>Medico</MenuItem>
                    <MenuItem value={'Enfermera'}>Enfermera</MenuItem>
                    <MenuItem value={'Personal del Ambulatorio'}>Personal del Ambulatorio</MenuItem>
                </Select>
            </FormControl>
            
        </Grid>

        <Grid item xs = {6}> 
            <FormControl fullWidth sx={{"padding":"3%"}}>
                <InputLabel>Fecha de Consulta</InputLabel>
                <TextField id="date"  type="date" defaultValue="2000-01-01" InputLabelProps={{shrink: true}} variant="filled" />    
            </FormControl>
        </Grid>

        <Grid item xs = {12}><div className="centrate SIDEBAR basicBorders">Padecimientos</div> </Grid>{/* SEPARADOR */}

        <Grid container spacing={2} sx={{"padding":"2%"}}>
            <Grid item xs = {4}> <AllergiesList data={allergies} /> </Grid>
            <Grid item xs = {4}> <CronicDiseasesList data={cronicDiseases} /> </Grid>
            <Grid item xs = {4}> <DiscapacitiesList data={discapacities} /> </Grid>
        </Grid>

        <Grid item xs = {12}><div className="centrate SIDEBAR basicBorders" >Sintomas</div> </Grid>{/* SEPARADOR */}

        <SymptomSelect />

        <Grid container>
            <BasicTable />
        </Grid>
    </Grid>
    </>
}
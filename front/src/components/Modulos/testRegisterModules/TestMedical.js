//React
import { useState } from "react"
//Redux
 import { useDispatch, useSelector } from 'react-redux';
 import { addActiveSymptom, removeActiveSymptom } from "../../../indexModles/features/Symptoms/ActiveSymptoms";//lista por defecto
 import { addSymptom, removeSymptom } from "../../../indexModles/features/Symptoms/symptomList";

//MUI
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, TableContainer,Table, Paper, TableHead, TableBody, TableRow, TableCell, Button} from "@mui/material"


//Modulos
import AllergiesList from "./AllergiesList"
import CronicDiseasesList from "./CronicDiseasesList"
import DiscapacitiesList from "./DiscapacitiesList"


function SymptomSelect(){//selector
  //React States
  const[symptom, setSymptom] = useState("")
  const handleSymptom = (event) => {
    let aux = event.target.value
    setBtn(false)//al tocar el selector, activar el boton
    setSymptom( aux );
  }

  const [disableBtn, setBtn] = useState(true)//controlar el boton

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
                    console.log('antes de los dispatch: ', symptom, symptomList)
                    const aux = symptom
                    setSymptom('')//devolver select a valor nulo
                    setBtn(true)//desactivar añadir
                    dispatch(addActiveSymptom(aux))//añadir estado activo
                    dispatch(removeSymptom(aux))//remover el mismo estado del selector

                  }}>Agregar</Button>

              </div>
          </Grid>
      </Grid>
  </>
}


function BasicTable() {//tabla donde se reflejan los sintomas
  const activeSymptoms = useSelector(state => state.activeSymptoms)//sintomas activos por defecto = [] 
  const dispatch = useDispatch() 
  
    return <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
          <TableHead>
            <TableRow>{/* aqui defino la cantidad de filas! */}
              <TableCell align="center"><h4><b>Sintoma</b></h4></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {activeSymptoms.map((e) => (
              <TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{e.body}</TableCell>
                <TableCell align="center"><Button variant="contained" onClick={() => {
                  dispatch(addSymptom(e.body))//devuelve el valor a la lista usada por el selector
                  dispatch(removeActiveSymptom(e.body))//quita el simtoma de la lista de activos, filtra por nombre
                }}>Eliminar</Button></TableCell>
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
        <Grid item xs = {12}><div className="centrate separator tittle basicBorders"><h4><b>Datos de la Historia Medica</b></h4></div> </Grid>{/* SEPARADOR */}

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

        <Grid item xs = {12}><div className="centrate separator tittle basicBorders"><h4><b>Padecimientos</b></h4></div> </Grid>{/* SEPARADOR */}

        <Grid container spacing={2} sx={{"padding":"2%"}}>
            <Grid item xs = {4}> <AllergiesList  /> </Grid>
            <Grid item xs = {4}> <CronicDiseasesList  /> </Grid>
            <Grid item xs = {4}> <DiscapacitiesList  /> </Grid>
        </Grid>

        <Grid item xs = {12}><div className="centrate separator tittle basicBorders" ><h4><b>Sintomas</b></h4></div> </Grid>{/* SEPARADOR */}

        <SymptomSelect />

        <Grid container>
            <BasicTable />
        </Grid>
    </Grid>
    </>
}
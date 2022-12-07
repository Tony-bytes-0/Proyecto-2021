//React
import * as React from 'react';
import { useState } from 'react';

//MUI
import { Grid, InputLabel, Select, MenuItem, FormControl, TableContainer,Table, Paper, TableHead, TableBody, TableRow, TableCell, Button} from "@mui/material"

//redux
import { useDispatch, useSelector } from 'react-redux';
import { addActiveEmatology, removeActiveEmatology } from '../../../../indexModles/features/ematology/activeEmatology';
import { addEmatology, removeEmatology } from '../../../../indexModles/features/ematology/ematologyList';

function BloodTestSelect(){//selector
	//React States
	const[value, setValue] = useState("")//valor seleccionado
	const [disableBtn, setBtn] = useState(true)//controlar el boton
	const handleSymptom = (event) => {
		let aux = event.target.value
		setBtn(false)//al tocar el selector, activar el boton
		setValue( aux );
	}
	//Redux
	const dispatch = useDispatch() 
	const testList = useSelector(state => state.ematologyList)//valor del selector de sintomas
  
	return<>
		<Grid container style={{"backgroundColor":"white", "padding":"5%"}} >
			<Grid item xs={10}>
				<FormControl fullWidth sx={{"padding":"3%"}}>
					<InputLabel>Hematologuias</InputLabel>
					<Select label="Hematologuias" variant="outlined" value={value} onChange={handleSymptom}>
						{testList.map((e) => <MenuItem value={e} key={e}>{e}</MenuItem>)}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={2} >
				<div className="centrate" style={{"position":"relative","top":"30%"}}>
					<Button variant='contained' disabled={disableBtn} fullWidth onClick={() => {
						const aux = value
						setValue('')//devolver select a valor nulo
						setBtn(true)//desactivar añadir
						dispatch(addActiveEmatology(aux))//añadir estado activo
						dispatch(removeEmatology(aux))//remover el mismo estado del selector estatico
					}}>Agregar</Button>
  
				</div>
			</Grid>
		</Grid>
	</>
  }
  
  
  function BasicTable() {//tabla donde se reflejan los sintomas
	const activeEmatology = useSelector(state => state.activeEmatology)//sintomas activos por defecto = [] 
	const dispatch = useDispatch() 
	
	  return <Grid container>
        <Grid item xs={12}>
		<TableContainer component={Paper}>
		  <Table sx={{ minWidth: 650 }} aria-label="simple table" >
			<TableHead>
			  <TableRow>{/* aqui defino la cantidad de filas! */}
				<TableCell align="center"><h4><b>Examenes Selecionados</b></h4></TableCell>
				<TableCell align="center"></TableCell>
			  </TableRow>
			</TableHead>
	
			<TableBody>
			  {activeEmatology.map((e) => (
				<TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				  <TableCell align="center">{e.body}</TableCell>
				  <TableCell align="center"><Button variant="contained" onClick={() => {
					dispatch(addEmatology(e.body))//devuelve el valor a la lista usada por el selector
					dispatch(removeActiveEmatology(e.body))//quita el simtoma de la lista de activos, filtra por nombre
				  }}>Eliminar</Button></TableCell>
				</TableRow>
			  ))}
			</TableBody>
		  </Table>
		</TableContainer>
        </Grid>
		</Grid>
	}

export default function Hematology(){
    return<>
        <BloodTestSelect/>
        <BasicTable/>
    </>
}
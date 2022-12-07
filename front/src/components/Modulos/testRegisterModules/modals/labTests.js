//React
import * as React from 'react';
import { useState } from 'react';

//MUI
import { Grid, InputLabel, Select, MenuItem, FormControl, TableContainer,Table, Paper, TableHead, TableBody, TableRow, TableCell, Button} from "@mui/material"

//redux
import { useDispatch, useSelector } from 'react-redux';
import { addActiveLabTest, removeActiveLabTest } from '../../../../indexModles/features/laboratory/activeLabTests';
import { addLabTest, removeLabTest } from '../../../../indexModles/features/laboratory/labTests';

function LabTest(){//selector
	//React States
	const[value, setValue] = useState("")//valor seleccionado
	const [disableBtn, setBtn] = useState(true)//controlar el boton
	const handleExam = (event) => {
		let aux = event.target.value
		setBtn(false)//al tocar el selector, activar el boton
		setValue( aux );
	}
	//Redux
	const dispatch = useDispatch() 
	const testList = useSelector(state => state.labTestList)//valor del selector de sintomas
  
	return<>
		<Grid container style={{"backgroundColor":"white", "padding":"5%"}} >
			<Grid item xs={10}>
				<FormControl fullWidth sx={{"padding":"3%"}}>
					<InputLabel>Examenes</InputLabel>
					<Select label="Examenes" variant="outlined" value={value} onChange={handleExam}>
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
						dispatch(addActiveLabTest(aux))//añadir estado activo
						dispatch(removeLabTest(aux))//remover el mismo estado del selector estatico
					}}>Agregar</Button>
  
				</div>
			</Grid>
		</Grid>
	</>
  }
  
  
  function BasicTable() {//tabla donde se reflejan los sintomas
	const activeLabTestsState = useSelector(state => state.activeLabTests)//sintomas activos por defecto = [] 
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
			  {activeLabTestsState.map((e) => (
				<TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
				  <TableCell align="center">{e.body}</TableCell>
				  <TableCell align="center"><Button variant="contained" onClick={() => {
					dispatch(addLabTest(e.body))//devuelve el valor a la lista usada por el selector
					dispatch(removeActiveLabTest(e.body))//quita el simtoma de la lista de activos, filtra por nombre
				  }}>Eliminar</Button></TableCell>
				</TableRow>
			  ))}
			</TableBody>
		  </Table>
		</TableContainer>
        </Grid>
		</Grid>
	}

export default function LabTests(){
    return<>
        <LabTest/>
        <BasicTable/>
    </>
}
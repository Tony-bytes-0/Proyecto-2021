//React
import { useState } from 'react';

//MUI
import { Grid, Modal, Button, Chip} from "@mui/material"

//Redux
import { useSelector } from 'react-redux';


//Modules
import Hematology from './Hematology';
import LabTests from './labTests';
import Radiographys from './Radiographys';


export default function ModalTests() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [openLab, setOpenLab] = useState(false);
	const handleOpenLab = () => setOpenLab(true);
	const handleCloseLab = () => setOpenLab(false);

	const [openRadio, setOpenRadio] = useState(false);
	const handleOpenRadio = () => setOpenRadio(true);
	const handleCloseRadio = () => setOpenRadio(false);

	const activeHematologyState = useSelector(state => state.activeEmatology)
	const activeLabTestsState = useSelector(state => state.activeLabTests)
	const activeRadiographyState = useSelector(state => state.activeRadiography)

	console.log(activeRadiographyState)
	
	return <>
		<Grid container className='basicBorders'>
			<Grid item xs = {12}><div className="centrate separator basicBorders tittle"><h4><b>Examenes a Realizar</b></h4></div> </Grid>
			<Grid item xs={4}>
				<div className='basicBorders centrate'>
					<Button variant='contained' onClick={handleOpen} className='centrate'>Sangre</Button>
				</div>
				<div className='basicBorders centrate'>
					{activeHematologyState.map((e) => <Chip key={e.id} label={e.body} variant="outlined" />)}
				</div>
			</Grid>

			<Grid item xs={4}>
				<div className='basicBorders centrate'>
					<Button variant='contained' onClick={handleOpenLab} className='centrate'>Laboratorio</Button>
				</div>
				<div className='basicBorders centrate'>
					{activeLabTestsState.map((e) => <Chip key={e.id} label={e.body} variant="outlined" />)}
				</div>
			</Grid>

			<Grid item xs={4}>
				<div className='basicBorders centrate'>
					<Button variant='contained' onClick={handleOpenRadio} className='centrate'>Radiografias</Button>
				</div>
				<div className='basicBorders centrate'>
					{activeRadiographyState.map((e) => <Chip key={e.id} label={e.body} variant="outlined" />)}
				</div>
			</Grid>
		</Grid>

					{/*AQUI VAN LAS PANTALLAS MODALES, una por cada boton */}
			<Modal open={open} disableScrollLock={false} onClose={handleClose} >{/* modal con Examenes de sangre*/}
				<div className='modalDiv basicBorders'>
					<Hematology />
					<Grid container direction="column" alignItems="center" justifyContent="center" style={{"backgroundColor":"white", "padding":"5%"}}>
						<Grid item xs= {3}><Button variant='contained' onClick={handleClose}>Terminar Seleccion</Button></Grid>
					</Grid>
				</div>
			</Modal>

			<Modal open={openLab} disableScrollLock={false} onClose={handleCloseLab} >{/* modal con Examenes de sangre*/}
				<div className='modalDiv basicBorders'>
					<LabTests />
					<Grid container direction="column" alignItems="center" justifyContent="center" style={{"backgroundColor":"white", "padding":"5%"}}>
						<Grid item xs= {3}><Button variant='contained' onClick={handleCloseLab}>Terminar Seleccion</Button></Grid>
					</Grid>
				</div>
			</Modal>

			<Modal open={openRadio} disableScrollLock={false} onClose={handleCloseRadio} >{/* modal con Examenes de sangre*/}
				<div className='modalDiv basicBorders'>
					<Radiographys />
					<Grid container direction="column" alignItems="center" justifyContent="center" style={{"backgroundColor":"white", "padding":"5%"}}>
						<Grid item xs= {3}><Button variant='contained' onClick={handleCloseRadio}>Terminar Seleccion</Button></Grid>
					</Grid>
				</div>
			</Modal>


			
	</>
}
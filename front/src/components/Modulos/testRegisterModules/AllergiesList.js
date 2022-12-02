import { Switch, FormGroup, FormControlLabel, Button } from "@mui/material"
import { useState } from "react";



export default function AllergiesList(props){
const showStates = () => {console.log(paracetamol, polen, polvo, lactosa, Antibioticos)}
const [hideAllergies, toggleAllergies] = useState(true)//habilitar selectores

const [paracetamol, setParacetamol] = useState(false)//valor de las alegias
const handleParacetamol = () => {if(paracetamol){setParacetamol(false)}  else{setParacetamol(true)}}

const [polen, setPolen] = useState(false)
const handlePolen = () => {if(polen){setPolen(false)}  else{setPolen(true)}}

const[polvo, setPolvo] = useState(false)
const handlePolvo = () => {if(polvo){setPolvo(false)}  else{setPolvo(true)}}

const[lactosa, setLactosa] = useState(false)
const handleLactosa = () => {if(lactosa){setLactosa(false)}  else{setLactosa(true)}}

const[Antibioticos, setAntibioticos] = useState(false)
const handleAntibioticos = () => {if(Antibioticos){setAntibioticos(false)}  else{setAntibioticos(true)}}


const handleChange = (event) => {if(event.target.checked){ toggleAllergies(false) } else{toggleAllergies(true)}}//disable de las alergias


    return<>
        <FormGroup orientation="horizontal">
            <FormControlLabel control={<Switch />}  label='Alergias' onChange={handleChange} />
            
            <FormControlLabel  control={<Switch />} disabled={hideAllergies} label={'Paracetamol'} onChange={handleParacetamol} />

            <FormControlLabel  control={<Switch />} disabled={hideAllergies} label={'Polen'} onChange={handlePolen}/>

            <FormControlLabel  control={<Switch />} disabled={hideAllergies}  label={'Polvo'}  onChange={handlePolvo}/> 
           
            <FormControlLabel  control={<Switch />} disabled={hideAllergies} label={'Lactosa'} onChange={handleLactosa} />

            <FormControlLabel  control={<Switch />} disabled={hideAllergies} label={'Antibioticos'} onChange={handleAntibioticos} />
            <Button onClick={showStates}>dame los estados</Button>
        </FormGroup>
    </>
}
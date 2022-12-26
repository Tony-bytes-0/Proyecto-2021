//MUI
import { Grid } from "@mui/material"
//Redux
import {  useSelector } from "react-redux";

export default function SelectedUser(){

    const selectedUser = useSelector(state => state.userData)
    //console.log(selectedUser)
    return<><Grid container>
        <Grid item xs = {2} className='modalDiv'> Nombre: {selectedUser.nombre} </Grid>
        <Grid item xs = {2} className='modalDiv'> Apellido: {selectedUser.apellido}</Grid>
        <Grid item xs = {2} className='modalDiv'> Genero: {selectedUser.sexo}</Grid>
        <Grid item xs = {2} className='modalDiv'> Cedula: {selectedUser.identificacion}</Grid>
        <Grid item xs = {2} className='modalDiv'> Telefono: {selectedUser.telefono}</Grid>
        <Grid item xs = {2} className='modalDiv'> Telefono de Emergencia: {selectedUser.telefono_emergencia}</Grid>
        
        <Grid item xs = {2} className='modalDiv'> Direccion: {selectedUser.direccion}</Grid>
    </Grid></>
}
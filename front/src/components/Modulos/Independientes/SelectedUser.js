//MUI
import { Grid } from "@mui/material"
//Redux
import {  useSelector } from "react-redux";

export default function SelectedUser(){

    const selectedUser = useSelector(state => state.userData)
    
    return<><Grid container>
        <Grid item xs = {2}> Nombre: {selectedUser.nombre} </Grid>
        <Grid item xs = {2}> Apellido: {selectedUser.apellido}</Grid>
        <Grid item xs = {2}> Cedula: {selectedUser.identificaion}</Grid>
        <Grid item xs = {2}> Genero: {selectedUser.sexo}</Grid>
        <Grid item xs = {2}> Direccion: {selectedUser.direccion}</Grid>
    </Grid></>
}
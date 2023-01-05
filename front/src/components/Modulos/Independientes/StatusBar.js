//MUI
import { Avatar } from "@mui/material"
import { deepPurple } from '@mui/material/colors';
//Redux
//import { useDispatch, useSelector } from "react-redux";

export default function StatusBar(){
    return <span class="STATUSBAR">
        <div className="right"><Avatar sx={{ bgcolor: deepPurple[500] }}></Avatar></div>
    </span>
}
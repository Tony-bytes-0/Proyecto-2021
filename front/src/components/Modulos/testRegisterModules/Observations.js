import { Button, Grid, TextareaAutosize } from "@mui/material"
import { useState } from "react"

export default function Obsevations() {
    const [showObservations, setShow] = useState(false)


    if(showObservations){return<>
        <Grid container>
            <Grid item xs={12}>
                <div className="centrate">
                    <TextareaAutosize className="centrate" aria-label="minimum height" minRows={3} placeholder="" style={{ width: "60%" }}/>
                </div>
            </Grid>

            <Grid item xs={12}>
                <div className="centrate">
                    <Button variant="contained" onClick={() => {setShow(false)} }>Limpiar Observaciones</Button>
                </div>
            </Grid>
        </Grid></>
    }
    
    
    
    else{
        return<>
            <div className="centrate">
                <Button variant="contained" onClick={() => {setShow(true)} }>Añadir Observaciones +</Button>
            </div>
        </>
    }
}
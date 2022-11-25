function Slice(props){
    return(<div className="col"><h5>{props.value}</h5></div>)
}

function MultiSlice(props){//registro por usuario, al clickear devuelve la cedula del usuario
    return(<div id={props.valueList[0]} className='horizontalFlex col border border-info'
        onClick={() => {console.log('seleccionado el usuario con cedula: ', props.valueList[0])}} >
        {props.valueList.map((e) => <Slice value={e} key={e + 'id'} />)}
    </div>)
}

export function RegisterQueryGrid(props){
    return(<>
        <div className='row '>
            <label className='col-3'><h5> Buscar Personas Por Cedula </h5></label>
            <input className='col-7' id="registerQueryParams"></input>
            <button className="btn btn-primary col-1">Buscar</button>
        </div>

        <div className="centrate"><h3> Resultados de la Busqueda </h3></div>
        <div className='horizontalFlex border border-primary basicBorders' >
            {props.dataArray.map((e) => <Slice value={e} key={e + 'id'} />)}
        </div>
        <div id='queryResults' className='basicBorders'>
            {props.rows.map((e) => <MultiSlice valueList ={e} key={e + 'id'} />)}
        </div>
        

    </>)
    
}

// {['valor uno','dos','tres'].map((e) => {
                
// })}
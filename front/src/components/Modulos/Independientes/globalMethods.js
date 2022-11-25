import {allergies} from '../Independientes/staticValuesList'
//IMPORTA ESTO cuando quieras terminar el modulo xd, cronicDiseases, discapacities 
let getUserValues = function(e) {//para buscar los valores de los primeros campos
    const extractedVales =  e.map((e) => {
        const value = document.getElementById(e).value
        return value
    })
    //aqui saco los valores de los checkboxes, los registra si el principal esta marcado
    //de lo contrario devuelve una lista de false igual al numero de parametros que se le pase
    //recibe un string, (id del checkbox principal, lista con los id de los checkbox opcionales)
    let checkValues = function(iterator, list){
        if (document.getElementById(iterator).checked){
            const active = list.map((e) => {
                const value = document.getElementById(e).checked
                return value //los valores se vuelven array
        })
            return active
        }
        else{//en caso de que no, devolver objetos con todo false numero igual a la cantidad de elemento en lista!
            const falseList = list.map((e) => {return e === list[-1] ? 'aqui hay un error de logica' : false})
            return falseList
        }
            
    }
    const allergiesValues = checkValues('Alergias', allergies)
    console.log(allergiesValues)
    //const diseasesValues = checkValues('Enfermedades Cronicas', cronicDiseases)
    //const discapacitiesValues = checkValues('Discapacidades', discapacities)
    const userValues = {//los primeros 6 no van a cambiar
        "Cedula":extractedVales[0],
        "Nombre":extractedVales[1],
        "Apellido":extractedVales[2],
        "Genero":extractedVales[3],
        "Nacimiento":extractedVales[4],
        "Tipo de Sangre":extractedVales[5],

        "Paracetamol":allergiesValues[0],//alergias
        "Polen":allergiesValues[1], 
        "Polvo":allergiesValues[2], 
        "Lactosa":allergiesValues[3]
    }

    return userValues 
}

export{getUserValues}


// let viewAllTasks = async function (){
//     fetch(this.state.baseUrl)
//     .then(response => response.json()) 
//     .then(data => {let x = [];let ALLDATA = [];
//         data.forEach(element => {x.push([element.name, element.description, element.id])});
//         x.forEach(element => {ALLDATA.push(element)})
//         this.setState({taskList : ALLDATA});
//     })
//}

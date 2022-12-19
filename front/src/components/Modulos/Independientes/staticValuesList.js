const bloodTypes = ['A+','B+','AB+','O+','A-','B-','AB-','O-', 'Desconocido'];
const genders = ['Masculino','Femenino','Otro'];



const symptoms = ['Fiebre', 'Dolor de Cabeza', 'Tos', 'Tos Seca', 'Mareos', 'Nauseas',' Vomitos','Dolores Estomacales','Dolores Abdominales']

const registerTargetIds = [
    'Cedula', 'Nombre', 'Apellido', 'Genero','Nacimiento', 'Tipo de Sangre'
]
const oc ={
    irumi:{nombre:"Irumi", apellido:"FrozenHeart", identificacion:"27080311", fecha_de_nacimiento:'07-01-1999', direccion: 'Ciudad Jardin', tipo_sangre:'A+', sexo: 'femenino'},
    monica:{nombre:"Monica", apellido:"Strikes", identificacion:"27080555", fecha_de_nacimiento:'01-01-2006', direccion: 'el cerro', tipo_sangre:'B+', sexo: 'femenino'} ,
    poison:{nombre:"Poison", apellido:"Poison", identificacion:"27080301", fecha_de_nacimiento:'01-10-2006', direccion: 'Ciudad Jardin', tipo_sangre:'AB+', sexo: 'femenino'},
    karen:{nombre:"Karen", apellido:"Oletto", identificacion:"27080333", fecha_de_nacimiento:'05-05-2000', direccion: 'Ciudad Jardin', tipo_sangre:'O+', sexo: 'femenino'} ,
    omega:{nombre:"Omega", apellido:"@", identificacion:"27080311", fecha_de_nacimiento:'01-02-2006', direccion: 'Ciudad Jardin', tipo_sangre:'A+', sexo: 'femenino'} ,
    tomate:{nombre:"Tomate", apellido:"AlaPlancha", identificacion:"27080311", fecha_de_nacimiento:'19-11-1999', direccion: 'CJ', tipo_sangre:'O-', sexo: 'masculino'} , 
    rebecca:{nombre:"Rebecca", apellido:"Knows", identificacion:"27060322", fecha_de_nacimiento:'20-11-1999', direccion: 'athenas', tipo_sangre:'O+', sexo: 'femenino'} , 
}


// const RegisterTargetIds = [
//     'Altura: id' ,'Peso: id', 'Presion Arterial: id','Temperatura: id', 'Grados: id', 'Motivo Visita: id',
//     'Cedula: id', 'Nombre: id', 'Apellido: id', 'Genero: id', 'Tipo de Sangre: id',
//     'Alergias: id', 'Enfermedades Cronicas: id', 'Discapacidades: id', 'Tipo de Sangre: id','Sector'
// ]

export {bloodTypes, genders, registerTargetIds, oc, symptoms}
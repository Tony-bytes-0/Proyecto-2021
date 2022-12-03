const bloodTypes = ['A+','B+','AB+','O+','A-','B-','AB-','O-', 'Desconocido'];
const genders = ['Masculino','Femenino','Otro'];



const symptoms = ['Fiebre', 'Dolor de Cabeza', 'Tos', 'Tos Seca', 'Mareos', 'Nauseas',' Vomitos','Dolores Estomacales','Dolores Abdominales']

const registerTargetIds = [
    'Cedula', 'Nombre', 'Apellido', 'Genero','Nacimiento', 'Tipo de Sangre'
]
const objectExample = {
    "Cedula":"2020202",
    "Nombre":"El Pepe",
    "Apellido":"top 10 memes",
}

// const RegisterTargetIds = [
//     'Altura: id' ,'Peso: id', 'Presion Arterial: id','Temperatura: id', 'Grados: id', 'Motivo Visita: id',
//     'Cedula: id', 'Nombre: id', 'Apellido: id', 'Genero: id', 'Tipo de Sangre: id',
//     'Alergias: id', 'Enfermedades Cronicas: id', 'Discapacidades: id', 'Tipo de Sangre: id','Sector'
// ]

export {bloodTypes, genders, registerTargetIds, objectExample, symptoms}
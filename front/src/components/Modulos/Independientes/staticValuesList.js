const bloodTypes = ['A+','B+','AB+','O+','A-','B-','AB-','O-', 'Desconocido'];
const genders = ['Masculino','Femenino','Otro'];
const allergies = ['Paracetamol', 'Polen', 'Polvo', 'Lactosa','Antibioticos']
const cronicDiseases = ['Epilepsia','Cancer', 'Diabetes', 'Artritis', 'Asma']
const discapacities = ['Miopia', 'Autismo', 'Sordo', 'Mudo']

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

export {bloodTypes, genders, allergies, cronicDiseases, discapacities, registerTargetIds, objectExample}
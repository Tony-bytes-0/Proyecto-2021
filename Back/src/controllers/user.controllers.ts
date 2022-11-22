import { Request, Response } from "express"
import { error } from "console"
import { User } from "../entities/user"

export const createUser = async (req: Request, res: Response) => {//crear uno
    try {
        const {name, lastName} = req.body

        //throw new Error('algo malo ocurrio!!!')
        //aca se asignan los datos recibidos, a las columnas correspondientes
        const user = new User();
        user.name = name;
        user.lastName = lastName;

        await user.save()//para guardar en la base de datos
        
        res.json( user )
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getUsers = async (req: Request, res: Response) =>{//buscar todos
    try {//esto consulta la base de datos
        const users = await User.find();
        return res.json(users)

    } catch (error) {
        console.log(error)
    }
}


export const getUser = async (req: Request, res: Response) =>{//buscar uno
    try {
        const {id} = req.params
        const user = await User.findOneBy({id: parseInt( id )})
        return res.json({message:'retorno con exito!!!', user})

    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params;

        //buscar en base de datos por columna id
        const user = await User.findOneBy({id: parseInt(req.params.id)})

        if (!user) res.status(404).json({message: 'no se ha encontrado un usuario con id'+ req.params.id})
        
        await User.update({id: parseInt(id)}, req.body)//esto hace match con el segundo parametro
        
        return res.sendStatus(204);

    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params

        const result = await User.delete({ id: parseInt(id) })
        //en caso de no errores, al no existir el id a buscar se mostrara un mensaje
        if(result.affected === 0){return res.status(404).json({message:'persona no encontrada por id: ',id})}

        return res.sendStatus(204)
    } catch (error) {
        res.send(404)
    }
}




// export const updateUser = async (req: Request, res: Response) =>{// forma alternativa de hacer update, pero mas manual
//     try {
//         const {name, lastName} = req.body
//         const user = await User.findOneBy({id: parseInt(req.params.id)})
        
//         //si el id de usuario no existe, envia una respuesta anticipada
//         if (!user) res.status(404).json({message: 'no se ha encontrado un usuario con id'+ req.params.id})
//         else{//de lo contrario, cambia los datos
//             user.name = name
//             user.lastName = lastName
//             user.save()
//         };

//         return res.json('recibido!')
//     } catch (error) {
//         console.log(error)
//     }
// }
import { Request, Response } from "express"
import { User } from "../entities/user"

export const createUser = async (req: Request, res: Response) => {
    const {name, lastName} = req.body

    const user = new User();
    user.name = name;
    user.lastName = lastName;

    await user.save()//para guardar en la base de datos

    console.log(user)
    res.send('hola, soy un controlador')
}
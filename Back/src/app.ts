import  Express  from 'express';
import morgan from 'morgan';
import cors from 'cors';

//rutas
import userRoutes from './routes/user.routes'

 const app = Express();
 app.use(morgan('dev'));
 app.use(cors());
 app.use(Express.json())

 app.use(userRoutes)

 export default app;
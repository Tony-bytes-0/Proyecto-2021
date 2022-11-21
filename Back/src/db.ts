import {DataSource} from 'typeorm'
import {User} from './entities/user'

export const appDataSource = new DataSource({
    type:'postgres',
    host:'localhost',
    username:'postgres',
    password:'lonson123',
    database:'typeormdb',
    port: 5432,
    entities:[User],
    logging: true,
    synchronize: true
})
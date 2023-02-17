import { Router } from "../deps.ts";

import {
    createUser,
    deleteUser,
    findUser,
    updateUser
} from '../handlers/user.ts'


export const routerApi = new Router()

routerApi
.get('/api',ctx=>{
    ctx.response.body=`Hola estamos escuchando`
})
.get('/api/users', (ctx) => {
    ctx.response.body = 'Bienvenido a esta api'
})
.get('/api/users/:userid', findUser)
.post('/api/users', createUser)
.delete('/api/users/:userId', deleteUser)
.patch('/api/users', updateUser)


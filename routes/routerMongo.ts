import { Router } from "../deps.ts";

export const routerMongo = new Router()

routerMongo
.get("/api/qoute",ctx=>{
    ctx.response.body = `Hola a todos soy la rutaMongo`
})
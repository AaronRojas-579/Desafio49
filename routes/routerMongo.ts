import { Router } from "../deps.ts";
import { getQuotes,addQuote, deleteQuote, getQuote, updateQuote } from '../handlers/qoutes.ts'

export const routerMongo = new Router()

routerMongo
.get("/api/qoute",ctx=>{
    ctx.response.body = `Hola a todos soy la rutaMongo`
})
.get("/api/quotes", getQuotes)
.get("/api/quote/:id", getQuote)
.post("/api/quote", addQuote)
.put("/api/quote/:id", updateQuote)
.delete("/api/quote/:id", deleteQuote)

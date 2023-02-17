import {Application,config}  from "./deps.ts"

import {routerApi} from "./routes/routes.ts"
import {routerMongo} from "./routes/routerMongo.ts"


const configData = await config()
const app = new Application();

const PORT = configData['PORT'] || 8080

//Siempre que querramos usar routes lo deberemos instanciar de esta manera
app.use(routerApi.routes());
app.use(routerApi.allowedMethods());
//--------------
app.use(routerMongo.routes())
app.use(routerMongo.allowedMethods())

console.log(`Servidor escuchando desde el puerto ${PORT}`)
await app.listen({port:Number(PORT)})
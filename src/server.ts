import express from "express";
import {serverConfig} from "./config/index.ts";
import v1Router from "./routers/v1/index.router.ts";
import v2Router from "./routers/v2/index.router.ts";

const app = express();
const PORT = serverConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


/**
 * Registering all the routes and their corresponding  routes with our app server object
 */
app.use('/api/v1',v1Router);
app.use('/api/v2',v2Router);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost: ${PORT}`);
})

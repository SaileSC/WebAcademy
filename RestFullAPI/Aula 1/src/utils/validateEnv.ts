import {cleanEnv, port, str } from "envalid";

function validadeEnv(){
    cleanEnv(process.env, {
        PORT:port(),
        NODE_ENV: str()
    })
}


export default validadeEnv
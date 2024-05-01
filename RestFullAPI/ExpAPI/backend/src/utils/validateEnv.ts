import {cleanEnv, port, str } from "envalid";

function validadeEnv(){
    cleanEnv(process.env, {
        PORT:port(),
        NODE_ENV: str(),
        DEFAULT_LANG: str({choices:["pt-BR", "en-US"]}),
    })
}


export default validadeEnv
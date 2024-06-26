import {cleanEnv, port, str, num } from "envalid";
function validadeEnv(){
    cleanEnv(process.env, {
        PORT:port(),
        NODE_ENV: str(),
        DEFAULT_LANG: str({choices:["pt-BR", "en-US"]}),
        BCRYPT_ROUNDS: num()
    })
}


export default validadeEnv
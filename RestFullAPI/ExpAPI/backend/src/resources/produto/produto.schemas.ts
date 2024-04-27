import Joi from "joi";

// Alternativa {Usar o Zod : voltado para typescript}
export const produtoScheme = Joi.object().keys({
    nome: Joi.string().min(3).allow("oi").max(50).required().lowercase(),
    preco: Joi.number().positive().required(),
    //estoque: Joi.custom((value) => value == 0 ? 0 : 1),
    estoque: Joi.number().positive().integer().required(),
    tags: Joi.array().items(Joi.string()),
}).messages({
    "number.positive": "O {#label} precisa ser positivo. Portanto o valor {#value} nao e aceito",
    "any.required": "O campo {#label} nao pode ser vazio",
    "object.unknown": " O campo {#label} nao existe no corpo"
})

//dicas uso de mensagem custom 
//https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages

// const produto = {
//     nome: "ola",
//     preco: 4.5,
//     estoque: 10,
//     tags: ["celular", "motorola"]
// }

// const { error , value } = produtoScheme.validate(produto, {
//     abortEarly:false
//     //convert:false
// })
// if(error) console.log(error.details)
// console.log(value)
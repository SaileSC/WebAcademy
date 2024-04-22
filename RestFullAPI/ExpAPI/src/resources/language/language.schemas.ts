import Joi from "joi";

export const languageSchemas = Joi.object().keys({
    lang: Joi.valid("pt-BR", "en-US").required()
})
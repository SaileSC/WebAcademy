import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ChangeLangDto } from "./language.types";

const changeLanguage = (req: Request, res:Response) => {
    const { lang } = req.body as ChangeLangDto;
    res.cookie("lang", lang, {maxAge  : 360000}); //maxAge define tempo maximo para expiração do cookie
    res.status(StatusCodes.NO_CONTENT).json()
}

export default { changeLanguage}
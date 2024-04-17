import express, {Request, Response} from "express";
import { StatusCodes } from "http-status-codes";

const index = async (req:Request, res:Response) => {
    res.status(StatusCodes.OK).send("index Produto")
}

const create = async (req:Request, res:Response) => {
    res.send("create produto")
}

const read = async (req:Request, res:Response) => {
    res.send("read produto")
}

const update = async (req:Request, res:Response) => {
    res.send("update produto")
}

const remove = async (req:Request, res:Response) => {
    res.send("remove produto")
}

export default {index, create, read, update, remove}
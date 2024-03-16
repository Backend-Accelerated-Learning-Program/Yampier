import {  Request, Response } from "express";
import PlayerModel from "../model/playerModel";


export const post=(req: Request, res: Response) => {
    const player = req.body
   
    res.send(player)
}

export const get=async (req: Request, res: Response) => {
    const data = await PlayerModel.find({})
    res.status(200).send(data)
}
export const getById=async (req: Request, res: Response) => {
    const{_id} = req.params
    const data = await PlayerModel.findById({_id})
    res.status(200).send(data)
}

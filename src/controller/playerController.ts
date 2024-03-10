import {  Request, Response } from "express";

type Stats = {
    STR: number,
    AGI: number,
    INT: number,
}

type Class = 'WARRIOR' | 'MAGE' | 'ROUGE' ;

type Player = {
   name: string,
   class: string,
   stats: Stats,
}

type DB = {
    [name:string]: Player
}

const db:DB = {

}

export const post=(req: Request, res: Response) => {
    const player = req.body
    db[player.name] = player;
    res.send(player)
}

export const get=(req: Request, res: Response) => {
    const {name} = req.params
    res.send(db[name])
}


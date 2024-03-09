import { Router, Request, Response } from "express";

const playerRouter: Router = Router()

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

playerRouter.post('/', (req: Request, res: Response) => {
    const player = req.body
    db[player.name] = player;
    res.send(player)
})

playerRouter.get('/:name', (req: Request, res: Response) => {
    const {name} = req.params
    res.send(db[name])
})

export default playerRouter;
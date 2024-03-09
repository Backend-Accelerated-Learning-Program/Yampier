import { Router, Request, Response } from "express";

const itemRouter: Router = Router()

    itemRouter.get('/', (req: Request, res: Response) => {
        res.send("Hello player, this is your item!")
    })

    export default itemRouter;
import { Router, Request, Response } from "express";

const weaponRouter: Router = Router()

    weaponRouter.get('/', (req: Request, res: Response) => {
        res.send("Hello player, this is your weapon!")
    })

    export default weaponRouter;
import { Router, Request, Response } from "express";
import { post, get } from "../controller/playerController";
const playerRouter: Router = Router()

playerRouter.post('/', post)

playerRouter.get('/:name', get)

export default playerRouter;
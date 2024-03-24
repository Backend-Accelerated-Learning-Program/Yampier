import { Router, Request, Response } from "express";
import { post, get, getById, put, remove, restore, getActive } from "../controller/playerController";

const playerRouter: Router = Router();

playerRouter.get('/', get);
playerRouter.get('/active', getActive);
playerRouter.get('/:_id', getById);
playerRouter.post('/', post);
playerRouter.put('/', put);
playerRouter.put('/:_id/restore', restore);
playerRouter.delete('/:_id', remove);
//WHEN YOU CREAT AND IMPORT A NEW PLAYER ROUTER YOU GET ERROR, UNTIL YOU USE IT(in the controller for example here)

export default playerRouter;
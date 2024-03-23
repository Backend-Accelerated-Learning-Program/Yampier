import { Router, Request, Response } from "express";
import { post, get, getById, put} from "../controller/playerController";

const playerRouter: Router = Router();

playerRouter.post('/', post);
playerRouter.get('/:_id', getById);
playerRouter.get('/', get);
playerRouter.put('/', put);

//WHEN YOU CREAT AND IMPORT A NEW PLAYER ROUTER YOU GET ERROR, UNTIL YOU USE IT(in the controller for example here)

export default playerRouter;
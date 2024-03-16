import { Router, Request, Response } from "express";
import { post, get, getById} from "../controller/playerController";

const playerRouter: Router = Router();

playerRouter.post('/', post);
playerRouter.get('/:_id', getById);
playerRouter.get('/', get);

export default playerRouter;
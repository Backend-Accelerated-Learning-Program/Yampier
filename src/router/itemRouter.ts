import { Router, Request, Response } from "express";
import { post, get, getById, put} from "../controller/itemController";

const itemRouter: Router = Router();

itemRouter.post('/', post);
itemRouter.get('/:_id', getById);
itemRouter.get('/', get);
itemRouter.put('/', put);

//WHEN YOU CREATE AND IMPORT A NEW PLAYER ROUTER YOU GET ERROR, UNTIL YOU USE IT(in the controller for example here)

export default itemRouter;
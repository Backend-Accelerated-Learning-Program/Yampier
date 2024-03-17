import {  NextFunction, Request, Response } from "express";
import PlayerModel from "../model/playerModel";
import { ERROR_TYPES } from "../middleware/errorHandler";


export const post=(req: Request, res: Response) => {
    const player = req.body
   
    res.send(player)
}

export const get=async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await PlayerModel.find({});

        if(!data)              throw new Error(ERROR_TYPES.internalError.message)
        if(data.length == 0)   throw new Error(ERROR_TYPES.notFoundError.message)  
    
    res.status(200).send(data)
    } catch (error) {
        next(error)
        
    }
}
export const getById=async (req: Request, res: Response, next: NextFunction) => {
    try {
    const{_id} = req.params
    const data = await PlayerModel.findById({_id}).catch(error=>{
        throw new Error(ERROR_TYPES.badRequestError.message)
    })

    if(!data)              throw new Error(ERROR_TYPES.notFoundError.message)


    res.status(200).send(data)
    } catch (error) {
        next(error)
        
    }


    
}

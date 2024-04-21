import {  NextFunction, Request, Response } from "express";
import PlayerModel from "../model/playerModel";
import { ERROR_TYPES } from "../middleware/errorHandler";
import { createInventory, getInventory } from "./inventoryController";
//Use the moongose documentation to find out how to do functions(like post, put, get, etc.)
export const post= async(req: Request, res: Response) => {
    const data = req.body;
    const player = new PlayerModel(data)
    const doc= await player.save();
    const inventory = await createInventory(doc._id);

    res.send({...doc.toJSON(), inventory});
}

export const put= async(req: Request, res: Response) => {
    const data = req.body;
    const filter = { _id: data._id }
    const options = { "new": true } //confirm that you want to change
    const doc=await PlayerModel.findOneAndUpdate(filter, data, options )

    res.send(doc);
}



export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await PlayerModel.find({});

        if(!data)              throw new Error(ERROR_TYPES.internalError.message)
        if(data.length == 0)   throw new Error(ERROR_TYPES.notFoundError.message)  
    
    res.status(200).send(data)
    } catch (error) { 
        next(error)
    }
}
export const getActive = async (req: Request, res: Response, next: NextFunction) => {
   try  {

        const data = await PlayerModel.find({ active:true });

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
    const doc = await PlayerModel.findById({_id}).catch(error=>{
        throw new Error(ERROR_TYPES.badRequestError.message)
    })

    if(!doc)              throw new Error(ERROR_TYPES.notFoundError.message)
    const inventory= await getInventory( doc._id );

    res.status(200).send({...doc.toJSON(), inventory})
    } catch (error) {
        next(error)
    }
   
}

export const remove=async (req: Request, res: Response, next: NextFunction) => {
    try {
    const{_id} = req.params
    const filter = { _id: _id }
    const options = { "new": true } //confirm that you want to change
    const doc=await PlayerModel.findOneAndUpdate(filter, { active:false }, options ).catch(error=>{
        throw new Error(ERROR_TYPES.badRequestError.message)
    })

    if(!doc)              throw new Error(ERROR_TYPES.notFoundError.message)
    res.status(200).send(doc)
    } catch (error) {
        next(error)
    }
   
}
export const restore=async (req: Request, res: Response, next: NextFunction) => {
    try {
    const{_id} = req.params
    const filter = { _id: _id }
    const options = { "new": true } //confirm that you want to change
    const doc=await PlayerModel.findOneAndUpdate(filter, { active:true }, options ).catch(error=>{
        throw new Error(ERROR_TYPES.badRequestError.message)
    })

    if(!doc)              throw new Error(ERROR_TYPES.notFoundError.message)
    res.status(200).send(doc)
    } catch (error) {
        next(error)
    }
   
}


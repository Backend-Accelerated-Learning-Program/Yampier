import {  NextFunction, Request, Response } from "express";
import itemModel from "../model/itemModel";
import { ERROR_TYPES } from "../middleware/errorHandler";
import ItemModel from "../model/itemModel";

//Use the moongose documentation to find out how to do functions(like post, put, get, etc.)
export const post= async(req: Request, res: Response) => {
    const data = req.body;
    const item = new itemModel(data)
    const doc=await item.save();

    res.send(doc);
}

export const put= async(req: Request, res: Response) => {
    const data = req.body;
    const filter = { _id: data._id }
    const options = { "new": true } //confirm that you want to change
    const doc=await itemModel.findOneAndUpdate(filter, data, options )

    res.send(doc);
}

export const get=async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await itemModel.find({});

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
    const data = await itemModel.findById({_id}).catch(error=>{
        throw new Error(ERROR_TYPES.badRequestError.message)
    })

    if(!data)              throw new Error(ERROR_TYPES.notFoundError.message)


    res.status(200).send(data)
    } catch (error) {
        next(error)
        
    }


    
}

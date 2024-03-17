import { NextFunction,Request,Response } from "express"

export const ERROR_TYPES = {
    internalError: {
        errorcode: 500,
        message: "Internal Error"
    },
    notFoundError:{
        errorcode: 404,
        message: "Not found"
    },
    authError:{
        errorcode: 401,
        message: "Auth error"
    },
    badRequestError:{
        errorcode: 400,
        message: "Bad request error"
    }


    
}

export const errorHandler=(error: Error, req: Request, res: Response, next: NextFunction)=>{
    if(error.message==ERROR_TYPES.internalError.message){
        res.status(ERROR_TYPES.internalError.errorcode).send({
            errorcode: ERROR_TYPES.internalError.errorcode,
            message: error.message
        })
    }
    if(error.message==ERROR_TYPES.notFoundError.message){
        res.status(ERROR_TYPES.notFoundError.errorcode).send({
            errorcode: 404,
            message: ERROR_TYPES.notFoundError.message
        })
    }
    if(error.message==ERROR_TYPES.badRequestError.message){
        res.status(ERROR_TYPES.badRequestError.errorcode).send({
            errorcode: 400,
            message: ERROR_TYPES.badRequestError.message
        })
    }
    res.send(error.message)
}
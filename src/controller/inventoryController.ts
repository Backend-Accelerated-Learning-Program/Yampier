import {  NextFunction, Request, Response } from "express";
import PlayerModel from "../model/playerModel";
import mongoose from "mongoose";
import InventoryModel from "../model/inventoryModel";


//Use the moongose documentation to find out how to do functions(like post, put, get, etc.)
export const createInventory= (player:mongoose.Types.ObjectId) => {
    const inventory = new InventoryModel({player})
    return inventory.save();
}
export const getInventory= (player:mongoose.Types.ObjectId) => {
    return InventoryModel.findById({player})
}

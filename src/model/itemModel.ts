import mongoose from "mongoose";
import IItem from "../types/Item";



const ItemSchema = new mongoose.Schema<IItem>({
   name: {
    type: String,
    required: true
   }
}, {collection: "item"})

const ItemModel = mongoose.model<IItem>('Item', ItemSchema);
export default ItemModel;



import mongoose from "mongoose";
import IItem from "../types/Item";



const ItemSchema = new mongoose.Schema<IItem>({
   name: {
    type: String,
    required: true
   },
   value:{
      type: Number,
      required: false,
      default: 0
   },
   active: {
      type:Boolean,
      required: false,
      default: true
     }
}, {collection: "item"})

const ItemModel = mongoose.model<IItem>('Item', ItemSchema);
export default ItemModel;



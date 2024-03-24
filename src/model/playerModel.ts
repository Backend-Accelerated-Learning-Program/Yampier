import mongoose from "mongoose";
import IPlayer from "../types/Player";


const PlayerSchema = new mongoose.Schema<IPlayer>({
   name: {
    type: String,
    required: true
   },
   class: {
      type: String,
      required: true,
      default: "Rookie"
     },
     active: {
      type:Boolean,
      required: false,
      default: true
     }
}, {collection: "player"})

const PlayerModel = mongoose.model<IPlayer>('Player', PlayerSchema);
export default PlayerModel;



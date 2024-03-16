import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
   }
}, {collection: "player"})

const PlayerModel = mongoose.model('Player', PlayerSchema);
export default PlayerModel;



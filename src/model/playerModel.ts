import mongoose from "mongoose";
import IPlayer from "../types/Player";
import { IStats } from "../types/Player";

function calculateMaxXP(LVL: number): number{
   return LVL*100
}

const PlayerSchema = new mongoose.Schema<IPlayer>({
   name: {
    type: String,
    required: true
   },
   job: {
      type: String,
      required: true,
      default: "Rookie"
     },
     active: {
      type:Boolean,
      required: false,
      default: true
     },
     stats: {
      type: {} as IStats,
      required: false,
      default: {
         LVL: 0,
         XP: 0,
         HP: 10,
         MP: 10,
         STR: 10,
         DEX: 10,
         INT: 10
      }
     }
}, {collection: "player", methods:{
 
addExperience(player: IPlayer, XP: number) {
   let tmp = this.stats.XP + XP;
   let max = calculateMaxXP(this.stats.LVL);
   let result = Math.trunc( tmp/max);
   console.log(`tmp: ${tmp}, max: ${max}, result: ${result}`)
   while(result>0){
       player.stats.LVL++;
       tmp-= max;
       max = calculateMaxXP(player.stats.LVL);
       result= tmp/max;
   }
   this.stats.XP= tmp;
}
}

})

const PlayerModel = mongoose.model<IPlayer>('Player', PlayerSchema);
export default PlayerModel;



import mongoose, { Collection } from "mongoose";
import IInventory from "../types/inventory";
import IArmor from "../types/Armor";
import IWeapon from "../types/weapon";
import IConsumable from "../types/consumables";

function calculateMaxXP(LVL: number): number{
   return LVL*100
}

const InventorySchema = new mongoose.Schema<IInventory<IArmor, IConsumable, IWeapon>>({
   player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player',
      required: true
   },
   armor: {
      type: [] as Array<IArmor>,
      required: false,
      default: []
   },
   consumables: {
      type: [] as Array<IConsumable>,
      required: false,
      default: []
   },
   weapons: {
      type: [] as Array<IWeapon>,
      required: false,
      default: []
   }

},{collection: 'inventory'})

const InventoryModel = mongoose.model<IInventory<IArmor, IConsumable, IWeapon>>("Inventory", InventorySchema);
export default InventoryModel;



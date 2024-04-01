import IWeapon from "./weapon";
import IArmor from "./Armor";
import IConsumable from "./consumables";
import { Schema } from "mongoose";

interface IInventory <A extends IArmor,C extends IConsumable, W extends IWeapon>{
    player: Schema.Types.ObjectId;
    armor: Array<A>;
    consumables: Array<C>;
    weapons: Array<W>;
}
export default IInventory;
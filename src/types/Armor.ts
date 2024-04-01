import IItem from "./Item";
import IPlayer from "./Player";

interface IArmor extends IItem{
    armor: number;
    armorClass: "CLOTH" | "MAIL" | "PLATE" | "LEATHER";
    durability: number;
}
export default IArmor;
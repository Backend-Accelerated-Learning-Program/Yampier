import IEntity from "./Entity";
import IPlayer from "./Player";



interface IItem extends IEntity{
    type: "CONSUMABLE" | "WEAPON" | "ARMOUR"
    place:string;
    value: number;
    use(player: IPlayer): IPlayer;
}

 export default IItem;
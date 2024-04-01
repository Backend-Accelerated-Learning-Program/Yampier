import IItem from "./Item";
import IPlayer from "./Player";

interface IWeapon extends IItem{
    damage: number;
    damageType: "SHARP" | "BLUNT" | "ELEMENTAL"
    durability: number;
    use(player: IPlayer): IPlayer;
}

export default IWeapon;
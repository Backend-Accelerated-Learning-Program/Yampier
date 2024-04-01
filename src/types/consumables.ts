import IItem from "./Item";
import IPlayer from "./Player";

interface IConsumable extends IItem{
    uses: number;
    use(player: IPlayer): IPlayer;

}
export default IConsumable;
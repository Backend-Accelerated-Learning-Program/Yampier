import IEntity from "./Entity";

export interface IStats{
    LVL: number;
    XP: number;
    HP: number;
    MP: number;
    STR: number;
    DEX: number;
    INT: number;
}

interface IPlayer extends IEntity{
    name:string;
    active:boolean;
    job: string;
    stats: IStats;

    addExperience(player: IPlayer, XP: number): IPlayer;
}
    

 export default IPlayer;
import IEntity from "./Entity";

interface IStats{
    LVL: number;
    XP: number;
    HP: number;
    MP: number;
    STR: number;
    DEX: number;
    INT: number;
}

class IPlayer implements IEntity{
    name:string;
    active:boolean;
    job: string;
    stats: IStats;

    constructor(name: string, job: string){
        this.name =name;
        this.job=job;
        this.active=true
        this.stats = {
            LVL: 1,
            XP: 0,
            HP: 100,
            MP: 50,
            STR: 10,
            DEX: 20,
            INT: 7
        }
    }
    levelUp(){
        this.stats.LVL ++;
    }
    addExperience(XP: number) {
        let tmp = this.stats.XP + XP;
        let max = this.calculateMaxXP();
        let result = Math.trunc( tmp/max);
        console.log(`tmp: ${tmp}, max: ${max}, result: ${result}`)
        while(result>0){
            this.levelUp();
            tmp-= max;
            max = this.calculateMaxXP();
            result= tmp/max;
        }
        this.stats.XP= tmp;
    }
    calculateMaxXP(): number{
        return this.stats.LVL*100
    }
    toString(): string {
        return  `——————————————————————————————————\n`  +
                `——     ${this.name} the ${this.job}        ——` + '\n'
        +       `——     Level: ${this.stats.LVL}    XP: ${this.stats.XP}        ——` + '\n'
        +       `——     HP: ${this.stats.HP}    MP: ${this.stats.MP}       ——` + '\n'
        +       `——     STR: ${this.stats.STR}    DEX: ${this.stats.DEX}       ——` + '\n'
        +       `——     INT: ${this.stats.INT}                  ——` + '\n'
        +       `——————————————————————————————————\n`;
    }
}

 export default IPlayer;
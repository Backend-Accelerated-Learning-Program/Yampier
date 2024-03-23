import IEntity from "./Entity";

interface IShop<T extends IEntity> extends IEntity{
    catalog: Array<T>;
}

 export default IShop;
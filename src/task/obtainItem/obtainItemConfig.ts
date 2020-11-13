import { TaskConfig } from "../taskConfig";

export class ObtainItemConfig extends TaskConfig {
    public maxWalkDistance: number = 5;
    public maxFindBlockDistance: number = 50;
    public blockMaterial: string = 'grass';
}
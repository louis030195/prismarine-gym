import { Rank, Tensor } from "@tensorflow/tfjs";
import { Task } from "./task";

export class HierarchicalTask extends Task {
    public reset(): Tensor<Rank> {
        throw new Error("Method not implemented.");
    }
    public step(action: number): [Tensor<Rank>, number, boolean, {}] {
        throw new Error("Method not implemented.");
    }
}

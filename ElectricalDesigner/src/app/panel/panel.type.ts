import { Circuit } from "../circuit/circuit.type";

export interface Panel {
    id: string;
    name: string;
    circuits: Circuit[]
}

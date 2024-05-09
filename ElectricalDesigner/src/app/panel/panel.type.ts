import { Circuit } from "../circuit/circuit.type";

export interface Panel {
    id: string;
    name: string;
    manufacturer: string;
    model: string;
    amperage: number;
    spaces: number;
    circuits: Circuit[]
}

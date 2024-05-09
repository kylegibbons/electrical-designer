import { Box } from "../box/box.type";
import { Panel } from "../panel/panel.type";

export interface Circuit {
    id: string;
    name: string;
    amperage: number;
    voltage: number;
    requireGFCI: boolean;
    requireAFCI: boolean;
    wireGauge: string;
    wireConductors: number;
    boxes: Box[];
    panel: Panel;
}

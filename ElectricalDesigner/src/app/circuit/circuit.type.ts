import { Box } from "../box/box.type";
import { Panel } from "../panel/panel.type";

export interface Circuit {
    id: string;
    name: string;
    amperage: number;
    boxes: Box[];
    panel: Panel
}

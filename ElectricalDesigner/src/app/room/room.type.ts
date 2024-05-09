import { Box } from "../box/box.type";
import { Panel } from "../panel/panel.type";

export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  boxes: Box[];
  panels: Panel[];
}

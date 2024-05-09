import { Panel } from "../panel/panel.type";
import { Room } from "../room/room.type";

export interface Project {
    id: string;
    name: string;
    description: string;
    rooms: Room[];
    panels: Panel[];
}

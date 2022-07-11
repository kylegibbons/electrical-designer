import { Device } from "../device/device.type";

export interface Box {
    id: string;
    name: string;
    devices: Device[];
}

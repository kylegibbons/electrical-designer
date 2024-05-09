import { Device } from "../device/device.type";

export interface Box {
    id: string;
    name: string;
    manufacturer: string;
    model: string;
    gangs: number;
    devices: Device[];
}

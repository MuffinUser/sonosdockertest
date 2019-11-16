import {DeviceDiscovery, Sonos} from "sonos";

export default class Sonostest {
    private gerat: Sonos;
    constructor(){
        console.log("Searching for Sonos device");
        DeviceDiscovery().once('DeviceAvailable', (device) => {
            this.gerat = new Sonos(device.host);
            console.log("Found Device:" + device);
        })
    }
}
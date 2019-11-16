"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sonos_1 = require("sonos");
class Sonostest {
    constructor() {
        console.log("Searching for Sonos device");
        sonos_1.DeviceDiscovery().once('DeviceAvailable', (device) => {
            this.gerat = new sonos_1.Sonos(device.host);
            console.log("Found Device:" + device);
        });
    }
}
exports.default = Sonostest;
//# sourceMappingURL=sonostest.js.map
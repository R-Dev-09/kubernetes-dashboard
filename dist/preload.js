"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('api', {
    send: (channel, data) => {
        const validChannels = ['toMain', 'requestSystemInfo'];
        if (validChannels.includes(channel))
            electron_1.ipcRenderer.send(channel, data);
    },
    receive: (channel, func) => {
        const validChannels = ['fromMain', 'getSystemInfo'];
        if (validChannels.includes(channel))
            electron_1.ipcRenderer.on(channel, (_, ...args) => func(...args));
    }
});

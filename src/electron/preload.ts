import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
    send: (channel: string, data: unknown) => {
      const validChannels = ['toMain', 'requestSystemInfo'];
      if (validChannels.includes(channel)) ipcRenderer.send(channel, data);
    },
    receive: (channel: string, func: (...args: unknown[]) => void) => {
      const validChannels = ['fromMain', 'getSystemInfo'];
      if (validChannels.includes(channel)) ipcRenderer.on(channel, (_, ...args) => func(...args));
    }
  }
);
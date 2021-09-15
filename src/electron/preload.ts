import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('windowAPI', {
  minimize: () => ipcRenderer.send('window', 'minimize'),
  toggle: () => ipcRenderer.send('window', 'toggle'),
  close: () => ipcRenderer.send('window', 'close')
});

contextBridge.exposeInMainWorld('api', {
  send: (data: Record<string, any>) => ipcRenderer.send('toMain', data),
  receive: (channel: string, cb: Function) => ipcRenderer.on(channel, (_, ...args) => cb(...args))
});
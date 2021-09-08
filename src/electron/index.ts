import { join } from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';

import('electron-reload').then(({ default: reload }) => reload(__dirname, {awaitWriteFinish: true}));

let mainWindow: BrowserWindow;

const createWindow = async () => {
  if (!mainWindow) {
    mainWindow = new BrowserWindow({
      title: ' Kubernetes Dashboard',
      icon: join(__dirname, '..', 'icon.ico'),
      autoHideMenuBar: true,
      show: false,
      backgroundColor: '#fff',
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        devTools: true,
        preload: join(__dirname, 'preload.js')
      }
    });
    await mainWindow.loadURL(join(__dirname, 'www', 'index.html'));
    mainWindow.once('ready-to-show', mainWindow.show);
  }
};

app.on('ready', async () => {
  app.name = 'Kubernetes Dashboard';
  await createWindow();
});

app.on('activate', async () => await createWindow());

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('requestSystemInfo', () => {
  const versionChrome = process.versions.chrome;
  const versionNode = process.versions.node;
  const versionElectron = process.versions.electron;
  const result = {
    chrome: versionChrome,
    node: versionNode,
    electron: versionElectron
  }
  mainWindow.webContents.send('getSystemInfo', result);
});
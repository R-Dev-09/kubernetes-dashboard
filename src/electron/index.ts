import { join } from 'path';
import { app, BrowserWindow, ipcMain, shell, session } from 'electron';
import { isSafe } from './helpers';

import('electron-reload').then(({ default: reload }) => reload(__dirname, {awaitWriteFinish: true}));

let mainWindow: BrowserWindow | null = null;

const createWindow = async () => {
  if (!mainWindow) {
    mainWindow = new BrowserWindow({
      title: ' Kubernetes Dashboard',
      icon: join(__dirname, '..', 'kubernetes.ico'),
      frame: false,
      show: false,
      backgroundColor: '#fff',
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: true,
        devTools: true,
        preload: join(__dirname, 'preload.js')
      }
    });
    // mainWindow.maximize();
    mainWindow.webContents.openDevTools();
    await mainWindow.loadFile(join(__dirname, 'www', 'index.html'));
    mainWindow.once('ready-to-show', mainWindow.show);
  }
};

app.on('ready', async () => {
  app.name = 'Kubernetes Dashboard';
  await createWindow();
  session.defaultSession.setPermissionRequestHandler((webContents, permission, cb) => {
    if (['notification'].includes(permission)) cb(true);
    if (!isSafe(webContents.getURL())) cb(false);
  });
});

app.on('activate', async () => await createWindow());

app.on('window-all-closed', () => process.platform !== 'darwin' && (app.quit()));

app.on('web-contents-created', (_, contents) => {
  contents.setWindowOpenHandler(({ url }) => {
    if (isSafe(url)) setImmediate(() => shell.openExternal(url));
    return { action: 'deny' }
  });
  contents.on('will-attach-webview', (event, webPreferences, { src }) => {
    delete webPreferences.preload;
    webPreferences.nodeIntegration = false;
    if (!isSafe(src)) event.preventDefault();
  });
});

ipcMain.on('window', (_, action) => {
  switch (action) {
    case 'minimize': mainWindow?.minimize(); break;
    case 'toggle':
      mainWindow?.isMaximized() ? mainWindow?.unmaximize() : mainWindow?.maximize();
      mainWindow?.webContents.send('window', mainWindow?.isMaximized());
      break;
    case 'close': mainWindow?.close(); break;
    default: break;
  }
});

ipcMain.on('toMain', (_, { channel, req }: any) => {
  switch (req) {
    case 'maxed': mainWindow?.webContents.send(channel, mainWindow?.isMaximized()); break;
    default: break;
  }
});
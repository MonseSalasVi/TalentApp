//primero cambiar del packge.json   "start": "react-scripts start"   despues npm start
//despues cambiar del packge.json    "start": "electron ."          despues npm start

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680
  });
  mainWindow.loadURL(
    isDev ?
    'http://localhost:3000' :
    `file://${path.join(__dirname, '../build/index.html')}`
  );
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// ----------------- op2
// const electron = require('electron');

// const { app, BrowserWindow } = require('electron');

// function createWindow() {
//   // Crea la ventana del navegador.
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });

//   // and load the index.html of the app.
//   win.loadFile('index.html');

//   // Abre las herramientas de desarrollo (DevTools).
//   win.webContents.openDevTools();
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Algunas APIs pueden usarse sólo después de que este evento ocurra.
// app.whenReady().then(createWindow);

// // Quit when all windows are closed.
// app.on('window-all-closed', () => {
//   // En macOS es común para las aplicaciones y sus barras de menú
//   // que estén activas hasta que el usuario salga explicitamente con Cmd + Q
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', () => {
//   // En macOS es común volver a crear una ventana en la aplicación cuando el
//   // icono del dock es clicado y no hay otras ventanas abiertas.
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });
////////////////// op 1
// In this file you can include the rest of your app's specific main process
// code. También puedes ponerlos en archivos separados y requerirlos aquí.

// const { app, BrowserWindow } = require('electron');

// function createWindow() {
//   // Crea la ventana del navegador.
//   let win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });

//   // y carga el  index.html de la aplicación.
//   win.loadFile('index.html');
// }

// app.whenReady().then(createWindow);
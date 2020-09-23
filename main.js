// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
  // require('devtron').install()
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: true,
      nodeIntegration: true
    }
  })
  mainWindow.loadFile('index.html')
  ipcMain.on('fuckYou', (event, arg) => {
    console.log(arg)
  })
  mainWindow.webContents.openDevTools()
  console.log('go go go')
}

app.on('ready', () => {
  createWindow()
})
import * as electron from 'electron'
import {app, BrowserWindow} from 'electron'
import MenuUtils from './app/electron/menu'
import * as path from 'path'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
let mainWindow = null

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'app/assets/image/logo-128x128.png'),
    titleBarStyle: 'hidden'
  })

  // and load the index.html of the app.
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'))

  MenuUtils.initMenu()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  // For some reason, Electron shortcuts are registered
  // globally, which means that the app listers for shorcuts
  // even if its not currently focused, potentially interferring
  // with shorcuts registered by other applications.
  // As a workaround, we register all shortcuts when the windows
  // gains focus, and unregister them when the windows loses focus.
  // See http://electron.atom.io/docs/api/global-shortcut/

  mainWindow.on('focus', () => {
    electron.globalShortcut.register('CmdOrCtrl+Alt+I', () => {
      mainWindow.webContents.openDevTools({
        mode: 'undocked'
      })
    })
  })

  mainWindow.on('blur', () => {
    electron.globalShortcut.unregisterAll()
  })

  // Prevent external resources from being loaded (like images)
  // when dropping them on the WebView.
  // See https://github.com/electron/electron/issues/5919
  mainWindow.webContents.on('will-navigate', (event) => {
    event.preventDefault()
  })
}
// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', createWindow)

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// set dock icon on mac os x
if (process.platform === 'darwin') {
  app.dock.setIcon(path.join(__dirname, '/app/assets/image/logo-128x128.png'))
}

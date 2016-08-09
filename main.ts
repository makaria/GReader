import {app, BrowserWindow, ipcMain} from 'electron'
import MenuUtils from './app/electron/menuutils'
import * as path from 'path'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
let mainWindow = null
let readerWindow = null

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

const createMainWindow = () => {
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

   // Prevent external resources from being loaded (like images)
  // when dropping them on the WebView.
  // See https://github.com/electron/electron/issues/5919
  mainWindow.webContents.on('will-navigate', (event) => {
    event.preventDefault()
  })
}

const createReaderWindow = () => {
  // Create the browser window.
  readerWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'app/assets/image/logo-128x128.png'),
    titleBarStyle: 'hidden',
    show: false
  })

  // and load the index.html of the app.
  readerWindow.loadURL(path.join('file://', __dirname, 'reader.html'))

  // Emitted when the window is closed.
  readerWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.

    // create a new reader window
    createReaderWindow()

    // show main window
    if (mainWindow === null) {
      createMainWindow()
    }
    mainWindow.show()
  })

  // Prevent external resources from being loaded (like images)
  // when dropping them on the WebView.
  // See https://github.com/electron/electron/issues/5919
  readerWindow.webContents.on('will-navigate', (event) => {
    event.preventDefault()
  })
}

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', () => {
  createMainWindow()
  createReaderWindow()
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createMainWindow()
  }
  if (readerWindow === null) {
    createReaderWindow()
  }
})

// set dock icon on mac os x
if (process.platform === 'darwin') {
  app.dock.setIcon(path.join(__dirname, '/app/assets/image/logo-128x128.png'))
}

// bind ipc actions
ipcMain.on('open-reader', (event, arg) => {
  mainWindow.hide()
  readerWindow.show()
  readerWindow.webContents.send('reader-open-book', arg)
})

import {app, shell, dialog, BrowserWindow, Menu} from 'electron'

const menuTpl: Array<Electron.MenuItemOptions> = [
  {
    label: '&File',
    submenu: [
      {
        label: '&Open',
        accelerator: 'CmdOrCtrl+F',
        click (item, focusedWindow) {
          let filename = dialog.showOpenDialog({properties: ['openFile']})
          focusedWindow.webContents.send('file-open', filename)
        }
      },
      {
        label: '&Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      },
      {
        label: '&Preferences',
        click (item, focusedWindow) {
          // @TODO show preferences windows
        }
      }
    ]
  },
  {
    label: '&View',
    submenu: [
      {
        label: '&Full Screen',
        accelerator: process.platform === 'darwin' ? 'Ctrl+Command+F' : 'F11',
        type: 'checkbox',
        click (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
          }
        }
      },
      {
        label: 'Show &DevTools Window',
        accelerator: 'CmdOrCtrl+Alt+I',
        click (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.webContents.openDevTools({
              mode: 'undocked'
            })
          }
        }
      }
    ]
  },
  {
    label: '&Format',
    submenu: [
      {
        label: '&Font'
      },
      {
        label: '&Color'
      }
    ]
  },
  {
    label: '&Window',
    submenu: [
      {
        label: '&Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      },
      {
        label: '&Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: '&Zoom',
        role: 'zoom'
      }
    ]
  },
  {
    label: '&Help',
    role: 'help',
    submenu: [
      {
        label: '&About',
        click () {
          dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
            type: 'info',
            buttons: ['OK'],
            title: 'About',
            message: 'GReader is a text reader, thanks for use'
          })
        }
      },
      {
        label: '&Website',
        click () { shell.openExternal('https://github.com/guohr/GReader') }
      },
      {
        label: '&Issues',
        click () { shell.openExternal('https://github.com/guohr/GReader/issues') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  const name = app.getName()
  menuTpl.unshift({
    label: name,
    submenu: [
      {
        label: '&About ' + name,
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        label: '&Services',
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        label: '&Hide ' + name,
        accelerator: 'Command+H',
        role: 'hide'
      },
      {
        label: 'Hide Others',
        accelerator: 'Command+Alt+H',
        role: 'hideothers'
      },
      {
        label: '&Show All',
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        label: '&Quit',
        accelerator: 'Command+Q',
        click () { app.quit() }
      }
    ]
  })
  // Window menu.
  menuTpl[4].submenu = [
    {
      label: '&Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: '&Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: '&Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: '&Bring All to Front',
      role: 'front'
    }
  ]
}

const initMenuFunc = () => {
  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTpl))
}

export default class MenuUtils{
    static initMenu() {
       initMenuFunc()
      }
}

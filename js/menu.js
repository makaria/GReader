'use strict'
const electron = require('electron')
const {app, shell, dialog, BrowserWindow} = electron

const menu = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+F',
        click (item, focusedWindow) {
          // @TODO
        }
      },
      {
        label: 'Close',
        click (item, focusedWindow) {
          // @TODO
        }
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Full Screen',
        accelerator: process.platform === 'darwin' ? 'Ctrl+Command+F' : 'F11',
        type: 'checkbox',
        click (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
          }
        }
      },
      {
        label: 'menubar',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+M' : 'Ctrl+Shift+M',
        click (item, focusedWindow) {
        }
      }
    ]
  },
  {
    label: 'Help',
    role: 'help',
    submenu: [
      {
        label: 'About',
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
        label: 'website',
        click () { shell.openExternal('https://github.com/guohr/GReader') }
      },
      {
        label: 'issues',
        click () { shell.openExternal('https://github.com/guohr/GReader/issues') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  const name = app.getName()
  menu.unshift({
    label: name,
    submenu: [
      {
        label: 'About ' + name,
        role: 'about'
      },
      {
        type: 'separator'
      },
      {
        label: 'Services',
        role: 'services',
        submenu: []
      },
      {
        type: 'separator'
      },
      {
        label: 'Hide ' + name,
        accelerator: 'Command+H',
        role: 'hide'
      },
      {
        label: 'Hide Others',
        accelerator: 'Command+Alt+H',
        role: 'hideothers'
      },
      {
        label: 'Show All',
        role: 'unhide'
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click () { app.quit() }
      }
    ]
  })
  // Window menu.
  menu[3].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {
      type: 'separator'
    },
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}

module.exports = {
  setMenu: () => {
    Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
  },
  clearMenu: () => {
    Menu.setApplicationMenu(null)
  }
}

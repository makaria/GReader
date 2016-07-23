{
  'use strict'
  const electron = require('electron')
  const {app, shell, dialog, BrowserWindow, Menu} = electron

  let setMenuFunc = () => {
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTpl))
  }

  let clearMenuFunc = () => {
    Menu.setApplicationMenu(null)
  }

  const menuTpl = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          accelerator: 'CmdOrCtrl+F',
          click (item, focusedWindow) {
            let filename = dialog.showOpenDialog({properties: ['openFile']})
            focusedWindow.webContents.send('file-open', filename)
          }
        },
        {
          label: 'Close',
          accelerator: 'CmdOrCtrl+W',
          click (item, focusedWindow) {
            focusedWindow.close()
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
    menuTpl.unshift({
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
    menuTpl[3].submenu = [
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
    setMenu: setMenuFunc,
    clearMenu: clearMenuFunc
  }
}

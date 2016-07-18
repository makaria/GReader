{
  'use strict'
  console.log(require.resolve('electron'))
  const electron = require('electron')
  const {ipcRenderer, remote} = electron
  const dialog = remote.dialog

  const openFile = () => {
    console.log(dialog.showOpenDialog({properties: ['openFile']}))
  }

  // open file
  ipcRenderer.on('file-open', openFile)
}

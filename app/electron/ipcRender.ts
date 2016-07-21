/// <reference path="../../typings/github-electron.d.ts" />
'use strict'
import {ipcRenderer, remote} from 'electron'
const dialog = remote.dialog

const openFile = () => {
  console.log(dialog.showOpenDialog({properties: ['openFile']}))
}

// open file
ipcRenderer.on('file-open', openFile)

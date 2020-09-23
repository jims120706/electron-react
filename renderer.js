const { ipcRenderer } = require('electron')
const { BrowserWindow } = require('electron').remote

window.addEventListener('DOMContentLoaded', () => {
    console.log('DomContentLoaded')
    document.getElementById("fuck").addEventListener('click', () => {
        ipcRenderer.send('fuckYou', '嘛噶秋海')
        let win = new BrowserWindow({
            width: 500,
            height: 500,
        })
        win.loadURL('https://baidu.com')
    })
})
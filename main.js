const { app,BrowserWindow,ipcMain } = require('electron')
const path=require('path')
const url=require('url')

let win;
let token;


const {globalShortcut } = require('electron')

function createWindows() {
    // fullscreen : true,
    win = new BrowserWindow({
                height:900,
                width: 1500,    
                allowRendererProcessReuse : true,
                autoHideMenuBar  : true,
                fullscreen : true,
    })
    // alwaysOnTop : true,
    // minimizable : false,
    resizable :false,

    // win.webContents.openDevTools()

    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true,
        webPreferences: {
            nodeIntegration: true
        }
    }))
    // win.setMenu(null)
}


// ipcMain.on('asynchronous-message', (event, arg) => {
//   console.log(arg)
//   let interval  = setInterval(()=>{
//     event.reply('asynchronous-reply', users_token)
//   },1000)
  
//    setTimeout(()=>{
//       clearInterval(interval)
//   },60000)
// })


app.on('ready',() =>{
    createWindows()
     globalShortcut.register('CommandOrControl+Y', () => {
        // Do stuff when Y and either Command/Control is pressed.
    })

})


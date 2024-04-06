const { app,  BrowserWindow} = require('electron/main')


const createWindow = function(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
          }
    })

    win.loadFile('src/templates/index.html')
    win.on('closed', ()=>{
       app.quit()
    })
}

app.whenReady().then(()=>{
    createWindow()

    app.on('activate', ()=> {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})



app.on('window-all-closed', ()=>{
    if(process.platform !== 'darvin'){
        app.quit()
    }
})


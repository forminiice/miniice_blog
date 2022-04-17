## electron应用程序单一实例
开发过程中，发现打包后的应用可以多次打开，然而项目并不需要.  
这里electron版本是v13.1.7

#### 代码
``` js
// main.js 主进程
const { app } = require('electron')
let myWindow = null

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // 当运行第二个实例时,将会聚焦到myWindow这个窗口
    if (myWindow) {
      if (myWindow.isMinimized()) myWindow.restore()
      myWindow.focus()
    }
  })

  // 创建 myWindow, 加载应用的其余部分, etc...
  app.whenReady().then(() => {
    myWindow = createWindow()
  })
}
```

#### 参考文档
[Electron：应用程序单一实例](https://zhuanlan.zhihu.com/p/373963490)  
[Electron-应用开发API - app.requestSingleInstanceLock()](https://www.electronjs.org/zh/docs/latest/api/app#apprequestsingleinstancelock)  
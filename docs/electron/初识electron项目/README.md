## 项目指北

### config.json配置项
``` json
{
  "fingerprintPort": "6",  //指纹识别模块端口
}
```

### 外部模块支持
#### 身份证识别模块
需安装身份证识别模块官方提供服务（以管理员身份运行安装）  
#### 人脸识别模块
需要在d盘根目录下放入`seetaface6`和`opencv`两个文件夹，人脸识别模块需要调用

### 安装依赖
1. 管理员账号/权限下全局安装 `windows-build-tools`
``` sh
npm install --global --production windows-build-tools
```
* windows-build-tools 安装中会自动安装python 2.7/vs2017等依赖工具
* 安装时间可能会久一点，耐心等待（也可自行先安装好python和visual studio）
* 如提示python未安装,设置下python环境变量,python安装目录为`C:\Users\user\.windows-build-tools\python27`

2. 全局安装node-gyp
``` sh
npm install node-gyp -g
```

3. 指定`visual studio`版本,我这里安装的是2019(2017也可，windows-build-tools工具会自动安装2017)
``` sh
npm config set msvs_version 2019
```

3. 安装局部依赖  
参考[解决npm安装electron很慢的问题](https://segmentfault.com/a/1190000020932174)
``` sh
# 国内安装依赖很慢, 特别是electron本体
# 安装前设置淘宝镜像源
npm config set registry https://registry.npm.taobao.org/
npm config set ELECTRON_MIRROR http://npm.taobao.org/mirrors/electron/
# 安装依赖
npm install
```

### 项目运行
``` sh
npm run start
```

### 项目打包
详细参考  
[electron-builder打包build配置](https://segmentfault.com/a/1190000017296201)  
[解决electron-builder打包时下载依赖慢的问题](https://www.azimiao.com/6208.html)
1. package.json可配置项
``` json
{
  "name": "demo",
  "version": "0.0.2",
  "author": "四月 <507811581@qq.com>",
  "scripts": {
    "start": "electron .",  // 调试
    "build": "electron-builder",  // 打包
    "rebuild": "electron-rebuild"
  },
  "build": {  // electron-builder配置
    "productName":"xxxx",//项目名 这也是生成的exe文件的前缀名
    "appId": "xxxxx",//包名  
    "copyright":"xxxx",//版权  信息
    "compression": "store", // "store" | "normal"| "maximum" 打包压缩情况(store 相对较快)，store 39749kb, maximum 39186kb
    "directories": {
        "output": "build" // 输出文件夹
    }, 
    "asar": false, // asar打包
    "extraResources":  { // 拷贝dll等静态文件到指定位置
        "from": "./app-update.yml",
        "to": "./b.txt"
    },
    "win": {  
        "icon": "xxx/icon.ico"//图标路径,
        "extraResources":  { // 拷贝dll等静态文件到指定位置(用于某个系统配置)
            "from": "./app-update.yml",
            "to": "./b.txt"
        }
    },
    "nsis": {
        "oneClick": false, // 一键安装
        "guid": "xxxx", //注册表名字，不推荐修改
        "perMachine": true, // 是否开启安装时权限限制（此电脑或当前用户）
        "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
        "allowToChangeInstallationDirectory": true, // 允许修改安装目录
        "installerIcon": "./build/icons/aaa.ico", // 安装图标
        "uninstallerIcon": "./build/icons/bbb.ico", //卸载图标
        "installerHeaderIcon": "./build/icons/aaa.ico", // 安装时头部图标
        "createDesktopShortcut": true, // 创建桌面图标
        "createStartMenuShortcut": true, // 创建开始菜单图标
        "shortcutName": "xxxx" // 图标名称
    }
  }
}
```

2. 打包
``` sh
npm run build
```

### 遇到的问题
#### electron调用dll文件后页面白屏
在调用了人脸识别方法后，electron当前页面白屏
##### 原因及解决
在渲染进程调用nodejs方法去使用dll中的方法，内存占用大的时候，调用结束时渲染进程和内存一起被杀死，从而出现白屏。  
使用主进程/渲染进程通信调用nodejs方法  
#### 打包时下载依赖文件失败
参考[electron-builder打包环境搭建以及打包过程中的坑](https://blog.csdn.net/q1059997113/article/details/104273836)

``` sh
$ npm run build

> depositterminal@1.0.0 build C:\Users\ice\Documents\project\DepositTerminal00\DepositTerminal
> electron-builder

  • electron-builder  version=22.11.7 os=10.0.19043
  • loaded configuration  file=package.json ("build" field)
  • description is missed in the package.json  appPackageFile=C:\Users\ice\Documents\project\DepositTerminal00\DepositTerminal\package.json
  • writing effective config  file=dist\builder-effective-config.yaml
  • rebuilding native dependencies  dependencies=ffi-napi@4.0.3, ref-napi@3.0.3 platform=win32 arch=x64
  • packaging       platform=win32 arch=x64 electron=13.2.1 appOutDir=dist\win-unpacked
  ⨯ Get "https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z": read tcp 192.168.31.182:62306->20.205.243.166:443: wsarecv: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.
github.com/develar/app-builder/pkg/download.(*Downloader).follow.func1
        C:/Users/develar/Desktop/app-builder/pkg/download/downloader.go:206
github.com/develar/app-builder/pkg/download.(*Downloader).follow
        C:/Users/develar/Desktop/app-builder/pkg/download/downloader.go:234
github.com/develar/app-builder/pkg/download.(*Downloader).DownloadNoRetry
        C:/Users/develar/Desktop/app-builder/pkg/download/downloader.go:128
github.com/develar/app-builder/pkg/download.(*Downloader).Download
        C:/Users/develar/Desktop/app-builder/pkg/download/downloader.go:112
github.com/develar/app-builder/pkg/download.DownloadArtifact
        C:/Users/develar/Desktop/app-builder/pkg/download/artifactDownloader.go:107
github.com/develar/app-builder/pkg/download.downloadFromGithub
        C:/Users/develar/Desktop/app-builder/pkg/download/tool.go:63
github.com/develar/app-builder/pkg/download.DownloadWinCodeSign
        C:/Users/develar/Desktop/app-builder/pkg/download/tool.go:58
github.com/develar/app-builder/pkg/rcedit.editResources
        C:/Users/develar/Desktop/app-builder/pkg/rcedit/rcedit.go:30
github.com/develar/app-builder/pkg/rcedit.ConfigureCommand.func1
        C:/Users/develar/Desktop/app-builder/pkg/rcedit/rcedit.go:25
github.com/alecthomas/kingpin.(*actionMixin).applyActions
        C:/Users/develar/go/pkg/mod/github.com/alecthomas/kingpin@v2.2.6+incompatible/actions.go:28
github.com/alecthomas/kingpin.(*Application).applyActions
        C:/Users/develar/go/pkg/mod/github.com/alecthomas/kingpin@v2.2.6+incompatible/app.go:557
github.com/alecthomas/kingpin.(*Application).execute
        C:/Users/develar/go/pkg/mod/github.com/alecthomas/kingpin@v2.2.6+incompatible/app.go:390
github.com/alecthomas/kingpin.(*Application).Parse
        C:/Users/develar/go/pkg/mod/github.com/alecthomas/kingpin@v2.2.6+incompatible/app.go:222
main.main
        C:/Users/develar/Desktop/app-builder/main.go:90
runtime.main
        C:/Program Files/Go/src/runtime/proc.go:225
runtime.goexit
        C:/Program Files/Go/src/runtime/asm_amd64.s:1371
  • Above command failed, retrying 3 more times
  • downloading     url=https://github.com/electron-userland/electron-builder-binaries/releases/download/winCodeSign-2.6.0/winCodeSign-2.6.0.7z size=5.6 MB parts=1   
```
### 参考

[基于Vue Electron builder 项目调用DLL动态库](https://juejin.cn/post/6968342888690221086)  
[electron-builder打包build配置](https://segmentfault.com/a/1190000017296201)  
[解决npm安装electron很慢的问题](https://segmentfault.com/a/1190000020932174  )
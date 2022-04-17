## electron 日志

### 介绍
由于electron应用在客户机异常崩溃，不知道具体原因，故尝试加入日志记录问题

### electron-log
github介绍：electron-log是一个用于 Electron 或 NW.js 应用程序的简单日志记录模块
#### 简单使用
1. 安装依赖：`npm install electron-log -S`
2. 项目中引入：`const log = require('electron-log')`
3. 在主进程中需要打印日志的地方加入以下代码
``` js
log.error('错误日志');
log.info('提示日志');
log.warn('警告日志');
```
#### 部分配置
**打印日志文保存的文件名**：`log.transports.file.fileName = '日志名字.log'`  
**日志内容格式化**：`log.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}'`  

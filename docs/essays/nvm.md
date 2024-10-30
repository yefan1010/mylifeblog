
## nvm
##### 1.安装nvm,(https://nvm.uihtm.com/)
##### 2.nvm list available  查看远程的 node也可以通过node官网查看有哪些版本(https://nodejs.org/en/about/previous-releases)
##### 3.nvm list 查看本地的node版本有多少个
##### 4.下载对应的node版本, nvm install 14.0.0
##### 5.切换node的版本 nvm use 14.0.0 
##### 6.切换完检查一下是否切换成功, nvm list
##### 7.设置镜像源：
#### npm config set registry https://registry.npmmirror.com (淘宝)
#### npm config set registry https://registry.npmjs.org (官方镜像)
#### 8.查看当前使用的镜像地址: npm config get registry
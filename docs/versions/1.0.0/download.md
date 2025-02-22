# 下载 JboxTransfer
## 在 Windows 上运行
1、点击下面的链接下载：
<div class="tip custom-block" style="padding-top: 16px; padding-bottom: 16px;font-size: 24px; line-height: 30px">

[jboxtransfer-x64-installer-online.msi](/bin/jboxtransfer-x64-installer-online.msi)
</div>

2、双击运行下载的安装包文件
![](https://s2.loli.net/2023/10/16/7tIvRcbCsZVDiF9.png)

3、选择安装方法，建议保持默认，点击“下一步”
![](https://s2.loli.net/2023/10/16/9NHudkwv8qUcMDE.png)

4、阅读最终用户许可协议，选择“我接受许可协议中的条款”，点击“下一步”
![](https://s2.loli.net/2023/10/16/ytrkTigWfxonFBq.png)

5、选择安装位置，**强烈建议保持默认**（如果您想选择一个非系统盘目录，或许您需要[便携版应用](#所有二进制版本)而不是安装版），点击下一步
![](https://s2.loli.net/2023/10/16/v3C1ocUWyhRdBxa.png)

6、点击“安装”开始安装，期间可能会自动安装 .NET 运行库，请耐心等待，不要操作鼠标和键盘
![](https://s2.loli.net/2023/10/16/hys5bJudGMIXvD7.png)

7、完成安装
![](https://s2.loli.net/2023/10/16/7MbpZvFi45XBNjR.png)

接下来，您可能想转到“[快速上手](./quickstart)”部分继续阅读。


### 所有二进制版本
除了上面的`64位安装包-在线安装依赖库`版本外，开发者还提供其他程序版本以供有特殊需求的用户使用。

其中`自带依赖库`的版本自带了 `.NET7` 环境，但是如果您的系统版本号在 Windows 10 2004 以下，您可能仍然需要自行安装 [Webview2 运行时](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/#download-section)。

如果您需要 .NET7 运行环境，可以点击[这里](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-desktop-7.0.12-windows-x64-installer)下载。

|类型|下载点①|下载点②|
|---|---|---|
|64位安装包-在线安装依赖库|[直链](/bin/jboxtransfer-x64-installer-online.msi)|[jBox](https://jbox.sjtu.edu.cn/l/t1TGSS)|
|64位安装包-自带依赖库|[直链](/bin/jboxtransfer-x64-installer-offline.msi)|[jBox](https://jbox.sjtu.edu.cn/l/rpTkeN)|
|64位便携版-无依赖库|[直链](/bin/jboxtransfer-x64-portable-no-runtime.zip)|[jBox](https://jbox.sjtu.edu.cn/l/o1BygX)|
|64位便携版-自带依赖库|[直链](/bin/jboxtransfer-x64-portable-with-runtime.zip)|[jBox](https://jbox.sjtu.edu.cn/l/C1Vgo1)|

### 从源码构建
JboxTransfer 是开源软件，如果您对软件的安全性或者上面提供的二进制版本有顾虑，可以前往[开源代码仓库](https://github.com/1357310795/JboxTransfer)进行源码审查，然后自行编译运行。

### 安装时错误
若您在安装过程中遇到困难，请在[代码仓库](https://github.com/1357310795/JboxTransfer)提起 Issue 或者致信 jbox@sjtu.edu.cn。

## 在其他平台运行
受限于 UI 框架，在非 Windows 平台运行，请使用 CLI 版本。

https://github.com/Okabe-Rintarou-0/JboxTransferCLI
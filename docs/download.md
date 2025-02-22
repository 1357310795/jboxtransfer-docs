# 下载 JboxTransfer
## 在 Windows 上运行
1、点击下面的链接下载：
<div class="tip custom-block" style="padding-top: 16px; padding-bottom: 16px;font-size: 24px; line-height: 30px">

[JboxTransfer.Server.Installer-win-any-no-runtime.exe](/bin/JboxTransfer.Server.Installer-win-any-no-runtime.exe)
</div>

2、双击运行下载的安装包文件
![](https://s2.loli.net/2025/02/21/M8sHUjmAFpkJKau.png)

3、选择安装模式，如果您不知道这是什么，点击“只为我安装”
![](https://s2.loli.net/2025/02/21/8BmW9ANDrpnqyZT.png)

4、阅读最终用户许可协议，选择“我同意此协议”，点击“下一步”
![](https://s2.loli.net/2025/02/21/UfAJvDK6zYi3Xeu.png)

5、选择安装位置，**强烈建议保持默认**（如果您想选择一个非系统盘目录，或许您需要[便携版应用](#所有二进制版本)而不是安装版），点击“下一步”
![](https://s2.loli.net/2025/02/21/qIoOEdN8gabQlmn.png)

6、选择是否要创建桌面快捷方式，点击“下一步”
![](https://s2.loli.net/2025/02/21/L1EXJUp6I52SdqP.png)

7、点击“安装”开始安装，期间需要联网安装 .NET 运行库，请保持网络畅通
![](https://s2.loli.net/2025/02/21/nlhuFWVYZqybaT3.png)

8、完成安装
![](https://s2.loli.net/2025/02/21/EmBtOvrPkM8XuYe.png)

接下来，您可能想转到“[快速上手](./quickstart)”部分继续阅读。


### 所有二进制版本
除了上面的`64位安装包-在线安装依赖库`版本外，开发者还提供其他程序版本以供有特殊需求的用户使用。

其中`自带依赖库`的版本自带了 `ASP.NET 8.0` 环境，如果您选择`无依赖库`的版本，可能需要 `ASP.NET 8.0` 运行环境，可以点击[这里](https://dotnet.microsoft.com/zh-cn/download/dotnet/thank-you/runtime-aspnetcore-8.0.13-windows-x64-installer)下载。

|类型|下载点①|下载点②|下载点③|
|---|---|---|---|
|Windows 统一安装包-在线安装依赖库|[直链](/bin/JboxTransfer.Server.Installer-win-any-no-runtime.exe)|[jBox]()|[pan]()|
|Windows 64位便携版-无依赖库|[直链](/bin/JboxTransfer.Server-win-x64-no-runtime.zip)|[jBox]()|[pan]()|
|Windows 64位便携版-自带依赖库|[直链](/bin/JboxTransfer.Server-win-x64-with-runtime.zip)|[jBox]()|[pan]()|

更多版本可以在 [Github Releases](https://github.com/1357310795/JboxTransfer) 找到。

## 在 Linux/MacOS 上运行
请从 [Github Releases](https://github.com/1357310795/JboxTransfer) 下载对应版本后，直接运行。如果您选择无依赖库的版本，可能需要先[安装依赖库](https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0)。

## 在树莓派等设备上运行
这是完全可行的，但是您可能需要安装 SDK 并从源码构建。请自行查阅相关资料。

## 从源码构建
JboxTransfer 是开源软件，如果您对软件的安全性或者上面提供的二进制版本有顾虑，可以前往[开源代码仓库](https://github.com/1357310795/JboxTransfer)进行源码审查，然后自行编译运行。

## 安装时错误
若您在安装过程中遇到困难，请在[代码仓库](https://github.com/1357310795/JboxTransfer)提起 Issue 或者致信 pan@sjtu.edu.cn。
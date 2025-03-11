# 其他登录方式

若您因为下列原因无法正常登录，可以尝试本文的步骤。
- 二维码加载失败
- jAccount 账号是集体账号，无法登录交我办

## 步骤一：更新 JboxTransfer 到 2.0.2 版本
若您的 JboxTransfer 还未更新，请更新到 2.0.2 版本。

## 步骤二：获取您的认证凭证
1. 打开 https://my.sjtu.edu.cn/ 并登录
2. 然后在**同一浏览器窗口内**打开 https://jaccount.sjtu.edu.cn/jaccount/
3. 按下 F12 打开开发者工具（部分浏览器也可以使用 Ctrl+Shift+I），在“应用程序——存储——Cookie”里面可以看到 JAAuthCookie

![](https://s2.loli.net/2025/02/25/jZwpTbMv7yBDzUC.png)

4. 复制这一串内容备用（内容较长，请务必复制完整）

## 步骤三：登录 JboxTransfer
1. 启动 JboxTransfer
2. 在浏览器中打开 http://127.0.0.1:11896/swagger/index.html
（若网页打不开，请检查程序是否正常启动，是否更改了端口号）

3. 翻到最下面，找到“User”组里的“POST /api/v1/user/jaccount/directlogin”

![](https://s2.loli.net/2025/03/11/gNtDb9mRSjQp2X4.png)

4. 点开后，点击右上角的“Try it out”

![](https://s2.loli.net/2025/03/11/VSofy7djTOImcWD.png)

5. 填入刚才复制的认证凭据，点击“Execute”

![](https://s2.loli.net/2025/03/11/IJLaX5W6A93ESfv.png)

6. 若显示“请求成功”，则可以**在同一浏览器窗口内**打开主页 http://127.0.0.1:11896/ ，此时已经登录成功

![](https://s2.loli.net/2025/03/11/RoNTx4MEV62mWe3.png)